import Meta from "./Meta";
// import styles from "../styles/Layout.module";
import Nav from "./Nav";
import Header from "./Header";
import React from "react";

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
        <main className="">
          {children}
        </main>
    </>
  );
};

export default Layout;
