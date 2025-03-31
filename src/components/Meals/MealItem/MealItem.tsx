import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/components/Meals/MealItem/MealItem.module.scss";

interface MealItemProps {
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
}

const MealItem: React.FC<MealItemProps> = ({
  title,
  slug,
  image,
  summary,
  creator,
}) => {
  return (
    <article className={styles.meal}>
      <header>
        <div className={styles.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={styles.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
};

export default MealItem;
