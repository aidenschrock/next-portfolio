import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <Image
        src="/about.jpeg"
        width={235}
        height={260}
        alt="tired cat on a laptop"
      />
      <h2>
        <ul>
          <li>He/Him</li>
          <li>Queer & Southern</li>
          <li>Casual Gamer</li>
          <li>Cat Person</li>
        </ul>
      </h2>
    </div>
  );
}
