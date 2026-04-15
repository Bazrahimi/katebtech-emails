"use server";
import { jsx as _jsx } from "react/jsx-runtime";
import { createEmailClient, FROM_KATEBTECH } from "../../lib/emailClient";
import { BusinessApprovedEmailBody } from "./BusinessApprovedEmailBody";
export const sendBusinessApprovedEmail = async (data) => {
    try {
        const emailClient = createEmailClient(data.apiKey);
        return await emailClient.emails.send({
            from: FROM_KATEBTECH,
            to: [data.businessActivation.email],
            replyTo: data.orgInfo.email,
            subject: `Your business listing has been approved – ${data.orgInfo.name}`,
            react: _jsx(BusinessApprovedEmailBody, { data: data }),
        });
    }
    catch (error) {
        console.error("❌ Failed to send business approval email:", error);
        throw error;
    }
};
