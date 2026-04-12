"use server";

import { createEmailClient, FROM_KATEBTECH } from "../../lib/emailClient";
import { EnquiryBody } from "./EnquiryBody";
import type { SendEnquiryEmails } from "./types";
export const confirmationEmail = async (data: SendEnquiryEmails) => {
  try {
    const emailClient = createEmailClient(data.apiKey);
    const result = emailClient.emails.send({
      from: FROM_KATEBTECH,
      to: [data.enquiry.email],
      replyTo: data.orgInfo.email,
      subject: `Your enquiry is sent to – ${data.orgInfo.name}`,
      react: (
        <EnquiryBody
          data={data}
          title="Your enquiry has been sent"
          dontReplyNote
          orgName={data.orgInfo.name}
        />
      ),
    });

    return result;
  } catch (error) {
    console.error("❌ Failed to send Confirmation email:", error);
    throw error;
  }
};
