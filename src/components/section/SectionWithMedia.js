import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import styles from "./SectionWithMedia.module.css";
// import jsons from "../../assets/78518.json";

const SectionWithMedia = () => {
  return (
    <section className={styles.section}>
      {/* Text Content */}
      <div className={styles.textContent}>
        <h1 className={styles.header}>
          Recruit <span className={styles.coloured}>affordable</span>
          <br /> & <span className={styles.coloured}>skilled</span> Ethiopian
          <br />
          professionals.
        </h1>
        <p className={styles.paragraph}>
          Web frontend, mobile app, backend, database,
          <br /> full-stack, data science, UI/UX & product design,
          <br /> project management, scrum master, etc.
        </p>
        <button className={styles.button}>Post your projects</button>
      </div>

      {/* Lottie Animation */}
      <div className={styles.mediaContent}>
        <Player
          autoplay
          loop
          src="/assets/78518.json"
          style={{
            width: "738px",
            height: "670px",
          }}
        />
      </div>
    </section>
  );
};

export default SectionWithMedia;
