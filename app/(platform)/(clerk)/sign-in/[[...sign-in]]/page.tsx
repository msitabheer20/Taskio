import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <SignIn
    appearance={{
      elements: {
        card: {
          boxShadow: "none",
          border: "none",
          // borderRadius: "0.75rem"
        },
        cardBox: {
          boxShadow: "none",
          overflow: "hidden",
          border: "1px solid #e5e7eb",
          borderRadius: "5px"
        },
        formFieldInput: {
          padding: "0.8rem 0.75rem",
          borderRadius: "2px"
        },
        input: {
          fontSize: "1rem"
        },
        headerTitle: {
          fontSize: "1.875rem",
          lineHeight: "2.25rem",
          textAlign: "center",
          color: "#111827"
        },
        formButtonPrimary: {
          backgroundColor: "#2563eb",
          boxShadow: "none",
          // padding: "0.8rem 0.75rem",
          // background: "none",
          "&::after" : {
            background: "none",
          },
          borderRadius: "3px",
          fontSize: "1rem",
          color: "white",
          "&:hover": {
            backgroundColor: "#1d4ed8"
          },
        },
        socialButtonsBlockButton : {
          borderRadius: "3px",
        },
        socialButtonsBlockButtonText: {
          fontSize: "1rem",
        },
        footer: {
          background: "white"
        },
        footerActionText: {
          fontSize: "1rem",
        },
        footerActionLink: {
          fontSize: "1rem",
        },
      }
    }}
  />
}