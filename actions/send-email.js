"use server";

import { Resend } from "resend";

// Modify your sendEmail function to add more debugging:
export async function sendEmail({ to, subject, react }) {
  console.log(`Attempting to send email to ${to} with subject: ${subject}`);
  
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is missing or empty");
    return { success: false, error: "Missing API key" };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: "eXpenser App <onboarding@resend.dev>",
      to,
      subject,
      react,
    });
    
    console.log("Email sent successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
}