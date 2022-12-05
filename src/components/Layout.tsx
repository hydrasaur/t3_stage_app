import Meta from "./Meta";
// import styles from "../styles/Layout.module";
import Nav from "./Nav";
import Header from "./Header";
import React from "react";
import { motion } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode
}

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div>
        {children}
      </div>
    </>
  );
};

export default Layout;
