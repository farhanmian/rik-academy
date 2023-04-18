import React from "react";
import Image from "next/image";
import img from "../../assets/img/why-study-blockchain.jpg";

const study_Blockchain = () => {
  const Blockchain = [
    "Blockchain is a revolutionary technology that has the potential to transform various industries such as healthcare, finance and supply chain management. Studying blockchain can provide individuals with several benefits.",
    " First, it can help them understand the underlying technology and how itworks. This knowledge can be beneficial for various fields, including computer science, economic and law.",
    "Second, blockchain is becoming increasingly popular in finance and banking. By studying blockchain, individuals can prepare themselves for the changing landscape of financial technology. They can learn about blockchain-based cryptocurrencies, smart contracts, and decentralized finance(DeFi) applications, which are becoming more prevalent in the industry.",
    "Third, studying blockchain can provide individuals with the skills they need to build and develop decentralized applications (dApps). These applications are built on blockchain technology and can provide solutions to various problems, such as identity verification, supply chain management, and voting systems.",
    "Fourth, blockchain is a rapidly evolving technology that is constantly changing. By studying blockchain, individuals can keep up with the latest developments and ensure that they are well- prepared for the future.",

    "In summary, studying blockchain can provide individuals with several benefits, including understanding the technology, preparing for the changong landscape of finance, providing skilld for building decentralized applications, and keeping up with the latest technological developments.",
  ];
  return (
    <>
      <header className="mb-16">
        <div className="max-w-full max-h-[600px] overflow-hidden">
          <Image
            src={img}
            alt="img"
            className="max-w-full w-full h-full min-h-[200px]"
          />
        </div>
      </header>

      <section className="mb-12 m-2">
        <div className="max-w-4xl mt-10 m-auto text-base  text-lightGrey ">
          {Blockchain.map((item) => (
            <p className="my-1  p-2 " key={item}>
              {item}
            </p>
          ))}
        </div>
      </section>
    </>
  );
};

export default study_Blockchain;
