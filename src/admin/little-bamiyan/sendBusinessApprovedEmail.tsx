"use server";

import { createEmailClient, FROM_KATEBTECH } from "../../lib/emailClient";

import { BusinessApprovedEmailBody } from "./BusinessApprovedEmailBody";

import type { SendActivationEmails } from "./types";

export const sendBusinessApprovedEmail = async (data: SendActivationEmails) => {
  try {
    const emailClient = createEmailClient(data.apiKey);

    return await emailClient.emails.send({
      from: FROM_KATEBTECH,
      to: [data.businessActivation.email],
      replyTo: data.orgInfo.email,
      subject: `Your business listing has been approved – ${data.orgInfo.name}`,
      react: <BusinessApprovedEmailBody data={data} />,
    });
  } catch (error) {
    console.error("❌ Failed to send business approval email:", error);
    throw error;
  }
};
