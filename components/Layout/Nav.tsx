import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assets/img/logo.png";
import Link from "next/link";
import MenuIcon from "../icons/MenuIcon";
import { useRouter } from "next/router";

const navLinks = ["Home", "About", "Courses", "Blogs", "Contact"];

const Nav = () => {
  const [navColor, setNavColor] = useState("text-white");
  const [showSidebar, setShowSidebar] = useState(false);

  const { pathname } = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setNavColor("bg-white text-black shadow-md");
    } else {
      setNavColor(pathname === "/" ? "text-white" : "bg-white shadow-md");
    }
  };

  return (
    <>
      <nav
        className={`py-3 fixed max-lg:bg-white max-lg:text-black max-lg:font-semibold z-30 top-0 left-0 w-full transition-all ${navColor}`}
      >
        <div className="max-w-8xl m-auto flex items-center justify-between max-2xl:mx-4">
          <div className="w-40 max-lg:w-32">
            <Image src={logo} alt="logo" />
          </div>

          <button
            className="md:hidden"
            onClick={() => {
              setShowSidebar(!showSidebar);
            }}
          >
            <MenuIcon className="w-8 h-8" />
          </button>

          <div
            className={`flex gap-x-8 md:items-center
        max-md:flex-col max-md:fixed right-0 top-[5%] max-md:bg-white md:w-max max-md:py-4 max-md:pt-20 max-md:h-full max-md:text-xl gap-y-10 transition-all ${
          showSidebar
            ? "max-md:px-4 max-md:pl-10 max-xs:pl-6 max-md:w-60 max-xs:w-52 "
            : "w-0"
        }
        `}
          >
            {navLinks.map((item) => (
              <Link
                href={
                  item === "Home"
                    ? "/"
                    : item.toLowerCase().replaceAll(" ", "-")
                }
                key={item}
                className="max-xs:text-lg"
              >
                {item}
              </Link>
            ))}
            <button className="px-8 py-3 w-max bg-colorYellow rounded text-black font-semibold">
              Login
            </button>
          </div>
        </div>
      </nav>

      {showSidebar && (
        <div
          onClick={() => {
            setShowSidebar(false);
          }}
          className="fixed w-full h-full top-0 bg-black/50 backdrop-blur-sm"
        />
      )}
    </>
  );
};

export default Nav;

/*

 <div className="flex gap-x-8 items-center">
  {navLinks.map((item) => (
    <Link href={item} key={item}>
      {item}
    </Link>
  ))}
  <button className="px-8 py-3 bg-colorYellow rounded">Login</button>
</div>

*/
