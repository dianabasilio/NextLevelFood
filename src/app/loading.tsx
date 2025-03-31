import React from "react";
import styles from "./loading.module.scss";

const loading = () => {
  return <p className={styles.loading}>Fetching meals</p>;
};

export default loading;
