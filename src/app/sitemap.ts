import { MetadataRoute } from "next";
import { getDataFromCollection } from "../../utils/firebase/firestore/databaseManip";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getDataFromCollection("blogsPosts");
  const otherRouts = [
    "",
    "about",
    "admin",
    "blog",
    "blog/category/marketing",
    "blog/category/web-design",
    "blog/category/web-development",
    "logIn",
    "signUp",
    "user",
  ];
  return [
    ...otherRouts.map((route) => ({
      url: `https://www.awksoft.com/${route}`,
      lastModified: new Date(),
    })),
    ...blogPosts.map((post) => ({
      url: `https://www.awksoft.com/blog/category/${post.category
        .toLowerCase()
        .replace(/\s+/g, "-")}/${post.url.replace(/\s+/g, "+")}?id=${post.id}`,
      lastModified: new Date(),
    })),
  ];
}
