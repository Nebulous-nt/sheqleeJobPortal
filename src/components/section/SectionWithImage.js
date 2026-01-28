import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./SectionWithImage.module.css"; // CSS module for styling
// import popper from "/assets/party_popper.png";

const SectionWithImage = () => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/professionalsignup");
  };

  return (
    <section className={styles.sectionwithimage}>
      <img
        src="/assets/party_popper.png"
        alt="Software Developer"
        className={styles.section_image}
      />
      <h2 className={styles.section_header}>
        Are you a software developer in Ethiopia?
      </h2>
      <button onClick={handleSignupClick} className={styles.section_button}>
        Sign up
      </button>
    </section>
  );
};

export default SectionWithImage;
