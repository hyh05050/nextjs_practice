import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NarBar() {
  const router = useRouter();
  return (
    <nav>
      <Link
        href="/"
        className={`${styles.link} ${
          router.pathname === "/" ? styles.active : ""
        }`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={[
          styles.link,
          router.pathname === "/about" ? styles.active : "",
        ].join(" ")}
      >
        ABOUT
      </Link>
      <button>Click Me</button>
      <style jsx>{`
        nav {
          background-color: tomate;
        }
        button {
          padding: 10px;
          background: none;
        }
      `}</style>
    </nav>
  );
}
