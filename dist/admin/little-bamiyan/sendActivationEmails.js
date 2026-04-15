"use server";
import { sendBusinessApprovedEmail } from "./sendBusinessApprovedEmail";
export const sendActivationEmails = async (data) => {
    const businessEmailResult = await Promise.allSettled([
        sendBusinessApprovedEmail(data),
    ]);
    const [businessRes] = businessEmailResult;
    if (businessRes.status === "rejected") {
        console.error("Business approval email failed:", businessRes.reason);
    }
    let message = "Business status updated.";
    if (businessRes.status === "rejected") {
        message += " (Listing was approved, but approval email could not be sent.)";
    }
    return { message };
};
