import React from "react";

import styles from "./page.module.scss";

interface MealsSlugpageProps {
  params: {
    slug: string;
  };
}

// Componente de página para la ruta dinámica /meals/[slug]
const MealsSlugpage: React.FC<MealsSlugpageProps> = ({ params }) => {
  console.log("params.slug", params.slug);
  return <main className={styles.main}></main>;
};

export default MealsSlugpage;
