import React, { Suspense } from "react";
import Link from "next/link";
import Meals from "@/components/Meals/Meals";
import styles from "./page.module.scss";
import { getMeals } from "@/lib/meals";

const MealsLoaded = async () => {
  const meals = await getMeals();
  return <Meals meals={meals}></Meals>;
};

const MealsPage = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created {""}
          <span className={styles.highlight}> by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href={"meals/share"}>Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<p className={styles.loading}>Fetching meals</p>}>
          <MealsLoaded />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
