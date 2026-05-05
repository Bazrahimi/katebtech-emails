import { Resend } from "resend";
// export const emailClient = new Resend(serverEnv.resendApiKey);
export const createEmailClient = (apiKey) => {
    return new Resend(apiKey);
};
const katebEmailHandler = "<handler@katebtech.com.au>";
export const FROM_KATEBTECH = `Kateb Tech ${katebEmailHandler}`;
export const WEB_ENQUIRY = `Web Enquiry ${katebEmailHandler}`;
