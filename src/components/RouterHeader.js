import React from "react";
import styles from "./RouterHeader.module.css";

const RouterHeader = (props) => {
  return (
    <div className={styles.routerHeader}>
      <img
        src="/img/placeholder.svg"
        alt="Placeholder"
        className={styles.placeholder}
      />
      <span className={styles.headerText}>Sheqlee</span>
      <img
        src="/img/arrow_down.svg"
        alt="Arrow Down"
        className={styles.arrowIcon}
      />
      <span className={styles.headerText}>{props.path}</span>
    </div>
  );
};

export default RouterHeader;
