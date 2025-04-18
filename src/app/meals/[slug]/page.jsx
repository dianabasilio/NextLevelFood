import React, { Suspense } from "react";
import Image from "next/image";
import { getMeal } from "@/lib/meals";
import styles from "./page.module.scss";
import { notFound } from "next/navigation";

// Componente para cargar y mostrar los detalles de una comida
const MealDetails = async ({ slug }) => {
  const meal = await getMeal(slug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image
            src={meal.image}
            alt={meal.title}
            fill
            style={{ objectFit: "cover" }}
          />
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

// Componente de página para la ruta dinámica /meals/[slug]
const MealsSlugpage = ({ params }) => {
  return (
    <main className={styles.main}>
      <Suspense fallback={<p className={styles.loading}>Loading meal...</p>}>
        <MealDetails slug={params.slug} />
      </Suspense>
    </main>
  );
};

export default MealsSlugpage;
