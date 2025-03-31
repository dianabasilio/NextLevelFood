import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <Link href={"/about"}>About us</Link>
    </main>
  );
}
