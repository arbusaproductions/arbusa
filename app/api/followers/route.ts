// app/api/followers/route.ts
import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

const K_TT = "followers:tiktok";
const K_IG = "followers:instagram";
const K_YT = "followers:youtube";

const UPDATE_TOKEN = process.env.FOLLOWER_UPDATE_TOKEN || "";

// Optional: YouTube API (für Live Subscriber Count)
const YT_API_KEY = process.env.YT_API_KEY || "";
const YT_CHANNEL_ID = process.env.YT_CHANNEL_ID || "";

export const dynamic = "force-dynamic";

// GET: Follower-Zahlen abrufen
export async function GET() {
  // aktuelle Werte aus Redis lesen
  const [tt, ig, ytCached] = await Promise.all([
    redis.get<number>(K_TT),
    redis.get<number>(K_IG),
    redis.get<number>(K_YT),
  ]);

  let yt = ytCached;

  // YouTube Live Count ziehen, wenn API-Key + Channel gesetzt
  if (YT_API_KEY && YT_CHANNEL_ID) {
    try {
      const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${YT_CHANNEL_ID}&key=${YT_API_KEY}`;
      const res = await fetch(url, { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        const subs = Number(data?.items?.[0]?.statistics?.subscriberCount ?? 0);
        if (subs > 0) {
          yt = subs;
          await redis.set(K_YT, subs, { ex: 60 * 60 }); // 1h Cache
        }
      }
    } catch {
      // falls API down, verwenden wir gecachten Wert
    }
  }

  return NextResponse.json({
    tiktok: Number(tt ?? 0),
    instagram: Number(ig ?? 0),
    youtube: Number(yt ?? 0),
  });
}

// POST: Manuelles Setzen (für TikTok / Instagram oder Fallback)
export async function POST(req: Request) {
  if (!UPDATE_TOKEN) {
    return NextResponse.json(
      { error: "No update token configured." },
      { status: 400 }
    );
  }

  const token = new URL(req.url).searchParams.get("token");
  if (token !== UPDATE_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await (async () => {
    try {
      return await req.json();
    } catch {
      return null;
    }
  })();

  if (!body?.platform || typeof body.value !== "number") {
    return NextResponse.json({ error: "Bad payload" }, { status: 400 });
  }

  const map: Record<string, string> = {
    tiktok: K_TT,
    instagram: K_IG,
    youtube: K_YT,
  };
  const key = map[body.platform];
  if (!key) {
    return NextResponse.json({ error: "Unknown platform" }, { status: 400 });
  }

  await redis.set(key, Math.max(0, Math.floor(body.value)));

  const [tt, ig, yt] = await Promise.all([
    redis.get<number>(K_TT),
    redis.get<number>(K_IG),
    redis.get<number>(K_YT),
  ]);

  return NextResponse.json({
    ok: true,
    tiktok: Number(tt ?? 0),
    instagram: Number(ig ?? 0),
    youtube: Number(yt ?? 0),
  });
}
