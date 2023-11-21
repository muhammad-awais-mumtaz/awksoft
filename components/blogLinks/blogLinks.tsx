"use client";

import styles from "./blogLinks.module.css";
import { useState, useEffect } from "react";

import BlogCard from "../blogCard/blogCard";
import { getDataFromCollection } from "../../utils/firebase/firestore/databaseManip";

const blogsPerPage = 9;

interface pageProps {
  category: string;
}

export default function BlogLinks({ category }: pageProps) {
  const [blogsArray, setBlogsArray] = useState<any[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchDataAndFilter = async () => {
      let data = await getDataFromCollection("blogsPosts");
      setBlogsArray(data);

      // Filter blogs based on the specified category
      const categorySpecificBlogs = data.filter((blog) =>
        blog.category.toLowerCase().includes(category.toLowerCase())
      );

      setFilteredBlogs(categorySpecificBlogs);
    };

    fetchDataAndFilter();
  }, [category]); // Re-run effect when category changes

  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const displayedBlogs = filteredBlogs.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div className={styles.cont}>
        <div className={styles.cardCont}>
          {displayedBlogs.map((card, index) => (
            <div key={index}>
              <BlogCard
                key={index}
                uid={card.id}
                image={card.featuredImage}
                uploadDate={card.uploadDate}
                title={card.title}
                category={card.category}
                url={card.url}
              />
              <div className={styles.hrCont}>
                <hr className={styles.hrLine} />
              </div>
            </div>
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
