import React from "react";
import Image from "next/image";
import img from "../../assets/img/trading.png";
import cryptocurrency from "../../assets/img/cryptocurr.jpg";
import cryptotrading from "../../assets/img/cryptoTrading.jpg";
import CourseCard from "@/components/partials/CourseCard";

const trading = () => {
  const trading = [
    {
      img: cryptocurrency,
      title: " Cryptocurrencies",
      isComingSoon: true,
      course: "Module : Introduction to Cryptocurrencies",
      web: [
        "What are Cryptocurrencies?",
        "History of Cryptocurrencies",
        "Types of Cryptocurrencies ( e.g. Bitcoin, Ethereum)",
        "How to buy and sell cryptocurrencies",
        "Cryptocurrencies and Wallets",
      ],
    },
    {
      img: cryptotrading,
      title: "Crypto Trading",
      course: "Module : Introduction to Crypto Trading",
      isComingSoon: true,
      web: [
        "Trading Strategies",
        "Technical Analysis (e.g candle Stick charts, moving averages, Fibonacci retracements)",
        "Fundamental Analysis ( whitepapers, team, partnership)",
        "Risk management and portfolio diversification",
        "Tools and Platforms for Crypto trading",
      ],
    },
    {
      img: cryptotrading,
      title: "Crypto Trading",
      course: "Module : Introduction to Crypto Trading",
      isComingSoon: true,
      web: [
        "Trading Strategies",
        "Technical Analysis (e.g candle Stick charts, moving averages, Fibonacci retracements)",
        "Fundamental Analysis ( whitepapers, team, partnership)",
        "Risk management and portfolio diversification",
        "Tools and Platforms for Crypto trading",
      ],
    },
    {
      img: cryptotrading,
      title: "Crypto Trading",
      course: "Module : Introduction to Crypto Trading",
      isComingSoon: true,
      web: [
        "Trading Strategies",
        "Technical Analysis (e.g candle Stick charts, moving averages, Fibonacci retracements)",
        "Fundamental Analysis ( whitepapers, team, partnership)",
        "Risk management and portfolio diversification",
        "Tools and Platforms for Crypto trading",
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
          {trading.map((item, i) => (
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

export default trading;
