// app/api/counter/route.ts
import { Redis } from "@upstash/redis";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const redis = Redis.fromEnv();

const KEY_TOTAL = "visitor_count_total";
const KEY_SEEN_PREFIX = "visitor_seen:";

export async function GET() {
  const total = (await redis.get<number>(KEY_TOTAL)) || 0;
  return NextResponse.json({ total, counted: false });
}

export async function POST() {
  const hdrs = await headers();
  const ip = hdrs.get("x-forwarded-for")?.split(",")[0]?.trim() || "0.0.0.0";
  const ua = hdrs.get("user-agent") || "unknown";
  const day = new Date().toISOString().slice(0, 10);
  const seenKey = `${KEY_SEEN_PREFIX}${ip}|${ua}|${day}`;

  const already = await redis.get(seenKey);
  if (!already) {
    await redis.set(seenKey, 1, { ex: 60 * 60 * 36 }); // 36h TTL
    await redis.incr(KEY_TOTAL);
  }
  const total = (await redis.get<number>(KEY_TOTAL)) || 0;

  const res = NextResponse.json({ total, counted: !already });
  res.cookies.set("arbusa_seen", "1", {
    httpOnly: false,
    sameSite: "lax",
    secure: true,
    maxAge: 60 * 60 * 24,
    path: "/",
  });
  return res;
}
