import React, { useState } from "react";
import RouterHeader from "../components/RouterHeader";
import Pagination from "../components/Pagination";
import SectionWithImage from "../components/section/SectionWithImage";
import "../styles/tagsPage.css";

const allTagsData = [
  {
    Id: 1,
    TagsTitle: "Java",
    jobs: "140 jobs",
    subscribes: "2,173 subscribers",
  },
  {
    Id: 2,
    TagsTitle: "JavaScript",
    jobs: "210 jobs",
    subscribes: "1,430 subscribers",
  },
  {
    Id: 3,
    TagsTitle: "Python",
    jobs: "175 jobs",
    subscribes: "853 subscribers",
  },
  {
    Id: 4,
    TagsTitle: "Golang",
    jobs: "285 jobs",
    subscribes: "3,150 subscribers",
  },
  {
    Id: 5,
    TagsTitle: "Elixir",
    jobs: "101 jobs",
    subscribes: "430 subscribers",
  },
  {
    Id: 6,
    TagsTitle: "Rust",
    jobs: "523 jobs",
    subscribes: "2,563 subscribers",
  },
  {
    Id: 7,
    TagsTitle: "C/C++",
    jobs: "523 jobs",
    subscribes: "2,563 subscribers",
  },
  {
    Id: 8,
    TagsTitle: "Assembly",
    jobs: "523 jobs",
    subscribes: "1,430 subscribers",
  },
  {
    Id: 9,
    TagsTitle: "PHP",
    jobs: "523 jobs",
    subscribes: "2,563 subscribers",
  },
  {
    Id: 10,
    TagsTitle: "Ruby on Rails",
    jobs: "285 jobs",
    subscribes: "2,563 subscribers",
  },
  {
    Id: 11,
    TagsTitle: "MongoDB",
    jobs: "523 jobs",
    subscribes: "430 subscribers",
  },
  {
    Id: 12,
    TagsTitle: "HTML5",
    jobs: "523 jobs",
    subscribes: "2,563 subscribers",
  },
  {
    Id: 13,
    TagsTitle: "CSS3",
    jobs: "523 jobs",
    subscribes: "2,563 subscribers",
  },
  {
    Id: 14,
    TagsTitle: "ReactJS",
    jobs: "523 jobs",
    subscribes: "2,563 subscribers",
  },
  {
    Id: 15,
    TagsTitle: "AngularJS",
    jobs: "523 jobs",
    subscribes: "2,563 subscribers",
  },
  {
    Id: 16,
    TagsTitle: "VueJS",
    jobs: "523 jobs",
    subscribes: "2,563 subscribers",
  },
  {
    Id: 17,
    TagsTitle: "NextJS",
    jobs: "523 jobs",
    subscribes: "2,563 subscribers",
  },
  {
    Id: 18,
    TagsTitle: "SvelteJS",
    jobs: "523 jobs",
    subscribes: "2,563 subscribers",
  },
  {
    Id: 19,
    TagsTitle: "Flutter",
    jobs: "523 jobs",
    subscribes: "2,563 subscribers",
  },
  {
    Id: 20,
    TagsTitle: "React Native",
    jobs: "523 jobs",
    subscribes: "2,563 subscribers",
  },
  {
    Id: 21,
    TagsTitle: "Swift",
    jobs: "523 jobs",
    subscribes: "2,563 subscribers",
  },
];

const TagsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const routeName = "Tags";
  return (
    <>
      <RouterHeader path={routeName} />
      <div className="container">
        <img src="/img/tag.svg" alt="Categories Icon" className="tagsImage" />
        <h1 className="tagsHeader">All Tags</h1>
        <p className="tagsDescription">
          Job tags along with their respective number of jobs posted and number
          of subscribers.
        </p>
      </div>

      <div className="companies-card">
        {allTagsData.map((item, index) => (
          <div className="companies-container">
            <div className="companies-black"></div>
            <div className="companiy-card">
              <h4 className="companies-title">{item.TagsTitle}</h4>
              <div className="companies-info">
                <h5>{item.jobs}</h5>
                <img
                  src="/img/dot.png"
                  alt="dot_image"
                  className="companies-dot"
                />
                <h5>{item.subscribes}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={40}
        onPageChange={handlePageChange}
      />
      <SectionWithImage />
    </>
  );
};

export default TagsPage;
