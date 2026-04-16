import { Hr, Link, Text } from "@react-email/components";
import { EmailLayout } from "../../../layout/EmailLayout";
import { FROM_KATEBTECH } from "../../../lib/emailClient";
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

export const BusinessApprovedEmailBody = ({ data }: Props) => {
  return (
    <EmailLayout
      orgInfo={data.orgInfo}
      preview={`${data.businessActivation.name} listing approved`}
      title="Your business listing has been approved"
    >
      <Text>Hello {data.businessActivation.name},</Text>
      <Text style={hzStyle}>سلام {data.businessActivation.name} عزیز،</Text>

      <Text>
        Good news — your business listing has been reviewed and approved. It is
        now active on {data.orgInfo.name}.
      </Text>
      <Text style={hzStyle}>
        خبر خوب — لست کاروبار شُما بررسی شُد و تایید گردید. حالی در{" "}
        {data.orgInfo.orgNameFarsi} فعال است.
      </Text>

      {data.businessActivation.fullUrl ? (
        <>
          <Hr />
          <Text>
            You can view your listing here:
            <br />
            <Link href={data.businessActivation.fullUrl}>
              {data.businessActivation.fullUrl}
            </Link>
          </Text>
          <Text style={hzStyle}>لست کاروبار خُوده ازیجه دیده می‌تانید:</Text>
        </>
      ) : null}

      <Hr />

      <Text>
        If any listing details need updating, please contact {data.orgInfo.name}{" "}
        using the website contact details.
      </Text>
      <Text style={hzStyle}>
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
        <strong>Note:</strong> Please do not reply to {FROM_KATEBTECH}, as this
        address is not monitored and replies may bounce back. This is an
        automated email sent from the website enquiry system. If you do not
        receive a response from {data.orgInfo.name}, please use the contact
        details provided in the footer below.
      </Text>

      <Text style={hzNoteStyle}>
        <strong>یادآوری:</strong> لطفاً به {FROM_KATEBTECH} جواب نَتین، بخاطر
        ازی که ای آدرس ایمیل نظارت نمی‌شه و جواب شُما شاید پس بیایه. ای یک ایمیل
        خودکار از سیستم درخواست‌های ویب‌سایت است. اگر از طرف{" "}
        {data.orgInfo.orgNameFarsi} جوابی دریافت نَکدین، لطفاً از معلومات تماس
        که در پایین آمده استفاده کُنید.
      </Text>
    </EmailLayout>
  );
};
