import { serviceProvider } from "./serviceProvider";

export interface blogs {
  id: string;
  uid: string;
  featuredImage: string;
  altText: string;
  uploadDate: string;
  title: string;
  url: string;
  category: string;
  images: string[];
  blogHtml: string;
  uploader: serviceProvider;
}

export const blogsArray: blogs[] = [
  {
    id: "1",
    uid: "1",
    featuredImage: "/blog/marketing.png",
    altText: "Image 1",
    uploadDate: "2023-06-01",
    title: "Introduction to Web Development",
    url: "web-development-intro",
    category: "Web development",
    images: ["image1.jpg", "image2.jpg"],
    blogHtml: "<p>This is the content of the blog.</p>",
    uploader: {
      name: "Muhammad Awais Mumtaz",
      skills: ["Web development, Project controller"],
      profileImage: "/blog/myself",
      blogger: true,
    },
  },
  {
    id: "2",
    uid: "2",
    featuredImage: "/blog/marketing.png",
    altText: "Image 2",
    uploadDate: "2023-06-02",
    title: "Design Principles for Beginners",
    url: "design-principles",
    category: "Web design",
    images: ["image3.jpg", "image4.jpg"],
    blogHtml: "<p>This is another blog.</p>",
    uploader: {
      name: "Muhammad Awais Mumtaz",
      skills: ["Web development, Project controller"],
      profileImage: "/blog/myself",
      blogger: true,
    },
  },
  {
    id: "3",
    uid: "3",
    featuredImage: "/blog/marketing.png",
    altText: "Image 3",
    uploadDate: "2023-06-03",
    title: "Marketing Strategies for Small Businesses",
    url: "marketing-strategies",
    category: "Marketing",
    images: ["image5.jpg", "image6.jpg"],
    blogHtml:
      "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero doloremque saepe incidunt. Minima officiis maiores temporibus mollitia dolores eius quo explicabo, eligendi id cumque ex, quam nostrum. Molestias, praesentium sit.</p>",
    uploader: {
      name: "Muhammad Awais Mumtaz",
      skills: ["Web development, Project controller"],
      profileImage: "/blog/myself",
      blogger: true,
    },
  },
  {
    id: "4",
    uid: "4",
    featuredImage: "/blog/marketing.png",
    altText: "Image 4",
    uploadDate: "2023-06-04",
    title: "Advanced Web Development Techniques",
    url: "advanced-web-development",
    category: "Web development",
    images: ["image7.jpg", "image8.jpg"],
    blogHtml: "<p>This blog covers advanced web development techniques.</p>",
    uploader: {
      name: "Muhammad Awais Mumtaz",
      skills: ["Web development, Project controller"],
      profileImage: "/blog/myself",
      blogger: true,
    },
  },
  {
    id: "5",
    uid: "5",
    featuredImage: "/blog/marketing.png",
    altText: "Image 5",
    uploadDate: "2023-06-05",
    title: "Color Theory in Design",
    url: "color-theory-design",
    category: "web design",
    images: ["image9.jpg", "image10.jpg"],
    blogHtml: "<p>Learn about the importance of color theory in design.</p>",
    uploader: {
      name: "Muhammad Awais Mumtaz",
      skills: ["Web development, Project controller"],
      profileImage: "/blog/myself",
      blogger: true,
    },
  },
  {
    id: "6",
    uid: "6",
    featuredImage: "/blog/marketing.png",
    altText: "Image 6",
    uploadDate: "2023-06-06",
    title: "Content Marketing Strategies",
    url: "content-marketing-strategies",
    category: "Marketing",
    images: ["image11.jpg", "image12.jpg"],
    blogHtml: "<p>Discover effective content marketing strategies.</p>",
    uploader: {
      name: "Muhammad Awais Mumtaz",
      skills: ["Web development, Project controller"],
      profileImage: "/blog/myself",
      blogger: true,
    },
  },
  {
    id: "7",
    uid: "7",
    featuredImage: "/blog/marketing.png",
    altText: "Image 7",
    uploadDate: "2023-06-07",
    title: "Responsive Web Design Best Practices",
    url: "responsive-web-design",
    category: "Web development",
    images: ["image13.jpg", "image14.jpg"],
    blogHtml: "<p>Learn how to create responsive web designs.</p>",
    uploader: {
      name: "Muhammad Awais Mumtaz",
      skills: ["Web development, Project controller"],
      profileImage: "/blog/myself",
      blogger: true,
    },
  },
  {
    id: "9",
    uid: "9",
    featuredImage: "/blog/marketing.png",
    altText: "Image 9",
    uploadDate: "2023-06-09",
    title: "User Experience Design Principles",
    url: "user-experience-design",
    category: "web design",
    images: ["image15.jpg", "image16.jpg"],
    blogHtml: "<p>Explore the principles of user experience design.</p>",
    uploader: {
      name: "Muhammad Awais Mumtaz",
      skills: ["Web development, Project controller"],
      profileImage: "/blog/myself",
      blogger: true,
    },
  },
  {
    id: "10",
    uid: "10",
    featuredImage: "/blog/marketing.png",
    altText: "Image 10",
    uploadDate: "2023-06-10",
    title: "Digital Marketing Strategies for E-commerce",
    url: "digital-marketing-e-commerce",
    category: "Marketing",
    images: ["image17.jpg", "image18.jpg"],
    blogHtml:
      "<p>Discover effective digital marketing strategies for e-commerce businesses.</p>",
    uploader: {
      name: "Muhammad Awais Mumtaz",
      skills: ["Web development, Project controller"],
      profileImage: "/blog/myself",
      blogger: true,
    },
  },
];
