import * as React from "react";

type ContactEmailProps = {
  name: string;
  email: string;
  message: string;
};

export default function ContactEmail({
  name,
  email,
  message,
}: ContactEmailProps) {
  return (
    <html>
      <body
        style={{
          margin: 0,
          padding: 20,
          backgroundColor: "#0B1220",
          color: "#E5E7EB",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <table
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          style={{
            maxWidth: 640,
            margin: "0 auto",
            backgroundColor: "#0f172a",
            border: "1px solid #1f2937",
            borderRadius: 12,
          }}
        >
          <tbody>
            <tr>
              <td style={{ padding: 24 }}>
                <h2 style={{ margin: 0, color: "#bfdbfe" }}>
                  New portfolio contact
                </h2>
                <p style={{ margin: "8px 0 16px", color: "#94a3b8" }}>
                  You received a new message via your site.
                </p>
                <div
                  style={{
                    marginBottom: 16,
                    padding: 12,
                    backgroundColor: "#0b1324",
                    border: "1px solid #1f2937",
                    borderRadius: 8,
                  }}
                >
                  <p style={{ margin: 0 }}>
                    <strong style={{ color: "#bae6fd" }}>Name:</strong> {name}
                  </p>
                  <p style={{ margin: 0 }}>
                    <strong style={{ color: "#bae6fd" }}>Email:</strong> {email}
                  </p>
                </div>
                <div
                  style={{
                    marginTop: 12,
                    padding: 12,
                    backgroundColor: "#0b1324",
                    border: "1px solid #1f2937",
                    borderRadius: 8,
                  }}
                >
                  <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>{message}</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}
