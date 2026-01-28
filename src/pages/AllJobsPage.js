import "../styles/allJobPosts.css";
import AllJobs from "../components/AllJobPosts";
import posts from "../data/allJobsData";
import RouterHeader from "../components/RouterHeader";
import React, { useState } from "react";
import Pagination from "../components/Pagination";
import SectionWithImage from "../components/section/SectionWithImage";

function AllJobsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: "All categories",
    type: "All types",
    level: "All levels",
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const applyFilters = () => {
    // Logic to apply filters and search
    console.log("Filters applied:", filters);
    console.log("Search term:", searchTerm);
  };
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const routeName = "All Jobs";

  return (
    <>
      <RouterHeader path={routeName} />

      <div className="job-postings">
        <h1 className="postHeader">All Job Posts</h1>
        <p className="postParagraph">
          Browse the latest jobs you can take up right now. Use <br /> filters
          to find the best jobs for your skillset.
        </p>

        <div className="filters">
          <select
            className="categoryfilter"
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
          >
            <option value="All categories"> All categories</option>
            <option value="Web Frontend">Web Frontend</option>
            <option value="Mobile Application">Mobile Application</option>
            <option value="Backend & Database">Backend & Database</option>
          </select>
          <select
            className="typefilter"
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
          >
            <option value="All types">All types</option>

            <option value="All types">Full-time</option>
            <option value="All types">Part-time</option>
            <option value="All types">Remote</option>
          </select>
          <select
            className="levelfilter"
            name="level"
            value={filters.level}
            onChange={handleFilterChange}
          >
            <option value="All levels">All levels</option>
            <option value="All levels">Expert</option>
            <option value="All levels">Intermediate</option>
            <option value="All levels">Junior</option>
          </select>
        </div>
        <div className="search-bar">
          <div>
            {/* <img
              src="/img/search_icon.svg"
              alt="searchicon"
              // className={styles.arrowIcon}
            /> */}
            <input
              type="text"
              placeholder="Search by programming technology or field..."
              value={searchTerm}
              className="search-input"
              onChange={handleSearchChange}
            />
          </div>
          <button className="applyFilter" onClick={applyFilters}>
            Apply filter
          </button>
        </div>
        <div className="job-list">
          <AllJobs posts={posts} />
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={40}
        onPageChange={handlePageChange}
      />
      <SectionWithImage />
    </>
  );
}

export default AllJobsPage;
