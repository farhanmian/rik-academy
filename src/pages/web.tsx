import React from "react";
import Image from "next/image";
import img from "../../assets/img/web.png";
import Card from "../../components/shared/Card/Card";
import web3A from "../../assets/img/web3A.jpg";
import Button from "../../components/shared/Button/Button";
import web3B from "../../assets/img/web3B.jpg";
import smartA from "../../assets/img/smartA.jpg";
import smartB from "../../assets/img/smartB.png";
import CourseCard from "@/components/partials/CourseCard";

const web = () => {
  const web3 = [
    {
      img: web3A,
      title: " Web 3.0 for Beginners",
      isComingSoon: true,
      course: "Module : WEB 3.0",
      web: [
        "What is web 3.0?",
        "How is web 3.0 is different from web 2.0?",
        "Decentralized applications (dApps)",
        "Decentrallized finance ( defi)",
        "Non-fungible tokens ( NFT)",
      ],
    },
    {
      img: web3B,
      title: "     Web 3.0 for Advanced",
      isComingSoon: true,
      course: "Module : Advance WEB 3.0",
      web: [
        "Web3 Front-End Basics",
        "Web3 Front-End Advanced",
        "Advanced Cryptography",
      ],
    },
    {
      img: smartB,
      title: "     Smart Contract for Beginners",
      isComingSoon: true,
      course: "Module :  Smart Contract for beginners",
      web: [
        "What are smart contracts?",
        "How does smart contracts works?",
        "Advantages and Disadvantages of smart contracts",
        "Use cases of smart contracts (e.g insurance, supply chain management, real estate)",
      ],
    },
    {
      img: smartA,
      title: "   Advance Smart Contract",
      isComingSoon: true,
      course: "Module : Advance Smart Contract",
      web: [
        "Smart Contracts Frameworks",
        "Create, Test, Deploy, Verify contracts",
        "Smart Contract Security",
      ],
    },
  ];

  return (
    <>
      <header className="md:mb-16 mb-5">
        <div className="max-w-full max-h-[600px] overflow-hidden">
          <Image
            src={img}
            alt="img"
            className="max-w-full w-full h-full min-h-[200px]"
          />
        </div>
      </header>

      <section className="mt-16 mb-20 max-2xl:px-3">
        <div className="max-w-8xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-x-3 xl:gap-x-6 gap-y-10 justify-items-center">
          {web3.map((item, i) => (
            <CourseCard
              img={item.img}
              title={item.title}
              moduleName={item.course}
              courseTopics={item.web}
              isComingSoon={item.isComingSoon}
              key={i}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default web;
