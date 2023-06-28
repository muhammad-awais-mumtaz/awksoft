import { Metadata } from "next";
import BlogLinks from "../../../../../components/blogLinks/blogLinks";

export const metadata: Metadata = {
  title: "Awksoft - Marketing Blog",
  description:
    "This blog explores the importance of marketing in driving the growth of your online business. We will cover various strategies and insights that can help you maximize your online presence, effectively reach your target audience, and improve overall performance.",
};

export default function Marketing() {
  return (
    <>
      <BlogLinks category="marketing" />
    </>
  );
}
