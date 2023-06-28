import "./globals.css";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Awksoft - Best Tailored Teams",
  description:
    "Reduce time and costs with our tailored teams for development, marketing, and design challenges. Perfect for startups. Contact us for custom solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
