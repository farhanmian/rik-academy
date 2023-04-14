import React from "react";
import Image from "next/image";
import logo from "@/assets/img/logo.png";
import Link from "next/link";

import MessageIcon from "../icons/MessageIcon";

import facebookImg from "@/assets/img/facebook.png";
import instagramImg from "@/assets/img/instagram.png";
import linkedinImg from "@/assets/img/linkedin.png";
import youtubeImg from "@/assets/img/youtube.png";

const footerLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "about",
  },
  {
    title: "Courses",
    link: "/",
  },
  {
    title: "Disclaimer",
    link: "disclaimer",
  },
  {
    title: "Refund Policy",
    link: "refund",
  },
  {
    title: "Terms and Conditions",
    link: "condition",
  },
  {
    title: "Privacy Policy",
    link: "policy",
  },
];

const socialLinks = [
  {
    img: facebookImg,
    link: "/",
  },
  {
    img: instagramImg,
    link: "/",
  },
  {
    img: linkedinImg,
    link: "/",
  },
  {
    img: youtubeImg,
    link: "/",
  },
];

const Footer = () => {
  return (
    <footer className="pt-16 pb-12 mt-auto footerLinearGradient">
      <div className="max-w-8xl m-auto max-2xl:px-1 max-xl:px-4 max-xs:px-2">
        <div className="grid lg:grid-cols-4 gap-y-10 justify-between w-full lg:justify-items-center mb-10">
          <div>
            <Image src={logo} alt="logo" className="sm:w-52 w-40 mb-8" />
            <p>
              Our courses will be a valuable resource for your career growth in
              tech industry. The skills and knowledge you will acquire through
              these courses will help you stay ahead of the curve and stand out
              in the competitive job market.
            </p>
          </div>

          <div>
            <h5 className="lg:mb-10 mb-2">Useful Links</h5>
            <div className="md:flex grid grid-cols-2 sm:grid-cols-3 lg:flex-col gap-x-5 gap-y-4 ">
              {footerLinks.map((item) => (
                <Link href={item.link} key={item.title}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h5 className="lg:mb-10 mb-2">Contact Us</h5>

            <div className="lg:max-w-[250px]">
              <span className="flex items-center gap-x-2.5">
                <MessageIcon />
                <p>support@rikacademy.com</p>
              </span>
            </div>
          </div>

          <div>
            <h5 className="lg:mb-10 mb-2">Contact Us</h5>

            <div className="flex items-center gap-x-4">
              {socialLinks.map((item, i) => (
                <Link key={i} href={item.link}>
                  <Image src={item.img} alt="social-img" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <p className="">© 2023 All Rights Reserved – The RIK Academy</p>
      </div>
    </footer>
  );
};

export default Footer;
