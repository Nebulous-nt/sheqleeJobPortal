import React from "react";

const AllCatagories = ({ itemsData }) => {
  return (
    <div className="categories-card">
      {/* <div className="tag-main-container">  */}
      {itemsData.map((item, index) => (
        <div className="categories-container" key={index}>
          <div className="black-div">
            <img src={item.icon} alt="catagory_image" />
          </div>
          <div className="category-card">
            <h4 className="categories-title">{item.TagsTitle}</h4>
            <div className="categories-info">
              {item.jobs.map((job, index) => (
                // <li key={index}>
                //   {job.number} {job.job}
                // </li>
                <h5>
                  {job.number} {job.job}
                </h5>
              ))}
              <img
                src="/img/dot.png"
                alt="dot_image"
                className="categories-dot"
              />
              {item.subscribes.map((subscribe, index) => (
                // <li key={index}>
                //   {subscribe.number} {subscribe.subscribe}
                // </li>
                <h5>
                  {subscribe.number} {subscribe.subscribe}
                </h5>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCatagories;
