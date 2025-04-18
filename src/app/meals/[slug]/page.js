import React from "react";
import styles from "./page.module.scss";

const MealsSlugpage = async ({ params }) => {
  const { slug } = await params; // Ahora esperamos que `params` esté disponible
  console.log("params.slug", slug);

  return (
    <>
      <header className={styles.header}>{slug}</header>
    </>
  );
};

export default MealsSlugpage;
