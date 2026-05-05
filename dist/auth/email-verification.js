import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// app/u/auth/_lib/email/templates/VerifyEmailCode.tsx
import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Text, } from "@react-email/components";
import { PoweredByKateb } from "../layout/PoweredByKateb";
export const EmailVerificationCode = ({ fullName, code, }) => {
    return (_jsxs(Html, { children: [_jsxs(Head, { children: [_jsx("meta", { name: "color-scheme", content: "light" }), _jsx("meta", { name: "supported-color-schemes", content: "light" }), _jsx("style", { children: `
            html, body {
              background-color: #ffffff !important;
              color: #111827 !important;
            }

            table, td, div, p, a, span, h1, h2, h3, h4 {
              background-color: #ffffff !important;
              color: #111827 !important;
            }

            /* Helps in WebKit-based clients that try to recolor text in dark mode */
            * {
              -webkit-text-fill-color: currentColor !important;
            }

            .email-container {
              background-color: #ffffff !important;
              color: #111827 !important;
            }

            .email-code-box {
              background-color: #f9fafb !important;
              border-color: #e5e7eb !important;
              color: #111827 !important;
            }

            .email-footer {
              border-top-color: #e5e7eb !important;
              background-color: #ffffff !important;
              color: #111827 !important;
            }
          ` })] }), _jsx(Preview, { children: "Your verification code" }), _jsx(Body, { style: {
                    backgroundColor: "#ffffff",
                    fontFamily: "Arial, sans-serif",
                    margin: 0,
                    padding: 0,
                    color: "#111827",
                }, children: _jsxs(Container, { className: "email-container", style: {
                        margin: "24px auto",
                        padding: "16px",
                        maxWidth: "640px",
                        backgroundColor: "#ffffff",
                        color: "#111827",
                    }, children: [_jsxs(Section, { style: { backgroundColor: "#ffffff", color: "#111827" }, children: [_jsx(Heading, { as: "h2", style: {
                                        fontSize: "22px",
                                        marginBottom: "12px",
                                        color: "#111827",
                                    }, children: "Verify your email" }), _jsxs(Text, { style: {
                                        fontSize: "14px",
                                        color: "#111827",
                                        marginBottom: "8px",
                                    }, children: ["Hi ", fullName || "there", ","] }), _jsx(Text, { style: {
                                        fontSize: "14px",
                                        color: "#111827",
                                        marginBottom: "12px",
                                        lineHeight: "1.5",
                                    }, children: "Use the 6-digit code below to confirm your email address. It expires in 10 minutes." }), _jsx(Text, { style: {
                                        fontSize: "14px",
                                        color: "#111827",
                                        marginBottom: "12px",
                                        lineHeight: "1.8",
                                        direction: "rtl",
                                        textAlign: "right",
                                    }, children: "\u0644\u0637\u0641\u0627\u064B \u0627\u0632 \u06A9\u062F \u0634\u0634\u200C\u0631\u0642\u0645\u06CC \u0632\u06CC\u0631 \u0628\u0631\u0627\u06CC \u062A\u0623\u06CC\u06CC\u062F \u0646\u0634\u0627\u0646\u06CC \u0627\u06CC\u0645\u06CC\u0644 \u062E\u0648\u062F \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u062F. \u0627\u06CC\u0646 \u06A9\u062F \u062A\u0627 \u06F1\u06F0 \u062F\u0642\u06CC\u0642\u0647 \u0622\u06CC\u0646\u062F\u0647 \u0627\u0639\u062A\u0628\u0627\u0631 \u062F\u0627\u0631\u062F." }), _jsx(Section, { className: "email-code-box", style: {
                                        display: "inline-block",
                                        padding: "12px 16px",
                                        border: "1px solid #e5e7eb",
                                        borderRadius: "8px",
                                        backgroundColor: "#f9fafb",
                                        fontSize: "24px",
                                        fontWeight: 700,
                                        letterSpacing: "0.2em",
                                        color: "#111827",
                                        marginBottom: "16px",
                                    }, children: code }), _jsx(Hr, { style: { borderColor: "#e5e7eb", margin: "16px 0" } }), _jsx(Text, { style: {
                                        color: "#6b7280",
                                        fontSize: "12px",
                                        marginBottom: "6px",
                                    }, children: "If you didn\u2019t request this, you can ignore this email." }), _jsx(Text, { style: {
                                        color: "#6b7280",
                                        fontSize: "12px",
                                        direction: "rtl",
                                        textAlign: "right",
                                    }, children: "\u0627\u06AF\u0631 \u0634\u0645\u0627 \u0627\u06CC\u0646 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0631\u0627 \u062B\u0628\u062A \u0646\u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F\u060C \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0627\u06CC\u0646 \u0627\u06CC\u0645\u06CC\u0644 \u0631\u0627 \u0646\u0627\u062F\u06CC\u062F\u0647 \u0628\u06AF\u06CC\u0631\u06CC\u062F." })] }), _jsx(PoweredByKateb, {})] }) })] }));
};
