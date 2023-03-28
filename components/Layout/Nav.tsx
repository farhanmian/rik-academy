import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assets/img/logo.png";
import Link from "next/link";

const navLinks = ["Home", "About", "Courses", "Blogs", "Contact"];

const Nav = () => {
  const [navColor, setNavColor] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setNavColor("bg-white text-black drop-shadow-md");
    } else {
      setNavColor("text-white");
    }
  };

  return (
    <nav
      className={`py-3 fixed z-20 top-0 left-0 w-full transition-all ${navColor}`}
    >
      <div className="max-w-8xl m-auto flex items-center justify-between">
        <div className="w-40">
          <Image src={logo} alt="logo" />
        </div>

        <div className="flex gap-x-8 items-center">
          {navLinks.map((item) => (
            <Link href={item} key={item}>
              {item}
            </Link>
          ))}
          <button className="px-8 py-3 bg-colorYellow rounded">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
