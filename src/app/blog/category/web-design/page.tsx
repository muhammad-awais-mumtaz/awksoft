import { Metadata } from "next";
import BlogLinks from "../../../../../components/blogLinks/blogLinks";

export const metadata: Metadata = {
  title: "Awksoft - Web Design Blog",
  description:
    "This blog emphasizes the importance of good design in driving business growth. We will explore how effective design elements and principles can enhance brand perception, attract customers, and ultimately contribute to the overall success of a business. Through practical insights and examples, we will showcase the tangible benefits of investing in thoughtful and visually appealing design.",
};

export default function WebDesignBlog() {
  return (
    <>
      <BlogLinks category="Web design" />
    </>
  );
}
