import React from "react";
import Image from "next/image";
import { getMeal } from "@/lib/meals";
import { Meal } from "@/types/types";
import styles from "./page.module.scss";
import { notFound } from "next/navigation";
import { NextPage } from "next";

interface MealsSlugpageParams {
  slug: string;
}

interface MealsSlugpageProps {
  params: MealsSlugpageParams; // Cambiamos a la estructura resuelta
}

// Componente de página para la ruta dinámica /meals/[slug]
const MealsSlugpage: NextPage<MealsSlugpageProps> = async ({ params }) => {
  const { slug } = params;
  console.log("params.slug", slug);
  const meal: Meal = getMeal(slug);

  if (!meal) {
    notFound();
  }

  if (meal) {
    meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt="some image" fill />
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
        />
      </main>
    </>
  );
};

export default MealsSlugpage;
