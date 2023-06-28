"use client";
import React, { useRef, useState, ChangeEvent, FormEvent } from "react";
import { Editor } from "@tinymce/tinymce-react";

import styles from "./tinyMCEComp.module.css";

export default function TinyMCEComp() {
  const editorRef = useRef<any>(null);

  const [blogHtml, setBlogHtml] = useState("");
  const [title, setTitle] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [category, setCategory] = useState<string>("");
  const [images, setImages] = useState<FileList | null>(null);
  const [employeeId, setEmployeeId] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(blogHtml, title, link, thumbnail, category, images, employeeId);
  };

  const log = () => {
    if (editorRef.current) {
      setBlogHtml(editorRef.current.getContent());
    }
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
        <label htmlFor="link">Link:</label>
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
        >
          Description
        </textarea>
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
          multiple
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setImages(event.target.files || null)
          }
        />
        <br />
        <label htmlFor="employeeId">Employee ID:</label>
        <input
          className={`${styles.block} ${styles.input}`}
          required
          type="text"
          id="employeeId"
          value={employeeId}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setEmployeeId(event.target.value)
          }
        />
        <br />
        <Editor
          id="hello_something_unique"
          apiKey={process.env.NEXT_PUBLIC_TINYMCE_API}
          onInit={(evt, editor) => (editorRef.current = editor)}
          init={{
            height: 500,
            menubar: false,
            plugins:
              "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss",
            toolbar:
              "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            tinycomments_mode: "embedded",
            tinycomments_author: "Author name",
            mergetags_list: [
              { value: "First.Name", title: "First Name" },
              { value: "Email", title: "Email" },
            ],
          }}
        />
        <div className={styles.buttons}>
          <button type="submit">Submit</button>
          <button className={styles.btn} onClick={log}>
            want to see the content
          </button>
        </div>
        <div dangerouslySetInnerHTML={{ __html: blogHtml }}></div>
      </form>
    </>
  );
}
