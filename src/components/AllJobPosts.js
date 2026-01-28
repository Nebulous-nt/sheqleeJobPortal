import React from "react";
import "../styles/jobPosts.css";

const AllJobs = ({ posts }) => {
  return (
    <div className="job-posts-container">
      {/* <div className="jobs-pagination">
        <h2 className="jobs-header">Latest job posts</h2>
        <div className="jobs-pagination-arrow">
          <p className="underline">
            {" "}
            <span className="moreJobs">{noOfPosts}+ m</span>ore jobs
          </p>
          <img
            src="/img/key-arrow.png"
            alt="arrow"
            className="jobs-arow-icon"
          />
        </div>
      </div> */}

      <div className="cards">
        {posts.map((post) => (
          <div key={post.id} className="card">
            <div className="card-header">
              <img className="job-image" src={post.icon} alt="" />
              <h5 className="job-title">{post.header}</h5>
            </div>
            <div className="content">{post.content}</div>
            <div className="info">
              <div className="info-postDate">
                {post.postDate.map((item, index) => (
                  <img src={item.Icon} key={index} alt=" " />
                ))}
                {post.postDate.map((item, index) => (
                  <div key={index}>{item.Date}</div>
                ))}
              </div>
              <div className="info-jopPostion">
                {post.job.map((item, index) => (
                  <img src={item.Icon} key={index} alt="" />
                ))}
                {post.job.map((item) => item.Title)}
              </div>
              <div className="info-time">
                {post.time.map((item, index) => (
                  <img src={item.Icon} key={index} alt="" />
                ))}
                {post.time.map((item) => item.Time)}
              </div>

              <div className="info-exprience">
                {post.exprience.map((item, index) => (
                  <img src={item.Icon} key={index} alt="" />
                ))}
                {post.exprience.map((item) => item.Level)}
              </div>
              <div className="info-salary">
                {post.salary.map((item, index) => (
                  <img src={item.Icon} key={index} alt="" />
                ))}
                {post.salary.map((item) => item.PerHour)}
              </div>
              <button className="apply_btn">Apply</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
