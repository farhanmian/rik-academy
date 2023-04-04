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
      <main className={`${pathname !== "/" ? "mt-[79px] lg:mt-[93px]" : ""}`}>
        {children}
      </main>
      {!pathname.includes("login") && <Footer />}
    </>
  );
};

export default Layout;
