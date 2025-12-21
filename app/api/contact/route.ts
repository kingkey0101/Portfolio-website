import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import ContactEmail from "@/emails/ContactEmail";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 },
      );
    }

    // Attempt to send via Resend if API key present
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "kingkey0101@outlook.com";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";
    const subjectPrefix =
      process.env.CONTACT_SUBJECT_PREFIX || "New portfolio contact";
    if (apiKey) {
      try {
        const resend = new Resend(apiKey);
        const { error } = await resend.emails.send({
          from: fromEmail,
          to: toEmail,
          subject: `${subjectPrefix} from ${name}`,
          replyTo: email,
          react: ContactEmail({ name, email, message }),
        });
        if (error) {
          console.error("Resend error", error);
          // Fall through to success to avoid blocking UX
        }
      } catch (err) {
        console.error("Resend send exception", err);
        // Continue to return success so UI is non-blocking
      }
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Contact API error", e);
    return NextResponse.json({ success: false, error: "Server error" });
  }
}
