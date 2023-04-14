import React from "react";
import Image from "next/image";
import img from "../../assets/img/refund.jpg";

const refund = () => {
  const refunds = [
    {
      title: "Cancellation and Refund Policy",
      text: [
        "Please note that Packages once subscribed cannot be cancelled and no refund to that effect can be made. Since Rikacademy.com is offering non-tangible irrevocable goods we do not issue refunds once the package is subscribed. As a customer you are responsible for understanding that no refund or cancellation is possible upon any subscription at our site.P2P Block Technologies Pvt Ltd disclaims all responsibility for any loss, injury, liability or damage of any kind resulting from and arising out of, or any way related to:",
      ],
    },
    {
      title: "Delivery Policy",

      text: [
        "Delivery means the digital download of subscribed content to the customers. At present we have only mode of delivery – online digital download from google playstore APP.",
        "Online digital delivery of content is through internet, i.e., Online subscribed course content from www.rikacademcy.com website to Rikacademy software.",
      ],
    },
  ];
  return (
    <>
      <header className="z-0  ">
        <div className="max-w-full max-h-[500px]  mx-auto ">
          <Image
            src={img}
            alt="img"
            className="max-w-full h-[250px] md:h-[460px]"
          />
        </div>
      </header>
      <section className="z-10 -mt-6 relative   pb-8  mx-8">
        <div className=" max-w-7xl  m-auto text-base text-lightGrey  shadow-xl   bg-white shadow-lightPurple  md:px-14  px-6 md:pt-4">
          {refunds.map((item, i) => (
            <div key={i}>
              <h1 className="text-2xl text-black py-7 font-normal relative">
                {item.title}
              </h1>

              <ul className=" pb-8  ">
                {item.text.map((item, i) => {
                  return (
                    <li key={i} className=" mb-3 ">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default refund;
