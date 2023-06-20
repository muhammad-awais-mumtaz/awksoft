"use client";

import styles from "./webDesign.module.css";
import { useState, useEffect } from "react";

import { blogsArray } from "../../../../../utils/blogs";
import BlogCard from "../../../../../components/blogCard/blogCard";

const blogsPerPage = 9;

export default function WebDesignBlog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogsArray);

  useEffect(() => {
    const filtered = blogsArray.filter((blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBlogs(filtered);
  }, [searchQuery, blogsArray]);

  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const displayedBlogs = filteredBlogs.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSearchChange = (e: any) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset page to 1 when search query changes
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setCurrentPage(1); // Reset page to 1 when search query is cleared
  };

  return (
    <>
      <div className={styles.cont}>
        <section className={styles.search}>
          <input
            className={styles.input}
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search blogs"
          />
          <span>
            <button className={styles.btn} onClick={handleClearSearch}>
              Clear
            </button>
          </span>
        </section>
        <div className={styles.cardCont}>
          {displayedBlogs.map((card) => (
            <BlogCard
              key={card.id}
              uid={card.uid}
              image={card.featuredImage}
              altText={card.altText}
              uploadDate={card.uploadDate}
              title={card.title}
              category={card.category}
              url={card.url}
            />
          ))}
        </div>
        <div className={styles.nextPrevBtn}>
          <button
            className={styles.btn}
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            {"<"} previous
          </button>
          <span>Page {currentPage}</span>
          <button
            className={styles.btn}
            onClick={handleNextPage}
            disabled={endIndex >= filteredBlogs.length}
          >
            Next {">"}
          </button>
        </div>
      </div>
    </>
  );
}
