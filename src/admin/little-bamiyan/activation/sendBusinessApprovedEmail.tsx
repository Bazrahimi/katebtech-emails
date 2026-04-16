"use server";

import { createEmailClient } from "../../../lib/emailClient";

const FROM_LITTLE_BAMIYAN = `Little Bamiyan Directory <handler@katebtech.com.au>`;

import { BusinessApprovedEmailBody } from "./BusinessApprovedEmailBody";

import type { SendActivationEmails } from "./types";

export const sendBusinessApprovedEmail = async (data: SendActivationEmails) => {
  try {
    const emailClient = createEmailClient(data.apiKey);

    return await emailClient.emails.send({
      from: FROM_LITTLE_BAMIYAN,
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
