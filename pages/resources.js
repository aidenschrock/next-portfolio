import styles from "../styles/Resources.module.css";

export default function Resources() {
  return (
    <div className={styles.container}>
      <h2>A collection of my favorite resources</h2>
      <ul>
        <li>http://www.heropatterns.com/</li>
        <li>https://patterninja.com/</li>
        <li>http://thepatternlibrary.com/</li>
      </ul>
    </div>
  );
}
