import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Hr, Link, Text } from "@react-email/components";
import { EmailLayout } from "../../../layout/EmailLayout";
import { FROM_KATEBTECH } from "../../../lib/emailClient";
export const BusinessApprovedEmailBody = ({ data }) => {
    return (_jsxs(EmailLayout, { orgInfo: data.orgInfo, preview: `${data.businessActivation.name} listing approved`, title: "Your business listing has been approved", children: [_jsxs(Text, { children: ["Hello ", data.businessActivation.name, ","] }), _jsxs(Text, { children: ["Good news \u2014 your business listing has been reviewed and approved. It is now active on ", data.orgInfo.name, "."] }), data.businessActivation.FullUrl ? (_jsxs(_Fragment, { children: [_jsx(Hr, {}), _jsxs(Text, { children: ["You can view your listing here:", _jsx("br", {}), _jsx(Link, { href: data.businessActivation.FullUrl, children: data.businessActivation.FullUrl })] })] })) : null, _jsx(Hr, {}), _jsxs(Text, { style: { fontSize: "12px", color: "#6b7280", lineHeight: "18px" }, children: ["If any listing details need updating, please contact ", data.orgInfo.name, " ", "using the website contact details."] }), _jsx(Hr, {}), _jsxs(Text, { style: {
                    fontSize: "12px",
                    color: "#6b7280",
                    lineHeight: "18px",
                }, children: [_jsx("strong", { children: "Note:" }), " Please do not reply to ", FROM_KATEBTECH, ", as this address is not monitored and replies may bounce back. This is an automated email sent from the website enquiry system. If you do not receive a response from ", data.orgInfo.name, ", please use the contact details provided in the footer below."] })] }));
};
