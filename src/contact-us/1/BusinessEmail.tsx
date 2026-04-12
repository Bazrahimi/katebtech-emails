"use server";

import { createEmailClient, WEB_ENQUIRY } from "../../lib/emailClient";

import { EnquiryBody } from "./EnquiryBody";
import type { SendEnquiryEmails } from "./types";

export const BusinessEmail = async (data: SendEnquiryEmails) => {
  try {
    const emailClient = createEmailClient(data.apiKey);
    const result = await emailClient.emails.send({
      from: WEB_ENQUIRY,
      to: [data.orgInfo.email],
      replyTo: data.enquiry.email,
      subject: `Web Enquiry - ${data.enquiry.fullName}`,
      react: <EnquiryBody data={data} title="New Web Enquiry" />,
    });

    return result;
  } catch (error) {
    console.error("❌ Failed to send admin email:", error);
    throw error;
  }
};
