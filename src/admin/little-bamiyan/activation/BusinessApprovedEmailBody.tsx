import { Hr, Link, Text } from "@react-email/components";
import { EmailLayout } from "../../../layout/EmailLayout";
import type { SendActivationEmails } from "./types";

type Props = {
  data: SendActivationEmails;
};

const hzStyle = {
  fontSize: "13px",
  color: "#6b7280",
  lineHeight: "22px",
  marginTop: "-6px",
};

const hzNoteStyle = {
  fontSize: "12px",
  color: "#6b7280",
  lineHeight: "20px",
  marginTop: "-6px",
};

const hzRtlStyle = {
  ...hzStyle,
  direction: "rtl" as const,
  textAlign: "right" as const,
};

export const BusinessApprovedEmailBody = ({ data }: Props) => {
  return (
    <EmailLayout
      orgInfo={data.orgInfo}
      preview={`${data.businessActivation.name} listing approved`}
      title="Your business listing has been approved"
    >
      <Text>Hi {data.businessActivation.name},</Text>

      <Text>
        Good news — your business listing has been reviewed and approved. It is
        now active on {data.orgInfo.name}.
      </Text>
      <Text style={hzRtlStyle} dir="rtl">
        خبر خوب — لست کاروبار شُما بررسی شُد و تایید گردید. حالا در{" "}
        {data.orgInfo.orgNameFarsi} فعال است.
      </Text>

      {data.businessActivation.fullUrl ? (
        <>
          <Hr />
          <Text>You can view your listing here:</Text>
          <br />
          <Text style={hzRtlStyle} dir="rtl">
            لست کاروبار خود را از لینک پایین دیده میتوانید:
          </Text>
          <br />
          <Link href={data.businessActivation.fullUrl}>
            {data.businessActivation.fullUrl}
          </Link>
        </>
      ) : null}

      <Hr />

      <Text>
        If any listing details need updating, please contact {data.orgInfo.name}{" "}
        using the website contact details.
      </Text>
      <Text style={hzRtlStyle} dir="rtl">
        اگر کدام معلومات لست کاروبار شُما ضرورت به تغییر داشت، لطفاً از طریق
        معلومات تماس ویب‌سایت با {data.orgInfo.orgNameFarsi} در ارتباط شَوید.
      </Text>

      <Hr />

      <Text
        style={{
          fontSize: "12px",
          color: "#6b7280",
          lineHeight: "18px",
        }}
      >
        <strong>Note:</strong> Please do not reply to this email, as this is not
        monitored and replies may bounce back. This is an automated email sent
        from the system. please use the contact details provided in the footer
        below.
      </Text>

      <Text
        style={{ ...hzNoteStyle, direction: "rtl", textAlign: "right" }}
        dir="rtl"
      >
        <strong>توجه:</strong> لطفاجواب مستقیم به این پیام ندهید؛ چون این یک
        پیام خودکار از سیستم کاتب تیک است. برای ارتباط مستقیم لطفاازمعلومات
        تماسی درست از فوتری پاین استیفاده کنید.
      </Text>
    </EmailLayout>
  );
};
