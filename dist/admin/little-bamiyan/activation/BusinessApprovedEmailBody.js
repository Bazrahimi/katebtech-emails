import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Hr, Link, Text } from "@react-email/components";
import { EmailLayout } from "../../../layout/EmailLayout";
import { FROM_KATEBTECH } from "../../../lib/emailClient";
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
    direction: "rtl",
    textAlign: "right",
};
export const BusinessApprovedEmailBody = ({ data }) => {
    return (_jsxs(EmailLayout, { orgInfo: data.orgInfo, preview: `${data.businessActivation.name} listing approved`, title: "Your business listing has been approved", children: [_jsxs(Text, { children: ["Hi ", data.businessActivation.name, ","] }), _jsxs(Text, { children: ["Good news \u2014 your business listing has been reviewed and approved. It is now active on ", data.orgInfo.name, "."] }), _jsxs(Text, { style: hzRtlStyle, dir: "rtl", children: ["\u062E\u0628\u0631 \u062E\u0648\u0628 \u2014 \u0644\u0633\u062A \u06A9\u0627\u0631\u0648\u0628\u0627\u0631 \u0634\u064F\u0645\u0627 \u0628\u0631\u0631\u0633\u06CC \u0634\u064F\u062F \u0648 \u062A\u0627\u06CC\u06CC\u062F \u06AF\u0631\u062F\u06CC\u062F. \u062D\u0627\u0644\u0627 \u062F\u0631", " ", data.orgInfo.orgNameFarsi, " \u0641\u0639\u0627\u0644 \u0627\u0633\u062A."] }), data.businessActivation.fullUrl ? (_jsxs(_Fragment, { children: [_jsx(Hr, {}), _jsx(Text, { children: "You can view your listing here:" }), _jsx("br", {}), _jsx(Text, { style: hzRtlStyle, dir: "rtl", children: "\u0644\u0633\u062A \u06A9\u0627\u0631\u0648\u0628\u0627\u0631 \u062E\u0648\u062F \u0631\u0627 \u0627\u0632 \u0644\u06CC\u0646\u06A9 \u067E\u0627\u06CC\u06CC\u0646 \u062F\u06CC\u062F\u0647 \u0645\u06CC\u062A\u0648\u0627\u0646\u06CC\u062F:" }), _jsx("br", {}), _jsx(Link, { href: data.businessActivation.fullUrl, children: data.businessActivation.fullUrl })] })) : null, _jsx(Hr, {}), _jsxs(Text, { children: ["If any listing details need updating, please contact ", data.orgInfo.name, " ", "using the website contact details."] }), _jsxs(Text, { style: hzRtlStyle, dir: "rtl", children: ["\u0627\u06AF\u0631 \u06A9\u062F\u0627\u0645 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0644\u0633\u062A \u06A9\u0627\u0631\u0648\u0628\u0627\u0631 \u0634\u064F\u0645\u0627 \u0636\u0631\u0648\u0631\u062A \u0628\u0647 \u062A\u063A\u06CC\u06CC\u0631 \u062F\u0627\u0634\u062A\u060C \u0644\u0637\u0641\u0627\u064B \u0627\u0632 \u0637\u0631\u06CC\u0642 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u062A\u0645\u0627\u0633 \u0648\u06CC\u0628\u200C\u0633\u0627\u06CC\u062A \u0628\u0627 ", data.orgInfo.orgNameFarsi, " \u062F\u0631 \u0627\u0631\u062A\u0628\u0627\u0637 \u0634\u064E\u0648\u06CC\u062F."] }), _jsx(Hr, {}), _jsxs(Text, { style: {
                    fontSize: "12px",
                    color: "#6b7280",
                    lineHeight: "18px",
                }, children: [_jsx("strong", { children: "Note:" }), " Please do not reply to ", FROM_KATEBTECH, ", as this address is not monitored and replies may bounce back. This is an automated email sent from the website enquiry system."] }), _jsx(Text, { style: { ...hzNoteStyle, direction: "rtl", textAlign: "right" }, dir: "rtl", children: "\u0644\u0637\u0641\u0627\u064E \u0628\u0647 \u0627\u06CC\u0646 \u067E\u06CC\u0627\u0645 \u062C\u0648\u0627\u0628 \u0645\u0633\u062A\u0642\u06CC\u0645 \u0646\u062F\u0647\u06CC\u062F\u061B \u0686\u0648\u0646 \u06CC\u06A9 \u0627\u06CC\u0646 \u06CC\u06A9 \u067E\u06CC\u0627\u0645 \u062E\u0648\u062F\u06A9\u0627\u0631 \u0627\u0632 \u0633\u06CC\u0633\u062A\u0645 \u06A9\u0627\u062A\u0628 \u062A\u06CC\u06A9 \u0645\u06CC\u0628\u0627\u0634\u062F." })] }));
};
