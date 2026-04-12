import type { ReactNode } from "react";

export type OrgInfo = {
  email: string;
  name: string;
  icon: string;
  orgNameFarsi: string;
  address: string;
  phone: string;
  website: string;
};

export type SendEnquiryEmails = {
  enquiry: {
    fullName: string;
    email: string;
    contactNumber: string;
    qMessage?: string;
  };
  apiKey: string;
  orgInfo: OrgInfo;
};

export type EmailLayoutProps = {
  orgInfo: OrgInfo;
  preview: string;
  title?: string;
  children: ReactNode;
  introNote?: string;
  dir?: "ltr" | "rtl";
};

export type EmailFooterProps = {
  orgInfo: OrgInfo;
};

export type EnquiryBodyProps =
  | {
      data: SendEnquiryEmails;
      title: string;
      dontReplyNote: true;
      orgName: string;
    }
  | {
      data: SendEnquiryEmails;
      title: string;
      dontReplyNote?: false;
      orgName?: never;
    };
