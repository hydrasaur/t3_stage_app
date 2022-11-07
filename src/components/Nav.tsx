import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/" style={{ color: "white" }}>
            home
          </Link>
        </li>
        <li>
          <Link href="/something">Something</Link>
        </li>
        <li>
          <Link href="https://github.com/hydrasaur/CrashcourseNextJs">
            Source
          </Link>
        </li>
        <li>
          <Link href="/champions">league</Link>
        </li>
        <li>
          <Link href="https://loldle.net/">test your nolig</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
