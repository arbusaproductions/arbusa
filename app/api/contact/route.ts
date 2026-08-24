import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();
    const website = String(body.website || "").trim();

    // Honeypot gegen einfache Bots
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Bitte alle Felder ausfüllen." },
        { status: 400 },
      );
    }

    if (name.length > 100 || email.length > 200 || message.length > 5000) {
      return NextResponse.json(
        { error: "Eine Eingabe ist zu lang." },
        { status: 400 },
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Bitte eine gültige E-Mail-Adresse eingeben." },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "Arbusa Kontaktformular <onboarding@resend.dev>",
      to: "arbusa.productions@gmail.com",
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${name}`,
      text: `
Neue Nachricht über arbusaproductions.com

Name:
${name}

E-Mail:
${email}

Nachricht:
${message}
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Kontaktformular Fehler:", error);

    return NextResponse.json(
      { error: "Die Nachricht konnte nicht gesendet werden." },
      { status: 500 },
    );
  }
}
