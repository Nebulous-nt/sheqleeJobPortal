import React from "react";
import "../styles/companies.css";
import RouterHeader from "../components/RouterHeader";

const companies = [
  {
    Id: 1,
    TagsTitle: "Skyeng",
    jobs: 10,
    subscribes: 173,
  },
  {
    Id: 2,
    TagsTitle: "Kappa London",
    jobs: 7,
    subscribes: 61,
  },
  {
    Id: 3,
    TagsTitle: "Deep Consulting Solutions",
    jobs: 21,
    subscribes: 221,
  },
  {
    Id: 4,
    TagsTitle: "Pragmateem",
    jobs: 2,
    subscribes: 13,
  },
  {
    Id: 5,
    TagsTitle: "Kepler Co., Ltd.",
    jobs: 23,
    subscribes: 402,
  },
  {
    Id: 6,
    TagsTitle: "NEKOM CC Gmbh",
    jobs: 0,
    subscribes: 0,
  },
  {
    Id: 7,
    TagsTitle: "Hotjar",
    jobs: 2,
    subscribes: 5,
  },
  {
    Id: 8,
    TagsTitle: "The Difference Engine",
    jobs: 0,
    subscribes: 3,
  },
];

const CampaniesPage = () => {
  const routeName = "Companies";
  return (
    <>
      <RouterHeader path={routeName} />
      <div className="container">
        <img
          src="/img/company (2).svg"
          alt="Categories Icon"
          className="imageIcon"
        />
        <h1 className="header">Companies on Sheqlee</h1>
        <p className="description">
          List of the companies on Sheqlee with their number of job posts and
          subscribers.
        </p>
      </div>

      <div className="companies-card">
        <div className="companies-container">
          <div className="companies-black"></div>
          <div className="companiy-card">
            <div className="verifyCompanies">
              <h4 className="companies-title">{companies[0].TagsTitle}</h4>
              <img
                src="/img/verify.svg"
                alt="verify_image"
                className="verifyImage"
              />
            </div>
            <div className="companies-info">
              <h5>{companies[0].jobs} Jobs</h5>
              <img
                src="/img/dot.png"
                alt="dot_image"
                className="companies-dot"
              />
              <h5>{companies[0].subscribes} subscribers</h5>
            </div>
          </div>
        </div>
        <div className="companies-container">
          <div className="companies-black"></div>
          <div className="companiy-card">
            <h4 className="companies-title">{companies[1].TagsTitle}</h4>
            <div className="companies-info">
              <h5>{companies[1].jobs} Jobs</h5>
              <img
                src="/img/dot.png"
                alt="dot_image"
                className="companies-dot"
              />
              <h5>{companies[1].subscribes} subscribers</h5>
            </div>
          </div>
        </div>
        <div className="companies-container">
          <div className="companies-black"></div>
          <div className="companiy-card">
            <div className="verifyCompanies">
              <h4 className="companies-title">{companies[0].TagsTitle}</h4>
              <img
                src="/img/verify.svg"
                alt="verify_image"
                className="verifyImage"
              />
            </div>{" "}
            <div className="companies-info">
              <h5>{companies[2].jobs} Jobs</h5>
              <img
                src="/img/dot.png"
                alt="dot_image"
                className="companies-dot"
              />
              <h5>{companies[2].subscribes} subscribers</h5>
            </div>
          </div>
        </div>
        <div className="companies-container">
          <div className="companies-black"></div>
          <div className="companiy-card">
            <h4 className="companies-title">{companies[3].TagsTitle}</h4>
            <div className="companies-info">
              <h5>{companies[3].jobs} Jobs</h5>
              <img
                src="/img/dot.png"
                alt="dot_image"
                className="companies-dot"
              />
              <h5>{companies[3].subscribes} subscribers</h5>
            </div>
          </div>
        </div>
        <div className="companies-container">
          <div className="companies-black"></div>
          <div className="companiy-card">
            <div className="verifyCompanies">
              <h4 className="companies-title">{companies[4].TagsTitle}</h4>
              <img
                src="/img/verify.svg"
                alt="verify-image"
                className="verifyImage"
              />
            </div>{" "}
            <div className="companies-info">
              <h5>{companies[4].jobs} Jobs</h5>
              <img
                src="/img/dot.png"
                alt="dot_image"
                className="companies-dot"
              />
              <h5>{companies[4].subscribes} subscribers</h5>
            </div>
          </div>
        </div>
        <div className="companies-container">
          <div className="companies-black"></div>
          <div className="companiy-card">
            <h4 className="companies-title">{companies[5].TagsTitle}</h4>
            <div className="companies-info">
              <h5>{companies[5].jobs} Jobs</h5>
              <img
                src="/img/dot.png"
                alt="dot_image"
                className="companies-dot"
              />
              <h5>{companies[5].subscribes} subscribers</h5>
            </div>
          </div>
        </div>
        <div className="companies-container">
          <div className="companies-black"></div>
          <div className="companiy-card">
            <div className="verifyCompanies">
              <h4 className="companies-title">{companies[6].TagsTitle}</h4>
              <img
                src="/img/verify.svg"
                alt="verify_image"
                className="verifyImage"
              />
            </div>{" "}
            <div className="companies-info">
              <h5>{companies[6].jobs} Jobs</h5>
              <img
                src="/img/dot.png"
                alt="dot_image"
                className="companies-dot"
              />
              <h5>{companies[6].subscribes} subscribers</h5>
            </div>
          </div>
        </div>
        <div className="companies-container">
          <div className="companies-black"></div>
          <div className="companiy-card">
            <h4 className="companies-title">{companies[7].TagsTitle}</h4>
            <div className="companies-info">
              <h5>{companies[7].jobs} Jobs</h5>
              <img
                src="/img/dot.png"
                alt="dot_image"
                className="companies-dot"
              />
              <h5>{companies[7].subscribes} subscribers</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaniesPage;
