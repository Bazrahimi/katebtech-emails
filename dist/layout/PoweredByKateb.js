import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { KATEB_TECH_LOGO } from "@katebtech/core";
import { Img, Link, Section, Text } from "@react-email/components";
export const PoweredByKateb = () => {
    return (_jsx(Section, { style: {
            marginTop: "12px",
            paddingTop: "12px",
            borderTop: "1px solid #f3f4f6",
            textAlign: "center",
        }, children: _jsxs(Link, { href: "https://www.katebtech.com.au", target: "_blank", style: {
                textDecoration: "none",
                display: "inline-block",
                backgroundColor: "#0b3d2e",
                borderRadius: "999px",
                padding: "6px 12px",
                border: "1px solid rgba(255, 255, 255, 0.16)",
            }, children: [_jsx(Img, { src: KATEB_TECH_LOGO, width: "18", height: "18", alt: "Kateb Tech logo", style: {
                        display: "inline-block",
                        verticalAlign: "middle",
                        marginRight: "6px",
                    } }), _jsxs(Text, { style: {
                        display: "inline-block",
                        fontSize: "11px",
                        color: "#ffffff",
                        lineHeight: "18px",
                        margin: 0,
                        verticalAlign: "middle",
                    }, children: ["Powered by", " ", _jsx("span", { style: {
                                color: "#f59e0b",
                                fontWeight: 700,
                                fontSize: "13px",
                            }, children: "Kateb Tech" })] })] }) }));
};
