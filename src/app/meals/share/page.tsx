import ImagePicker from "@/components/ImagePicker/ImagePicker";
import styles from "./page.module.scss";
import { Meal } from "@/types/types";
import { title } from "process";

export default function ShareMealPage() {
  const shareMeal = async (formData: FormData) => {
    "use server";
    const meal: Meal = {
      title: formData.get("title") as string,
      summary: formData.get("summary") as string,
      instructions: formData.get("instructions") as string,
      image: formData.get("image") as string,
      creator: formData.get("name") as string,
      creator_email: formData.get("email") as string,
    };
    console.log(meal);
  };
  return (
    <>
      <header className={styles.header}>
        <h1>
          Share your <span className={styles.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={styles.main}>
        <form className={styles.form} action={shareMeal}>
          <div className={styles.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          <ImagePicker name="image" label="Your image" />
          <p className={styles.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}
