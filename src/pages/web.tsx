import React from "react";
import Image from "next/image";
import img from "../../assets/img/Web.png";
import Card from "../../components/shared/Card/Card";
import web3A from "../../assets/img/web3A.jpg";
import Button from "../../components/shared/Button/Button";
import web3B from "../../assets/img/web3B.jpg";
import smartA from "../../assets/img/smartA.jpg";
import smartB from "../../assets/img/smartB.png";

const web = () => {
  const web3 = [
    {
      img: web3A,
      title: " Web 3.0 for Beginners",
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
          <Image src={img} alt="img" className="max-w-full max-h-full" />
        </div>
      </header>

      <section className="my-12 md:mx-12 justify-center md:justify-start grid md:grid-cols-2 lg:grid-cols-3  gap-y-20 gap-x-12  mx-3 ">
        {web3.map((item, i) => (
          <Card key={i}>
            <div className=" absolute max-w-[150px] items-center text-center  z-20 font-semibold  text-[#E7C62F] text-4xl  px-28 py-72 ">
              {" "}
              Coming <br />
              <span className="px-4 text-4xl font-semibold">Soon</span>
            </div>
            <div className=" text-center rounded-xl absolute bg-[#000000] opacity-50  z-10 h-full w-full  justify-center  items-center text-xl font-semibold  mx-auto "></div>
            <div className="md:max-w-[413] max-w-[300]   text-base  text-lightGrey p-4   ">
              <Image
                src={item.img}
                alt="img"
                className="max-w-[413] max-h-[260] "
              />
              <h1 className="text-2xl py-6 font-semibold">{item.title}</h1>
              <p className=" font-semibold mb-1">{item.course}</p>
              <div className="h-[225px]  mb-7">
                <ul className=" px-4 pb-4 md:pb-16 ">
                  {item.web.map((item, i) => {
                    return (
                      <li key={i} className=" mb-1 list-disc ">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <Button
                classes="w-full text-bluePrimary hover:text-white my-4"
                py="py-2.5"
                px="px-8"
              >
                Enroll Course
              </Button>
            </div>
          </Card>
        ))}
      </section>
    </>
  );
};

export default web;
