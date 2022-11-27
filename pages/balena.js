import Image from "next/image";
import styles from "../styles/Balena.module.css";

export default function Balena() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Image
          className={styles.logo}
          src="/balena.png"
          alt="Balena Cloud logo"
          width={80}
          height={90}
        />
        <h2>Balena Extension</h2>
        <h4>Manage your IoT devices from Visual Studio Code</h4>
        <h4>Tools: Figma, Adobe Illustrator, Svelte</h4>
      </div>
      <div className={styles.textBlock}>
        <h3>The Context</h3>
        <p>
          Balena is a platform that provides tooling for building, deploying,
          and managing fleets of connected Linux devices. Despite being the most
          used platform for companies with IoT devices, Balena is lacking a
          Visual Studio Code extension. This is a large feature gap for the
          developers in the space who spend a good amount of time in their code
          editor.
        </p>
      </div>
      <div className={styles.textBlock}>
        <h3>Who is this for?</h3>
        <p>
          This extension is for any developers managing their IoT devices with
          Balena. Especially ones who have thought “shouldn&apos;this be
          easier?” Likewise, the website is for these developers to quickly
          understand what all the extension can do.
        </p>
      </div>
      <div className={styles.textBlock}>
        <h3>Design Decisions</h3>
        <p>
          This is a straight forward one page site that will potientally also
          host documentation for the extension. These are the three values that
          led my decision making:
        </p>
        <h4>Page Load Speed</h4>
        <p>
          There are a lot of good reasons sites should be fast. In this case, I
          imagined myself as a developer that wants to quickly find what I need
          in the documentation. If the site took longer than I wanted, I might
          get frustrated with the experience of using the tool. This is why I
          chose Svelte as the frontend framework for this site.
        </p>

        <h4>Legibility</h4>
        <p>
          The dividing question, dark mode or light mode? I personally think the
          best answer to this is having the option of either. However if you
          need to get a site out before you can implement a theme switch, I
          would always choose light mode. Light mode has the max accesibility
          (blaha blah say stuff)
        </p>
        <h4>Brand Identity</h4>
        <p>
          The Balena extension should be recognizable as part of the Balena
          ecosystem. This is why I opted for using Balena&apos;s brand colors.
        </p>
      </div>
      <div className={styles.button}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://docs-sage-omega.vercel.app/"
        >
          <button>Visit Site</button>
        </a>
      </div>
    </div>
  );
}
