"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

import styles from "./joditReactComp.module.css";

export default function JoditReactComp() {
  const [blogHtml, setBlogHtml] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [category, setCategory] = useState<string>("");
  const [images, setImages] = useState<FileList | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(blogHtml, title, link, thumbnail, category, images);
  };

  const log = () => {
    setBlogHtml(content);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          className={`${styles.block} ${styles.input}`}
          required
          type="text"
          id="title"
          value={title}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setTitle(event.target.value)
          }
        />
        <br />
        <label htmlFor="link">Link: That will be used in address of blog</label>
        <input
          className={`${styles.block} ${styles.input}`}
          required
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
          required
          type="file"
          id="thumbnail"
          accept="image/*"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setThumbnail(event.target.files?.[0] || null)
          }
        />
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
        <label htmlFor="images">Images:</label>
        <input
          className={`${styles.block} ${styles.input}`}
          required
          type="file"
          id="images"
          accept="image/*"
          multiple
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setImages(event.target.files || null)
          }
        />
        <br />
        <section className={styles.editorCont}>
          <JoditEditor
            value={content}
            onChange={(newContent) => setContent(newContent)}
          />
        </section>
        <div className={styles.buttons}>
          <button type="submit">Submit</button>
          <span className={styles.btn} onClick={log}>
            want to see the content
          </span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: blogHtml }}></div>
      </form>
    </>
  );
}
