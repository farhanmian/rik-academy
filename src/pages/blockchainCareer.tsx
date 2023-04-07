import React from "react";
import Image from "next/image";
import img from "../../assets/img/blockchain-career.png";

const blockchain_career = () => {
  const blockchain = [
    {
      no: 1,
      title: "Blockchain Developer-",
      text: "Blockchain developers design and develop decentralized applications( dApps) and smart contracts using blockchain technology. They are responsible for creating and testing code, ensuring security andc scalability, and collaborating with other developers and stakeholders.",
    },
    {
      no: 2,
      title: "Blockchain Architect-",
      text: "  Blockchain architects design and oversee the implementation of blockchain solutions. They are responsible for selecting the appropriate blockchain technology, creating architecture diagrams, and ensuring that the blockchain solution meets the needs of organization.",
    },
    {
      no: 3,
      title: "Blockchain Project Manager-",
      text: " Blockchain project manager oversee the implementation of blockchain projects. They are responsible for managing the project timeline, budget, and resources, and ensuring that the project is completed successfully.",
    },

    {
      no: 4,
      title: "Blockchain Consultant-",
      text: " Blockchain consultants provide advice and guidance to organizations on how to use blockchain technology. They help organizations identify opportunities for blockchain solutions, assess the feasibility of blockchain projects, and provide recommendations for implementation.",
    },

    {
      no: 5,
      title: "Blockchain Analyst-",
      text: " Blockchain analyst analyze blockchain data to identify patterns and trends. They use data analysis tools and techniques to extract insights from blockchain data and provide reports and recommendations to stakeholders.",
    },
    {
      no: 6,
      title: " Blockchain Legal Expert-",
      text: " Blockchain legal experts specialize in the legal aspects of blockchain technology. They provide advice on regulatory compliance, intellectual property issues,and contract law related to blockchain projects.",
    },
    {
      no: 7,
      title: " Blockchain UX Designer-",
      text: " Blockchain UX designer shapes a user interface that creates trust and is alluring to a regular user. They need to be able to pay attention to detail, have an artistic touch, but most importantly they need to be hardworking as their line of work requires them to spend countless hours behind their computers.",
    },
    {
      no: 8,
      title: "Blockchain Quality Engineer-",
      text: " Blockchain quality engineer is responsible for ensuring the quality and reliability of blockchain-based systems and applications. They design, develop and execute test plans and procedures to identify and resolve defects, as well as collaborate with developers to improve the performance and fuctionalities of blockchain technologies.",
    },
  ];
  return (
    <>
      <header className="mb-5">
        <div className="max-w-full max-h-[500px] overflow-hidden">
          <Image src={img} alt="img" className="max-w-full max-h-full" />
        </div>
      </header>

      <section className="mb-16">
        <div className="max-w-4xl m-auto text-base text-lightGrey ">
          <p className="my-10 mx-7 md:mx-3 ">
            Blockchain technology is a rapidly growing field, and there are many
            career opportunities available for those interested in exciting
            technology. Some of the career paths in blockchain technology
            include:
          </p>{" "}
          <ul className="px-9 md:px-3">
            {blockchain.map((item, i) => {
              return (
                <li
                  key={i}
                  className=" mb-6 p-3 rounded text-base hover:bg-Purple"
                >
                  <span className="pr-1">{item.no}</span>
                  <span className="font-semibold list-decimal">
                    {" "}
                    {item.title}
                  </span>
                  {item.text}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default blockchain_career;
