import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className="h-12 p-3 bg-black flex items-center justify-start fixed top-0 right-0 left-0 z-10">
      <ul className="flex justify-center items-center list-none">
        <NavLink href="/" title="Home" />
        <NavLink href="/something" title="Something" />
        <NavLink href="https://github.com/hydrasaur/CrashcourseNextJs" title="Source" />
        <NavLink href="/champions" title="League" />
        <NavLink href="https://loldle.net/" title="Test your nolig" />
        <NavLink href="/logboek" title="Logboek" />
        <NavLink href="/poster" title="Poster" />
        <NavLink href="/Test" title="Test" />
      </ul>
    </nav>
  );
};

export default Nav;

interface NavigatieLinkProps {
  href: string
  title: string
}

export const NavLink: React.FC<NavigatieLinkProps> = ({ href, title }) => {
  return (
    <li className="my-1 mx-4">
      <Link href={href} style={{ color: "grey" }}>
        {title}
      </Link>
    </li>
  )
}
