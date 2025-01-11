// src/app/api/send-sms/route.js
import { NextResponse } from "next/server";
import twilio from "twilio";

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = twilio(accountSid, authToken);

    await client.messages.create({
      body: `New message:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.MY_PHONE_NUMBER,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending SMS:", error);
    return NextResponse.json({ error: "Failed to send SMS" }, { status: 500 });
  }
}
