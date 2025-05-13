import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <SignIn
    appearance={{
      elements: {
        card: {
          boxShadow: "none",
          border: "none",
          borderRadius: "0.75rem"
        },
        cardBox: {
          boxShadow: "none",
          overflow: "hidden",
          border: "1px solid #e5e7eb"
        },
        ".cl-internal-1dauvpw": {
          display: "none !important"
        },
        ".cl-internal-piyvrh": {
          background: "white"
        },
        headerTitle: {
          fontSize: "1.875rem",
          lineHeight: "2.25rem",
          textAlign: "center",
          color: "#111827"
        },
        formButtonPrimary: {
          backgroundColor: "#2563eb",
          color: "white",
          "&:hover": {
            backgroundColor: "#1d4ed8"
          },
        },
        footer: {
          background: "white"
        }
      }
    }}
  />
}