import React from "react";
import logo from "../../media/assets/picturesV4H/newLogo.png";
import styles from "../Loading/Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.ldsSpinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
