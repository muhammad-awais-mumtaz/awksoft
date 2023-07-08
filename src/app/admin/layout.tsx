import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Awksoft - User admin",
  description:
    "Admin control for user this page is for both service providers and customers both.",
};

export default function ServiceProviderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
