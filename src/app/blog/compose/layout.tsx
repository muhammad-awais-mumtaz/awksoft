import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Awksoft - Compose A Blog",
  description: "This page is for composing the blog for Awksoft.",
};

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
