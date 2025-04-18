import React from "react";

import styles from "./page.module.scss";

interface MealsSlugpageParams {
  slug: string;
}

interface MealsSlugpageProps {
  params: Promise<MealsSlugpageParams>;
}

const MealsSlugpage: React.FC<MealsSlugpageProps> = async ({ params }) => {
  const { slug } = await params;
  console.log("params.slug", slug);

  return (
    <>
      <header className={styles.header}></header>
    </>
  );
};

export default MealsSlugpage;
