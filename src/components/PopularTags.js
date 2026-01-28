import React from "react";
import "../styles/popularTags.css";

const PopularTags = ({ itemsData }) => {
  return (
    <div className="tags-holder">
      <div className="tags-pagination">
        <h2 className="tagsPageHeader">Popular tags</h2>
        <div className="tags-pagination-arrow">
          <p className="underline">
            <span className="moreTags">73+ m</span>ore tags
          </p>
          <img src="/img/key-arrow.png" alt="arrow" className="arow-icon" />
        </div>
      </div>
      <div className="tags-card">
        {/* <div className="tag-main-container">  */}
        {itemsData.map((item, index) => (
          <div className="tag-container" key={index}>
            <div className="black"></div>
            <div className="tag-card">
              <h4 className="tags-title">{item.TagsTitle}</h4>
              <div className="tags-info">
                {item.jobs.map((job, index) => (
                  <h5>
                    {job.number} {job.job}
                  </h5>
                ))}
                <img src="/img/dot.png" alt="dot_image" className="dot" />
                {item.subscribes.map((subscribe, index) => (
                  <h5>
                    {subscribe.number} {subscribe.subscribe}
                  </h5>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
