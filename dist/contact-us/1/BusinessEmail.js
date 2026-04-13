"use server";
import { jsx as _jsx } from "react/jsx-runtime";
import { createEmailClient, WEB_ENQUIRY } from "../../lib/emailClient";
import { EnquiryBody } from "./EnquiryBody";
export const BusinessEmail = async (data) => {
    try {
        const emailClient = createEmailClient(data.apiKey);
        const result = await emailClient.emails.send({
            from: WEB_ENQUIRY,
            to: [data.orgInfo.email],
            replyTo: data.enquiry.email,
            subject: `Web Enquiry - ${data.enquiry.fullName}`,
            react: _jsx(EnquiryBody, { data: data, title: "New Web Enquiry" }),
        });
        return result;
    }
    catch (error) {
        console.error("❌ Failed to send admin email:", error);
        throw error;
    }
};
