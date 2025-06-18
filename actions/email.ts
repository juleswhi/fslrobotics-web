"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const Email = async (name: string, email: string, message: string): Promise<boolean> =>  {

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: [process.env.EMAIL as string],
      subject: "Message from website",
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return true;
  }
  catch {
    return false;
  }
}

export default Email;
