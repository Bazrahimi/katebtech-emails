
import { FROM_KATEBTECH } from "../../lib/emailClient";

import { Hr, Text } from "@react-email/components";
import { EmailLayout } from "../../layout/EmailLayout";
import type { EnquiryBodyProps } from "./types";

export const EnquiryBody = ({
  data,
  title,
  dontReplyNote = false,
  orgName,
}: EnquiryBodyProps) => {
  return (
    <EmailLayout
      orgInfo={data.orgInfo}
      preview={data.enquiry.fullName}
      title={title}
    >
      <Text>
        <strong>Name:</strong> {data.enquiry.fullName}
      </Text>

      <Text>
        <strong>Email:</strong> {data.enquiry.email}
      </Text>

      <Text>
        <strong>Phone:</strong> {data.enquiry.contactNumber}
      </Text>

      {data.enquiry.qMessage ? (
        <>
          <Hr />
          <Text style={{ whiteSpace: "pre-wrap" }}>
            {data.enquiry.qMessage}
          </Text>
        </>
      ) : null}

      {dontReplyNote ? (
        <>
          <Hr />
          <Text
            style={{
              fontSize: "12px",
              color: "#6b7280",
              lineHeight: "18px",
            }}
          >
            <strong>Note:</strong> Please do not reply to {FROM_KATEBTECH}, as
            this address is not monitored and replies may bounce back. This is
            an automated email sent from the website enquiry system. If you do
            not receive a response from {orgName}, please use the contact
            details provided in the footer below.
          </Text>
        </>
      ) : null}
    </EmailLayout>
  );
};
