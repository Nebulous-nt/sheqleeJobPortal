import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageClick = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.pageNumbers}>
        {pageNumbers.slice(0, 9).map((page) => (
          <button
            key={page}
            className={`${styles.pageButton} ${
              page === currentPage ? styles.activePage : ""
            }`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        ))}
        <span className={styles.ellipsis}>...</span>
        <button
          className={`${styles.pageButton} ${
            39 === currentPage ? styles.activePage : ""
          }`}
          onClick={() => handlePageClick(39)}
        >
          39
        </button>
        <button
          className={`${styles.pageButton} ${
            40 === currentPage ? styles.activePage : ""
          }`}
          onClick={() => handlePageClick(40)}
        >
          40
        </button>
      </div>
      <div className={styles.navigationButtons}>
        <button
          className={styles.arrowButton}
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <img src="/img/left_arrow.svg" alt="Previous" />
        </button>
        <button
          className={styles.arrowRightButton}
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <img src="/img/right_arrow.svg" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
