import { Img, Section } from "@react-email/components";
import type { EmailFooterProps } from "../contact-us/1/types";
// app/_lib/email/components/EmailFooter.tsx

export const EmailFooter = ({ orgInfo }: EmailFooterProps) => {
  return (
    <Section
      className="email-footer"
      style={{
        borderTop: "1px solid #e5e7eb",
        marginTop: "24px",
        paddingTop: "16px",
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        flexWrap: "wrap",
      }}
    >
      <Img
        src={orgInfo.icon}
        alt={`${orgInfo.name} logo`}
        width={48}
        height={48}
        style={{
          borderRadius: "9999px",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* Text block */}
      <div
        style={{
          fontSize: "12px",
          color: "#4b5563",
          lineHeight: 1.6,
        }}
      >
        {/* Org name */}
        <div style={{ fontWeight: 600 }}>{orgInfo.name}</div>

        {/* Farsi name (optional, RTL) */}
        {orgInfo.orgNameFarsi && (
          <div
            style={{
              fontSize: "11px",
              color: "#6b7280",
              marginBottom: "4px",
              direction: "rtl",
              textAlign: "right",
              unicodeBidi: "bidi-override",
            }}
          >
            {}
          </div>
        )}

        <div>{orgInfo.address}</div>

        <div>
          Email:{" "}
          <a
            href={`mailto:${orgInfo.email}`}
            style={{ color: "#1d4ed8", textDecoration: "none" }}
          >
            {orgInfo.email}
          </a>
        </div>

        {orgInfo.phone && <div>Phone: {orgInfo.phone}</div>}

        <div>
          Website:{" "}
          <a
            href={orgInfo.website}
            style={{ color: "#1d4ed8", textDecoration: "none" }}
          >
            {orgInfo.website}
          </a>
        </div>
      </div>
    </Section>
  );
};
