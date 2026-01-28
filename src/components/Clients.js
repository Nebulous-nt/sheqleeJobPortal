/* <div className="clientdatas-card">
  {itemsData.map((item, index) => (
    <div className="clientdatas-container" key={index}>
      <div className="black-div">
        <h2>1.5M+</h2>
      </div>
      <div className="clientdatas-card">
        <h4 className="clientdatas-title">{item.TagsTitle}</h4>
        <div className="clientdatas-info">
          <p>notifications and subscribers</p>
        </div>
      </div>
    </div>
  ))}
</div>; */

import React from "react";
import styles from "./Clients.module.css";

const clientdata = [
  {
    title: "1.5M+",
    subtitle: "Unique alerts delivered",
    description:
      "We have been delivered 3,916,718 notifications about new remote jobs to job seekers since the website launched. (Launched: 1 YEAR AGO)",
  },
  {
    title: "49.7K+",
    subtitle: "Telegram Channel Subscribers",
    description:
      "We have a telegram channel with 49,716+ real subscribers. Our channel posts have 29.5K views per day on average.",
  },
  {
    title: "1.5M+",
    subtitle: "Unique alerts delivered",
    description:
      "We have been delivered 3,916,718 notifications about new remote jobs to job seekers since the website launched. (Launched: 1 YEAR AGO)",
  },
  {
    title: "49.7K+",
    subtitle: "Telegram Channel Subscribers",
    description:
      "We have a telegram channel with 49,716+ real subscribers. Our channel posts have 29.5K views per day on average.",
  },
];

const Clients = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>Sheqlee for Clients</h1>
        <p className={styles.subHeader}>
          Access a pool of talented, competent and dedicated experts and
          professional from Ethiopia.
        </p>
        <div className={styles.buttonGroup}>
          <button className={styles.loginButton}>Log in</button>
          <button className={styles.registerButton}>
            Register as an employer
          </button>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.clientCard}>
          <div className={styles.leftPanel}>
            <h1 className={styles.title}>{clientdata[0].title}</h1>
          </div>
          <div className={styles.rightPanel}>
            <h2 className={styles.subtitle}>{clientdata[0].subtitle}</h2>
            <p className={styles.description}>{clientdata[0].description}</p>
          </div>
        </div>
        <div className={styles.teleClientCard}>
          <div className={styles.rightPanel}>
            <h2 className={styles.subtitle}>{clientdata[1].subtitle}</h2>
            <p className={styles.description}>{clientdata[1].description}</p>
          </div>
          <div className={styles.leftPanel}>
            <h1 className={styles.title}>{clientdata[1].title}</h1>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.clientCard}>
          <div className={styles.leftPanel}>
            <h1 className={styles.title}>{clientdata[0].title}</h1>
          </div>
          <div className={styles.rightPanel}>
            <h2 className={styles.subtitle}>{clientdata[0].subtitle}</h2>
            <p className={styles.description}>{clientdata[0].description}</p>
          </div>
        </div>
        <div className={styles.teleClientCard}>
          <div className={styles.rightPanel}>
            <h2 className={styles.subtitle}>{clientdata[1].subtitle}</h2>
            <p className={styles.description}>{clientdata[1].description}</p>
          </div>
          <div className={styles.leftPanel}>
            <h1 className={styles.title}>{clientdata[1].title}</h1>
          </div>
        </div>
        <button className={styles.registerAsEmployerButton}>
          Post a job now
        </button>
      </div>
      <div className={styles.iconsContainer}>
        <h2 className={styles.iconsHeader}>Trusted by</h2>
        <div className={styles.iconGroup}>
          <img src="/assets/google.png" alt="Google" className={styles.icon} />
          <img src="/assets/meta.png" alt="Meta" className={styles.icon} />
          <img
            src="/assets/microsoft.png"
            alt="Microsoft"
            className={styles.icon}
          />
          <img src="/assets/apple.png" alt="Apple" className={styles.icon} />
        </div>
      </div>
    </>

    // <div className={styles.container}>
    //   {clientdataData.map((clientdata, index) => (
    // <div key={index} className={styles.clientdataCard}>
    //   <div className={styles.leftPanel}>
    //     <h1 className={styles.title}>{clientdata.title}</h1>
    //   </div>
    //   <div className={styles.rightPanel}>
    //     <h2 className={styles.subtitle}>{clientdata.subtitle}</h2>
    //     <p className={styles.description}>{clientdata.description}</p>
    //   </div>
    // </div>
    //   ))}
    // </div>
  );
};

export default Clients;
