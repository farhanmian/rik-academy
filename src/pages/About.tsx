import React from "react";
import Image from "next/image";
import img from "../../assets/img/About.jpg";

const about = () => {
  const Blockchain = [
    "Welcome to our blockchain technology academy, we specialize in teaching the latest advancements in blockchain , web3.0 and crypto trading. Our academy is designed to provide individuals with the knowledge and skills necessary to excel in rapidly evolving world of blockchain technology",
    "Our courses cover a wide range of topics from the basics of blockchain and cryptocurrencies to more advanced topics such as smart contracts, decentralized –finance, decentralized applications and NFTs. Our curriculum is regularly updated to reflect the latest developments in the blockchain industry, ensuring that our students stay ahead of the curve.",
    "We offer flexibe learning options to accommodate a variety of schedules and learning styles. Our courses are available online and our instructors are available to provide personalized support and guidance throughout the learning process.",
    "Whether you are looking to launch a career in blockchain technology, start your own blockchain-based business, or simply gain a deeper understanding of this exciting field, our academy is perfect place to start. Join us and discover the world of blockchain technology and crypto trading today!",
  ];
  return (
    <>
      <header className="md:mb-16 mb-5">
        <div className="max-w-full max-h-[500px]  mx-auto">
          <Image src={img} alt="img" className="max-w-full max-h-full " />
        </div>
      </header>

      <section className="mb-12">
        <div className="max-w-4xl mt-10 m-auto text-base font-medium text-lightGrey ">
          {Blockchain.map((item) => (
            <p className="my-6 p-3  " key={item}>
              {item}
            </p>
          ))}
        </div>
      </section>
    </>
  );
};

export default about;
