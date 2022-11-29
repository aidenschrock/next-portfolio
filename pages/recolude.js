import Image from "next/image";
import styles from "../styles/Recolude.module.css";

export default function Recolude() {
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
        <h2>Recolude</h2>
        <h4>3D Recordings & Analytics for XR</h4>
        <h4>
          Tools: Figma, Angular 9, Three.js, WIX, Adobe Illustrator, Adobe
          Premiere
        </h4>
      </div>
      <div className={styles.iframe}>
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          src="https://api.recolude.com/embed/?recording=37f0e5e2-f884-46c4-a1d8-72ae959a7fa2"
          allowfullscreen
        ></iframe>
      </div>
      <div className={styles.textBlock}>
        <h3>The Context</h3>
        <p>
          Recolude created a lightweight recording format(.RAP) that tracks
          positional data for objects in 3D applications. These recordings can
          be viewed, customized, and analyzed in Recolude&apos;s web viewer.
          When I joined the team, the logic behind the platform was mature but
          the branding and UI were an empty canvas.
        </p>
      </div>
      <div className={styles.textBlock}>
        <h3>Who is this for?</h3>
        <p>
          One of the first questions I asked was “Who are your users? Who do you
          want to target?” The answer was complicated. The “ideal” users were
          indie game developers. From a business perspective, you would need a
          large number of these low-budget users to obtain enough revenue to
          sustain a business. The actual users were from large industrys that
          were starting to dip their feet into VR training simulations. The
          platform had to be easy enough for less technical roles to use, but
          also have the ability to expand on information for those wanting more
          insight into their metadata.
        </p>
      </div>
      <div className={styles.textBlock}>
        <h3>Logo Rebrand</h3>
        <p>
          Keeping in mind both their product and audience, I redesigned their
          logo to be sharper, more legible, and more colorful. Corporate blue
          instills trust and signifies age. We want the logo to feel as young
          and exciting as the industry the company is in. The ruby, blue, and
          green variations remind me of the Anaglyph 3D effect.
        </p>
      </div>
      <div className={styles.textBlock}>
        <h3>Marketing Site Design</h3>
        <p>
          The marketing site was originally in Wordpress and was difficult to
          update. It was important to keep this site in a wysiwyg for low
          matience and for ease of use for non-devs on the team. I extended the
          branding from the logo and used bold colors and typography. One of the
          more difficult parts of designing this site was communication. With
          Recolude, you can record and vizualize anything from a 3D application.
          But what is anything? and how do I start? The goal was to inform
          visitors, help them ideate on different uses, and direct them to
          either schedule a demo or sign up for a trial.
        </p>
      </div>
      <div className={styles.textBlock}>
        <h3>Web App Design</h3>
        <p>
          My first task was to create custom components in the app&apos;s
          login/signup flow to replace the default AWS Amplify components. I
          also created a custom illustration of a mascot to greet users. The
          mascot image is a placeholder, as the plan is to have a 3D spatial
          recording embedded there. The web viewer is the most important part of
          the application as it&apos;s where users will spend the most time. On
          this page you can view your recording, inspect your metadata, explore
          subjects & events, and render heatmaps, paths, and vector fields.
          Recolude has expanded its analytics features to include analytic
          dashboards that utilize a custom API. My involvement included choosing
          the charting library, designing the dashboard, and initiating the
          frontend development.
        </p>
      </div>
      <div className={styles.textBlock}>
        <h3>Physical Goods</h3>
        <p>
          Recolude attended some of it&apos;s first in person conferences in
          2022. I had the opportunity to help design some of the physical goods
          they needed including the retractable banner, booth banner, and
          flyers.
        </p>
      </div>
      <p>
        I am no longer working on either the marketing site or web application,
        however much of my work still lives
      </p>
      <div className={styles.button}>
        <a target="_blank" rel="noreferrer" href="https://recolude.com/">
          <button>Visit Site</button>
        </a>
      </div>
    </div>
  );
}
