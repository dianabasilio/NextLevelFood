import React from "react";
import Image from "next/image";
import { getMeal } from "@/lib/meals";
import { Meal } from "@/types/types";
import styles from "./page.module.scss";
import { notFound } from "next/navigation";

interface MealsSlugPageProps {
  params: { slug: string };
}

const MealsSlugpage: React.FC<MealsSlugPageProps> = ({ params }) => {
  const meal: Meal = getMeal(params.slug) as Meal;
  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt="some image" fill></Image>
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}> {meal.creator}</a>
          </p>
          <p className={styles.summary}> {meal.summary}</p>
        </div>
      </header>

      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
};

export default MealsSlugpage;
