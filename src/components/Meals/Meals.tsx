import React from "react";
import MealItem from "./MealItem/MealItem";
import { Meal } from "@/types/types";
import styles from "@/components/Meals/Meals.module.scss";

interface MealsProps {
  meals: Meal[];
}

const Meals: React.FC<MealsProps> = ({ meals }) => {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal}></MealItem>
        </li>
      ))}
    </ul>
  );
};

export default Meals;
