import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Navbar.module.css";

export default function NavbarComponent() {
  const router = useRouter();

  return (
    <nav className={styles.sticky}>
      <div>
        <ul className={styles.navbarContent}>
          <li>
            <Link
              href="/"
              className={router.pathname == "/" ? styles.active : ""}
            >
              <h3>Home</h3>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={router.pathname == "/about" ? styles.active : ""}
            >
              <h3>About</h3>
            </Link>
          </li>
          <li>
            <Link
              href="/resources"
              className={router.pathname == "/resources" ? styles.active : ""}
            >
              <h3>Resources</h3>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
