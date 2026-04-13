"use server";
import { BusinessEmail } from "./BusinessEmail";
import { confirmationEmail } from "./ConfirmationEmail";
export const sendEnquiryEmails = async (data) => {
    const adminEmailPromise = BusinessEmail(data);
    const userEmailPromise = confirmationEmail(data);
    const [adminRes, userRes] = await Promise.allSettled([
        adminEmailPromise,
        userEmailPromise,
    ]);
    if (adminRes.status === "rejected") {
        console.error("Admin email send failed:", adminRes.reason);
    }
    if (userRes.status === "rejected") {
        console.error("User confirmation email failed:", userRes.reason);
    }
    let message = "Thanks! We have received your enquiry.";
    if (userRes.status === "rejected") {
        message += " (Heads-up: we couldn’t send the confirmation email.)";
    }
    return { message };
};
