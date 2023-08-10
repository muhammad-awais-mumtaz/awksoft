"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

import styles from "./blogEdit.module.css";
import { blogPostInterface } from "../../utils/blogs";
import { uploadImage } from "../../utils/firebase/uploadImage/uploadImage";
import Image from "next/image";
import { useAuth } from "../../utils/firebase/auth/useAuth";
import {
  getDataFromCollection,
  updateDataToCollection,
  uploadDataToCollection,
} from "../../utils/firebase/firestore/databaseManip";
import { useRouter } from "next/navigation";

interface props {
  id: string;
}

export default function BlogEdit({ id }: props) {
  const [blogHtml, setBlogHtml] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [imagesLinks, setImagesLinks] = useState<string[]>([]);
  const [thumbnailLink, setThumbnailLink] = useState<string>("");

  const user = useAuth();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      getDataFromCollection("blogsPosts")
        .then((data) => {
          let blogPost = data.find((blog) => blog.id === id);
          setContent(blogPost.blogHtml);
          setTitle(blogPost.title);
          setLink(blogPost.url);
          setDescription(blogPost.blogDescription);
          setCategory(blogPost.category);
          setImagesLinks(blogPost.images);
          setThumbnailLink(blogPost.featuredImage);
        })
        .catch((error) => {
          // Handle error if any
          console.error("Error fetching data:", error);
        });
    };

    fetchData();
  }, [id]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let blogPost = {
      title: title,
      featuredImage: thumbnailLink,
      category: category,
      images: imagesLinks,
      blogDescription: description,
      blogHtml: content,
    };
    updateDataToCollection("blogsPosts", id, blogPost);
    router.push("/admin");
  };

  const uploadThumbnail = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);
    if (file) {
      try {
        const downloadURL = await uploadImage("blog/thumbnail/", file);
        console.log("Image uploaded successfully. Download URL:", downloadURL);
        setThumbnailLink(downloadURL);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const uploadImagesToFirebase = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    let length = event.target.files?.length;
    if (length) {
      for (let index = 0; index < length; index++) {
        const file = event.target.files?.[index];
        if (link && file) {
          try {
            const downloadURL = await uploadImage(
              `blog/posts/${link?.toLowerCase().replace(/\s+/g, "-")}/`,
              file
            );
            imagesLinks.push(downloadURL);
            setImagesLinks([...imagesLinks]);
            console.log(imagesLinks);
          } catch (error) {
            console.log(error);
          }
        } else {
          alert(
            "May be you don't input title please enter title to upload images!"
          );
        }
      }
    }
  };

  const log = () => {
    setBlogHtml(content);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:Remaining characters: {60 - title.length}
        </label>
        <input
          className={`${styles.block} ${styles.input}`}
          required
          type="text"
          id="title"
          value={title}
          maxLength={60}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            let { value } = event.target;
            if (value.length <= 60) {
              setTitle(event.target.value);
            }
          }}
        />
        <br />
        <label htmlFor="link">Link: It is readonly!</label>
        <input
          className={`${styles.block} ${styles.input}  ${styles.readonly}`}
          required
          readOnly
          type="text"
          id="link"
          value={link}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setLink(event.target.value)
          }
        />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea
          className={`${styles.block} ${styles.input}`}
          required
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
        <br />
        <label htmlFor="thumbnail">Thumbnail:</label>
        <input
          className={`${styles.block} ${styles.input}`}
          type="file"
          id="thumbnail"
          accept="image/*"
          onChange={uploadThumbnail}
        />
        {thumbnailLink && (
          <div>
            <h3 className={styles.heading}>Thumbnail link and preview is: </h3>
            <Image
              src={thumbnailLink}
              height={200}
              width={300}
              alt="preview image"
            />
            <br />
            {thumbnailLink}
          </div>
        )}
        <br />
        <label htmlFor="category">Category:</label>
        <select
          className={`${styles.block} ${styles.input}`}
          required
          id="category"
          value={category}
          onChange={(event: ChangeEvent<HTMLSelectElement>) =>
            setCategory(event.target.value)
          }
        >
          <option value="">--Please choose a category--</option>
          <option value="Web Development">Web Development</option>
          <option value="Web Design">Web Design</option>
          <option value="Marketing">Marketing</option>
        </select>
        <br />
        <label htmlFor="images">
          Images: Select all the images 🖼️ you want to use in blog.
        </label>
        <input
          className={`${styles.block} ${styles.input}`}
          type="file"
          id="images"
          accept="image/*"
          multiple
          onChange={uploadImagesToFirebase}
        />
        {imagesLinks.length !== 0 && (
          <div>
            <h3 className={styles.heading}>
              Images links and previews is: Don't worry these are just previews.
              Just copy and past the image link to use.
            </h3>
            {imagesLinks.map((image, index) => (
              <div key={index}>
                <Image
                  src={image}
                  height={200}
                  width={300}
                  alt="preview images"
                />
                <br />
                {image}
              </div>
            ))}
          </div>
        )}
        <br />
        <section className={styles.editorCont}>
          <JoditEditor
            value={content}
            onChange={(newContent) => setContent(newContent)}
          />
        </section>
        <div className={styles.buttons}>
          <button type="submit">Update</button>
          <span className={styles.btn} onClick={log}>
            want to see the content
          </span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: blogHtml }}></div>
      </form>
    </>
  );
}
