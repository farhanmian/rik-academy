import React from "react";
import Image from "next/image";
import img from "../../assets/img/blockchain-courses.jpg";
import blockchainTechnology from "../../assets/img/blockchain-Technology.png";
import blockchainTech from "../../assets/img/blockchainTech.png";
import blockchainDev from "../../assets/img/blockchian-dev.jpg";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";

const blockchain_course = () => {
  const blockchain = [
    {
      img: blockchainTech,
      title: " Blockchain Technology",
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
        <div className="max-w-full max-h-[500px]  mx-auto">
          <Image src={img} alt="img" className="max-w-full max-h-full " />
        </div>
      </header>

      <section className="my-12 md:mx-12 justify-center md:justify-start grid md:grid-cols-2 lg:grid-cols-3  gap-y-20 gap-x-12  mx-3 ">
        {blockchain.map((item) => (
          <Card>
            <div className=" absolute max-w-[150px] items-center text-center  z-20 font-semibold  text-[#E7C62F] text-4xl  px-28 py-72 ">
              {" "}
              Coming <br />
              <span className="px-4 text-4xl font-semibold">Soon</span>
            </div>
            <div className=" text-center rounded-xl absolute bg-[#000000] opacity-50  z-10 h-full w-full  justify-center  items-center text-xl font-semibold  mx-auto "></div>
            <div className="md:max-w-[413]  max-w-[300]   text-base  text-lightGrey p-4    ">
              <Image
                src={item.img}
                alt="img"
                className="max-w-[413] max-h-[260]  fill-slate-900"
              />
              <h1 className="text-2xl py-6 font-semibold">{item.title}</h1>
              <p className=" font-semibold mb-1">{item.course}</p>
              <div className="h-[275px] mb-7">
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
                classes=" w-full "
                py="py-2.5"
                px="px-8 text-dark hover:text-white"
                className="my-4"
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

export default blockchain_course;
