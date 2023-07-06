import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Awksoft - Log in",
  description:
    "Log in to Awksoft and connect with a community of skilled development, marketing, and design professionals",
};

export default function LogInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
