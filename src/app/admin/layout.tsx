import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Awksoft - Your profile page",
  description:
    "Profile of the user. Specific user how is providing services to the customers.",
};

export default function ServiceProviderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
