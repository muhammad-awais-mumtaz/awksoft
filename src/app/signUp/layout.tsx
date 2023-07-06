import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Awksoft - Sign up",
  description:
    "Join Awksoft and gain access to a global network of development, marketing, and design professionals.",
};

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
