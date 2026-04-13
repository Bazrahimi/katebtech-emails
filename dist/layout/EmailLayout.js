import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { publicAssets } from "@/app/_lib/org/publicAssets";
import { Body, Container, Head, Heading, Html, Img, Preview, Section, Text, } from "@react-email/components";
import React from "react";
import { EmailFooter } from "./EmailFooter";
import { PoweredByKateb } from "./PoweredByKateb";
export const EmailLayout = ({ orgInfo, preview, title, introNote, dir = "ltr", children, }) => {
    return (_jsxs(Html, { dir: dir, children: [_jsx(Head, {}), _jsx(Preview, { children: preview }), _jsx(Body, { style: styles.body, children: _jsxs(Container, { style: styles.container, children: [_jsxs(Section, { style: styles.header, children: [_jsx(Img, { src: orgInfo.icon, alt: `${orgInfo.name} logo`, width: 48, height: 48, style: styles.logo }), _jsxs("div", { children: [_jsx(Heading, { as: "h1", style: styles.brand, children: orgInfo.name }), orgInfo.orgNameFarsi ? (_jsx(Text, { style: styles.brandFarsi, children: orgInfo.orgNameFarsi })) : null] })] }), title ? (_jsx(Section, { style: styles.titleWrap, children: _jsx(Heading, { as: "h2", style: styles.title, children: title }) })) : null, introNote ? (_jsx(Section, { style: styles.noteWrap, children: _jsx(Text, { style: styles.note, children: introNote }) })) : null, _jsx(Section, { style: styles.content, children: children }), _jsx(EmailFooter, { orgInfo: orgInfo }), _jsx(PoweredByKateb, {})] }) })] }));
};
const styles = {
    body: {
        backgroundColor: "#ffffff",
        fontFamily: "Arial, sans-serif",
        margin: 0,
        padding: 0,
    },
    container: {
        margin: "24px auto",
        padding: "16px",
        maxWidth: "640px",
    },
    header: {
        display: "flex",
        gap: "12px",
        alignItems: "center",
        paddingBottom: "8px",
    },
    logo: {
        borderRadius: "9999px",
        objectFit: "cover",
        display: "block",
    },
    brand: {
        margin: 0,
        fontSize: "18px",
        lineHeight: "24px",
    },
    brandFarsi: {
        margin: "2px 0 0 0",
        fontSize: "12px",
        color: "#6b7280",
        direction: "rtl",
        textAlign: "right",
    },
    titleWrap: {
        paddingTop: "8px",
        paddingBottom: "8px",
    },
    title: {
        margin: 0,
        fontSize: "16px",
        lineHeight: "22px",
    },
    noteWrap: {
        paddingBottom: "8px",
    },
    note: {
        margin: 0,
        fontSize: "12px",
        color: "#6b7280",
        lineHeight: "18px",
    },
    content: {
        paddingTop: "8px",
    },
};
