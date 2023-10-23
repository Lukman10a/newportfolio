"use server";

import React from "react";
import { Resend } from "resend";
import ContactEmailForm from "@/email/contact_email_form";
import { validateString, getErrorMessage } from "@/lib/utils";

const resendApi = process.env.RESEND_API_KEY;

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 500)) {
    return {
      error: "Invalid message",
    };
  }
  if (!resendApi)
    return {
      error: "Please provide a resend Api key",
    };

  const resend = new Resend(resendApi);

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact form <onboarding@resend.dev>",
      to: "mycoolmail@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactEmailForm, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
