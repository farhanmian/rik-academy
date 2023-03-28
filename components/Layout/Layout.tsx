import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { useRouter } from "next/router";

const Layout: React.FC<{ children: JSX.Element | React.ReactNode }> = ({
  children,
}) => {
  const { pathname } = useRouter();

  return (
    <>
      <Nav />
      <main className={pathname !== "/" ? "mt-28" : ""}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
