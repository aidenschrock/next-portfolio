import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Navbar.module.css";

export default function NavbarComponent() {
  const router = useRouter();

  return (
    <nav className={styles.sticky}>
      <div>
        <ul className={styles.navbarContent}>
          <li className={router.pathname == "/" ? styles.active : ""}>
            <Link href="/">
              <h3>Home</h3>
            </Link>
          </li>
          <li className={router.pathname == "/about" ? styles.active : ""}>
            <Link href="/about">
              <h3>About</h3>
            </Link>
          </li>
          <li className={router.pathname == "/resources" ? styles.active : ""}>
            <Link href="/resources">
              <h3>Resources</h3>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
