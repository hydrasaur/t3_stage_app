import { useSession } from "next-auth/react";
import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
import AuthenticationButton from "./common/AuthButton";

const Nav = () => {
  const { data: session } = useSession();


  return (
    <nav className="h-12 p-3 bg-black flex items-center justify-start fixed top-0 right-0 left-0 z-10">
      <ul className="flex justify-center items-center list-none flex-grow">
        <NavLink href="/" title="Home" />
        <NavLink href="/champions" title="League" />
        <NavLink href="/poster" title="Poster" />
        {!session ? null : <NavLink href="/logboek" title="Logboek" />}
        <NavLink href="https://github.com/hydrasaur/t3_stage_app" title="Source" target="_blank" />
        <NavLink href="https://loldle.net/" title="Test your knowledge" target="_blank" />
        <div className="flex-grow" />
        <AuthenticationButton />
      </ul>
    </nav>
  );
};

export default Nav;

interface NavigatieLinkProps {
  href: string
  title: string
  target?: string
}

export const NavLink: React.FC<NavigatieLinkProps> = ({ href, title, target }) => {
  return (
    <li className="my-1 mx-4">
      <Link href={href} style={{ color: "grey" }} rel="noopener noreferrer" target={target}>
        {title}
      </Link>
    </li>
  )
}