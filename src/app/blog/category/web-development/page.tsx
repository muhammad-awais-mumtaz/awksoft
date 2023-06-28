import { Metadata } from "next";
import BlogLinks from "../../../../../components/blogLinks/blogLinks";

export const metadata: Metadata = {
  title: "Awksoft - Web Development Blog",
  description:
    "Welcome to this blog where we explore the indispensable role of a business website, likening its importance to that of water and food for humans. Our discussion will revolve around strategies to increase sales, enhance brand value, and nurture personal branding through the utilization of a well-designed and impactful website. By uncovering effective methods, leveraging online platforms, and emphasizing the significance of a cohesive online presence, we aim to equip you with valuable insights that can empower you to harness the full potential of your website and accomplish your business objectives.",
};

export default function WebDevelopmentBlog() {
  return (
    <>
      <BlogLinks category="Web development" />
    </>
  );
}
