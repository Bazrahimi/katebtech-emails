import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Img, Link, Section, Text } from "@react-email/components";
import { KATEB_TECH_LOGO } from "@katebtech/core";
export const PoweredByKateb = () => {
    return (_jsx(Section, { style: {
            marginTop: "12px",
            paddingTop: "12px",
            borderTop: "1px solid #f3f4f6",
            textAlign: "center",
        }, children: _jsxs(Link, { href: "https://www.katebtech.com.au", target: "_blank", style: {
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
            }, children: [_jsx(Img, { src: KATEB_TECH_LOGO, width: "20", height: "20", alt: "Kateb Tech", style: {
                        display: "inline-block",
                        verticalAlign: "middle",
                        marginRight: "6px",
                    } }), _jsxs(Text, { style: {
                        fontSize: "11px",
                        color: "#9ca3af",
                        lineHeight: "16px",
                        margin: 0,
                    }, children: ["Powered by", " ", _jsx("span", { style: {
                                color: "#f59e0b",
                                fontWeight: 600,
                            }, children: "Kateb Tech" })] })] }) }));
};
