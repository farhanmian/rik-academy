import React from "react";
import Image from "next/image";
import img from "../../assets/img/blockchain-courses.png";
import blockchainTechnology from "../../assets/img/blockchain-Technology.png";
import blockchainTech from "../../assets/img/blockchainTech.png";
import blockchainDev from "../../assets/img/blockchian-dev.jpg";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";
import CourseCard from "@/components/partials/CourseCard";

const blockchain_course = () => {
  const blockchain = [
    {
      img: blockchainTech,
      title: " Blockchain Technology",
      isComingSoon: true,
      course: "Module : Basics of Blockchain Technology",
      web: [
        "What is blockchain Technology?",
        "What is P2P Network?",
        "Blockchain Mining",
        "Proof-of-Work protocol (PoW)",
        "Proof-of-Stake protocol (PoS)",
        "Completing chain problem",
      ],
    },
    {
      img: blockchainTechnology,
      title: " Blockchain Technology",
      isComingSoon: true,
      course: "Module : Introduction to Blockchain Technology",
      web: [
        "What is blockchain Technology?",
        "How does blockchain works?",
        "Types of Blockchain ( Private, Public, permissioned)",
        "Advantages and Disadvantages of Blockchain Technology",
        "Use cases of Blockchain technology ( e.g  Cryptocurrencies, supply chain management, etc.)",
      ],
    },
    {
      img: blockchainDev,
      title: " Blockchain Development",
      isComingSoon: true,
      course: "Module : Introduction to Blockchain Development",
      web: [
        "Blockchain Development Basics (languages, tools and frameworks)",
        "Building and deploying smart contracts (e.g solidity...)",
        "Creating Dapps",
        "Interacting with web 3 protocols",
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
          {blockchain.map((item, i) => (
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

export default blockchain_course;
