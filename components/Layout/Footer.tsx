import React from "react";
import Image from "next/image";
import logo from "@/assets/img/logo.png";
import Link from "next/link";

import PhoneIcon from "../icons/PhoneIcon";
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
    link: "/",
  },
  {
    title: "Disclaimer",
    link: "/",
  },
  {
    title: "Refund Policy",
    link: "/",
  },
  {
    title: "Terms and Conditions",
    link: "/",
  },
  {
    title: "Privacy Policy",
    link: "/",
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
      <div className="max-w-8xl m-auto">
        <div className="grid grid-cols-4 justify-between w-full justify-items-center">
          <div>
            <Image src={logo} alt="logo" className="w-52 mb-8" />
            <p>
              Our courses will be a valuable resource for your career growth in
              tech industry. The skills and knowledge you will acquire through
              these courses will help you stay ahead of the curve and stand out
              in the competitive job market.
            </p>
          </div>

          <div>
            <h5 className="mb-10">Useful Links</h5>
            <div className="flex flex-col gap-y-4 ">
              {footerLinks.map((item) => (
                <Link href={item.link} key={item.title}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h5 className="mb-10">Contact Us</h5>

            <div>
              <span className="flex items-center gap-x-2.5 mb-4">
                <PhoneIcon />
                <p>+91 999999999</p>
              </span>

              <span className="flex items-center gap-x-2.5">
                <MessageIcon />
                <p>Info@p2psoftwares.com</p>
              </span>
            </div>
          </div>

          <div>
            <h5 className="mb-10">Contact Us</h5>

            <div className="flex items-center gap-x-4">
              {socialLinks.map((item, i) => (
                <Link key={i} href={item.link}>
                  <Image src={item.img} alt="social-img" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <p className="text-xs">© 2023 All Rights Reserved – The RIK Academy</p>
      </div>
    </footer>
  );
};

export default Footer;
