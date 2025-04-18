import React from "react";

import styles from "./page.module.scss";
import { NextPage } from "next";

interface MealsSlugpageParams {
  slug: string;
}

interface MealsSlugpageProps {
  params: Promise<MealsSlugpageParams>;
}

const MealsSlugpage: NextPage<MealsSlugpageProps> = async ({ params }) => {
  const { slug } = await params;
  console.log("params.slug", slug);

  return (
    <>
      <header className={styles.header}></header>
    </>
  );
};

export default MealsSlugpage;
