import React from "react";

import styles from "./page.module.scss";

// Componente de página para la ruta dinámica /meals/[slug]
const MealsSlugpage = ({ params }) => {
  console.log("params.slug", params.slug);
  return <main className={styles.main}></main>;
};

export default MealsSlugpage;
