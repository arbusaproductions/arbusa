// app/api/counter/route.ts
import { kv } from "@vercel/kv";
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";

const KEY_TOTAL = "visitor_count_total";
const KEY_SEEN_PREFIX = "visitor_seen:"; // daily throttle

export async function GET() {
  // read cookie (simple daily throttle)
  const cookieStore = await cookies();
  const seenCookie = cookieStore.get("arbusa_seen");

  const total = (await kv.get<number>(KEY_TOTAL)) || 0;

  return NextResponse.json({ total, counted: !!seenCookie });
}

export async function POST() {
  const hdrs = await headers();
  const cookieStore = await cookies();

  // simple fingerprint: ip + ua + yyyy-mm-dd
  const ip = hdrs.get("x-forwarded-for")?.split(",")[0]?.trim() || "0.0.0.0";
  const ua = hdrs.get("user-agent") || "unknown";
  const now = new Date();
  const day = now.toISOString().slice(0, 10); // YYYY-MM-DD
  const fingerprint = `${ip}|${ua}|${day}`;
  const seenKey = KEY_SEEN_PREFIX + fingerprint;

  const already = await kv.get(seenKey);
  if (!already) {
    // expire after ~36h
    await kv.set(seenKey, 1, { ex: 60 * 60 * 36 });
    await kv.incr(KEY_TOTAL);
    // set a non-sensitive cookie to avoid second POST in same session
    cookieStore.set("arbusa_seen", "1", {
      httpOnly: false,
      sameSite: "lax",
      secure: true,
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });
  }

  const total = (await kv.get<number>(KEY_TOTAL)) || 0;
  return NextResponse.json({ total, counted: !already });
}
