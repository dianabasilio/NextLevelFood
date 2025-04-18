import React from "react";

import styles from "./page.module.scss";

interface MealsSlugpageParams {
  slug: string;
}

interface MealsSlugpageProps {
  params: MealsSlugpageParams;
}

const MealsSlugpage: React.FC<MealsSlugpageProps> = async ({ params }) => {
  const { slug } = params; // ✅ No necesitas hacer await
  console.log("params.slug", slug);

  return (
    <>
      <header className={styles.header}>{slug}</header>
    </>
  );
};

export default MealsSlugpage;
