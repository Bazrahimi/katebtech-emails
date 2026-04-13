import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Img, Section } from "@react-email/components";
// app/_lib/email/components/EmailFooter.tsx
export const EmailFooter = ({ orgInfo }) => {
    return (_jsxs(Section, { className: "email-footer", style: {
            borderTop: "1px solid #e5e7eb",
            marginTop: "24px",
            paddingTop: "16px",
            display: "flex",
            alignItems: "flex-start",
            gap: "12px",
            flexWrap: "wrap",
        }, children: [_jsx(Img, { src: orgInfo.icon, alt: `${orgInfo.name} logo`, width: 48, height: 48, style: {
                    borderRadius: "9999px",
                    objectFit: "cover",
                    display: "block",
                } }), _jsxs("div", { style: {
                    fontSize: "12px",
                    color: "#4b5563",
                    lineHeight: 1.6,
                }, children: [_jsx("div", { style: { fontWeight: 600 }, children: orgInfo.name }), orgInfo.orgNameFarsi && (_jsx("div", { style: {
                            fontSize: "11px",
                            color: "#6b7280",
                            marginBottom: "4px",
                            direction: "rtl",
                            textAlign: "right",
                            unicodeBidi: "bidi-override",
                        } })), _jsx("div", { children: orgInfo.address }), _jsxs("div", { children: ["Email:", " ", _jsx("a", { href: `mailto:${orgInfo.email}`, style: { color: "#1d4ed8", textDecoration: "none" }, children: orgInfo.email })] }), orgInfo.phone && _jsxs("div", { children: ["Phone: ", orgInfo.phone] }), _jsxs("div", { children: ["Website:", " ", _jsx("a", { href: orgInfo.website, style: { color: "#1d4ed8", textDecoration: "none" }, children: orgInfo.website })] })] })] }));
};
