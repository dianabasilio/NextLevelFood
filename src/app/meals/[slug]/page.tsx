import React from "react";
import styles from "./page.module.scss";

// ✅ No necesitas NextPage aquí, no se recomienda con el App Router

interface MealsSlugpageProps {
  params: {
    slug: string;
  };
}

const MealsSlugpage = async ({ params }: MealsSlugpageProps) => {
  const { slug } = params;
  console.log("params.slug", slug);

  return (
    <>
      <header className={styles.header}></header>
    </>
  );
};

export default MealsSlugpage;
