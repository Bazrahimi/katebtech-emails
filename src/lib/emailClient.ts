import { Resend } from "resend";

// export const emailClient = new Resend(serverEnv.resendApiKey);
export const createEmailClient = (apiKey: string) => {
  return new Resend(apiKey);
};
const katebEmailHandler = "<handler@katebtech.com.au>";
export const FROM_KATEBTECH = `Kateb Technology ${katebEmailHandler}`;
export const WEB_ENQUIRY = `Web Enquiry ${katebEmailHandler}`;
