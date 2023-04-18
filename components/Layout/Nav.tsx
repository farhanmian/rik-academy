import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assets/img/logo.png";
import Link from "next/link";
import MenuIcon from "../icons/MenuIcon";
import { useRouter } from "next/router";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import ClickAwayListener from "react-click-away-listener";

const aboutLinks = [
  {
    title: "About Us",
    link: "about",
  },
  {
    title: "Why Study Blockchain?",
    link: "study-blockchain",
  },
  {
    title: "Blockchain Careees",
    link: "blockchain-career",
  },
];
const coursesLinks = [
  {
    title: "Web 3.0",
    link: "web",
  },
  {
    title: "Blockchain Courses",
    link: "courses",
  },
  {
    title: "Trading",
    link: "trading",
  },
];

const Nav = () => {
  const { pathname } = useRouter();
  const [dropDown, setDropDown] = useState<"About" | "Courses" | "Blogs" | "">(
    ""
  );
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    setDropDown("");
    setNavbar(false);
  }, [pathname]);

  const [navColor, setNavColor] = useState("text-white");
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setNavColor("bg-white text-black shadow-md");
    } else {
      setNavColor("text-white");
    }
  };

  return (
    <>
      <nav
        className={`py-3 fixed max-lg:bg-white max-lg:text-black max-lg:font-semibold z-30 top-0 left-0 w-full transition-all ${
          pathname === "/" ? navColor : "bg-white shadow-md text-black"
        }`}
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
            <Link
              href={"/"}
              className="md:hover:text-bluePrimary font-medium md:font-normal text-xl md:text-base"
            >
              Home
            </Link>
            <NavDropdownLink
              title=" About"
              onClick={() => {
                dropDown === "About" ? setDropDown("") : setDropDown("About");
              }}
              links={aboutLinks}
              dropDownCondition={dropDown === "About"}
            />

            <NavDropdownLink
              title="Courses"
              onClick={() => {
                dropDown === "Courses"
                  ? setDropDown("")
                  : setDropDown("Courses");
              }}
              links={coursesLinks}
              dropDownCondition={dropDown === "Courses"}
            />
            <Link
              href="#Blogs"
              className="md:hover:text-bluePrimary font-medium md:font-normal text-xl md:text-base"
            >
              {" "}
              Blogs
            </Link>

            <Link href="login">
              {" "}
              <button className="px-8 py-3 w-max bg-colorYellow rounded text-black font-semibold">
                Login
              </button>
            </Link>
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

const NavDropdownLink: React.FC<{
  title: string;
  onClick: () => void;
  links: typeof aboutLinks;
  dropDownCondition: boolean;
}> = ({ onClick, title, links, dropDownCondition }) => {
  const { asPath } = useRouter();
  const pagePath = asPath.replace("/", "");

  return (
    <div className="relative">
      <button
        onClick={onClick}
        className="bg-transparent md:hover:text-bluePrimary flex items-center justify-between gap-x-2 max-md:mb-1"
      >
        {title}
        <span className="hidden max-md:inline-block">
          {!dropDownCondition ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
        </span>
      </button>

      {dropDownCondition && (
        <div className="flex flex-col gap-y-1 md:w-56 md:absolute right-0 md:shadow-md md:border md:mt-5 max-md:pl-3 bg-white py-1 rounded-md border-bluePrimary text-sm font-normal text-lightPurple ">
          {links.map((item, i) => {
            return (
              <Link
                href={item.link}
                key={i}
                className={`md:hover:bg-lightPurple text-black md:hover:text-bluePrimary max-md:active:bg-lightPurple max-md:active:text-sky-500 md:px-4 px-2 py-1.5 ${
                  pagePath === item.link ? "bg-lightPurple" : ""
                }`}
              >
                {item.title}
              </Link>
              // <a
              //   key={i}
              //   target="_blank"
              //   rel="noreferrer"
              //   href={item.link}
              //   className={`md:hover:bg-lightPurple text-black md:hover:text-bluePrimary max-md:active:bg-lightPurple max-md:active:text-sky-500 md:px-4 px-2 py-1.5 ${
              //     pagePath === item.link ? "bg-lightPurple" : ""
              //   }`}
              // >
              //   {item.title}
              // </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

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
