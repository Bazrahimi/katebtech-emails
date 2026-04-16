import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { FROM_KATEBTECH } from "../../lib/emailClient";
import { Hr, Text } from "@react-email/components";
import { EmailLayout } from "../../layout/EmailLayout";
export const EnquiryBody = ({ data, title, dontReplyNote = false, orgName, }) => {
    return (_jsxs(EmailLayout, { orgInfo: data.orgInfo, preview: data.enquiry.fullName, title: title, children: [_jsxs(Text, { children: [_jsx("strong", { children: "Name:" }), " ", data.enquiry.fullName] }), _jsxs(Text, { children: [_jsx("strong", { children: "Email:" }), " ", data.enquiry.email] }), _jsxs(Text, { children: [_jsx("strong", { children: "Phone:" }), " ", data.enquiry.contactNumber] }), data.enquiry.qMessage ? (_jsxs(_Fragment, { children: [_jsx(Hr, {}), _jsx(Text, { style: { whiteSpace: "pre-wrap" }, children: data.enquiry.qMessage })] })) : null, dontReplyNote ? (_jsxs(_Fragment, { children: [_jsx(Hr, {}), _jsxs(Text, { style: {
                            fontSize: "12px",
                            color: "#6b7280",
                            lineHeight: "18px",
                        }, children: [_jsx("strong", { children: "Note:" }), " Please do not reply to this email, as this is not monitored and replies may bounce back. This is an automated email sent from the website enquiry system. If you do not receive a response from ", orgName, ", please use the contact details provided in the footer below."] })] })) : null] }));
};
