import { Hr, Link, Text } from "@react-email/components";
import { EmailLayout } from "../../layout/EmailLayout";
import { FROM_KATEBTECH } from "../../lib/emailClient";
import type { SendActivationEmails } from "./types";

type Props = {
  data: SendActivationEmails;
};

export const BusinessApprovedEmailBody = ({ data }: Props) => {
  return (
    <EmailLayout
      orgInfo={data.orgInfo}
      preview={`${data.businessActivation.name} listing approved`}
      title="Your business listing has been approved"
    >
      <Text>Hello {data.businessActivation.name},</Text>

      <Text>
        Good news — your business listing has been reviewed and approved. It is
        now active on {data.orgInfo.name}.
      </Text>

      {data.businessActivation.FullUrl ? (
        <>
          <Hr />
          <Text>
            You can view your listing here:
            <br />
            <Link href={data.businessActivation.FullUrl}>
              {data.businessActivation.FullUrl}
            </Link>
          </Text>
        </>
      ) : null}

      <Hr />

      <Text style={{ fontSize: "12px", color: "#6b7280", lineHeight: "18px" }}>
        If any listing details need updating, please contact {data.orgInfo.name}{" "}
        using the website contact details.
      </Text>
      <Hr />
      <Text
        style={{
          fontSize: "12px",
          color: "#6b7280",
          lineHeight: "18px",
        }}
      >
        <strong>Note:</strong> Please do not reply to {FROM_KATEBTECH}, as this
        address is not monitored and replies may bounce back. This is an
        automated email sent from the website enquiry system. If you do not
        receive a response from {data.orgInfo.name}, please use the contact
        details provided in the footer below.
      </Text>
    </EmailLayout>
  );
};
