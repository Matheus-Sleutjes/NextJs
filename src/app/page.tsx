import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <button className="btn btn-success">click</button>
    </main>
  );
}
