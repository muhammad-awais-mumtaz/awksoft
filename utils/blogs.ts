import { serviceProvider } from "./serviceProvider";

export interface blogPostInterface {
  featuredImage: string;
  uploadDate: string;
  title: string;
  url: string;
  category: string;
  images: string[];
  blogDescription: string;
  blogHtml: string;
  employeeId: string;
}
export interface blogs {
  id: string;
  uid: string;
  featuredImage: string;
  uploadDate: string;
  title: string;
  url: string;
  category: string;
  images: string[];
  blogDescription: string;
  blogHtml: string;
  employeeId: string;
}

export const blogsArray: blogs[] = [
  {
    id: "1",
    uid: "1",
    featuredImage: "/blog/marketing.png",
    uploadDate: "2023-06-01",
    title: "Introduction to Web Development",
    url: "web-development-intro",
    category: "Web development",
    images: ["image1.jpg", "image2.jpg"],
    blogDescription: "blog Description",
    blogHtml: "<p>This is the content of the blog.</p>",
    employeeId: "good",
  },
  {
    id: "2",
    uid: "2",
    featuredImage: "/blog/marketing.png",
    uploadDate: "2023-06-02",
    title: "Design Principles for Beginners",
    url: "design-principles",
    category: "Web design",
    images: ["image3.jpg", "image4.jpg"],
    blogDescription: "blog Description",
    blogHtml: "<p>This is another blog.</p>",
    employeeId: "good",
  },
  {
    id: "3",
    uid: "3",
    featuredImage: "/blog/marketing.png",
    uploadDate: "2023-06-03",
    title: "Marketing Strategies for Small Businesses",
    url: "marketing-strategies",
    category: "Marketing",
    images: ["image5.jpg", "image6.jpg"],
    blogDescription: "blog Description",
    blogHtml:
      "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero doloremque saepe incidunt. Minima officiis maiores temporibus mollitia dolores eius quo explicabo, eligendi id cumque ex, quam nostrum. Molestias, praesentium sit.</p>",
    employeeId: "good",
  },
  {
    id: "4",
    uid: "4",
    featuredImage: "/blog/marketing.png",
    uploadDate: "2023-06-04",
    title: "Advanced Web Development Techniques",
    url: "advanced-web-development",
    category: "Web development",
    images: ["image7.jpg", "image8.jpg"],
    blogDescription: "blog Description",
    blogHtml: "<p>This blog covers advanced web development techniques.</p>",
    employeeId: "good",
  },
  {
    id: "5",
    uid: "5",
    featuredImage: "/blog/marketing.png",
    uploadDate: "2023-06-05",
    title: "Color Theory in Design",
    url: "color-theory-design",
    category: "web design",
    images: ["image9.jpg", "image10.jpg"],
    blogDescription: "blog Description",
    blogHtml: "<p>Learn about the importance of color theory in design.</p>",
    employeeId: "good",
  },
  {
    id: "6",
    uid: "6",
    featuredImage: "/blog/marketing.png",
    uploadDate: "2023-06-06",
    title: "Content Marketing Strategies",
    url: "content-marketing-strategies",
    category: "Marketing",
    images: ["image11.jpg", "image12.jpg"],
    blogDescription: "blog Description",
    blogHtml: "<p>Discover effective content marketing strategies.</p>",
    employeeId: "good",
  },
  {
    id: "7",
    uid: "7",
    featuredImage: "/blog/marketing.png",
    uploadDate: "2023-06-07",
    title: "Responsive Web Design Best Practices",
    url: "responsive-web-design",
    category: "Web development",
    images: ["image13.jpg", "image14.jpg"],
    blogDescription: "blog Description",
    blogHtml: "<p>Learn how to create responsive web designs.</p>",
    employeeId: "good",
  },
  {
    id: "9",
    uid: "9",
    featuredImage: "/blog/marketing.png",
    uploadDate: "2023-06-09",
    title: "User Experience Design Principles",
    url: "user-experience-design",
    category: "web design",
    images: ["image15.jpg", "image16.jpg"],
    blogDescription: "blog Description",
    blogHtml: "<p>Explore the principles of user experience design.</p>",
    employeeId: "good",
  },
  {
    id: "10",
    uid: "10",
    featuredImage: "/blog/marketing.png",
    uploadDate: "2023-06-10",
    title: "Digital Marketing Strategies for E-commerce",
    url: "digital-marketing-e-commerce",
    category: "Marketing",
    images: ["image17.jpg", "image18.jpg"],
    blogDescription: "m blog Description",
    blogHtml:
      "<p>Discover effective digital marketing strategies for e-commerce businesses.</p>",
    employeeId: "good",
  },
];
