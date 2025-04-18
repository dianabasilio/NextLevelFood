"use server";
import { Meal } from "@/types/types";
import { saveMeal } from "@/lib/meals";
import { redirect } from "next/navigation";

export const shareMeal = async (formData: FormData) => {
  const meal: Meal = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image") as string,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
  };
  await saveMeal(meal);
  redirect("/meals");
};
