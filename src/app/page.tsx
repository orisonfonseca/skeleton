import Image from "next/image";
import styles from "./page.module.css";
import Skeleton from "./skeleton";

export default function Home() {
  return (
    <main className={styles.main}>
      <div><Skeleton /></div>
      <div style={{marginTop: 10}} ><Skeleton center imgHeight={200} imgWidth={200} isImageCircle /></div>
    </main>
  );
}
