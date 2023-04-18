import React from "react";
import Image from "next/image";
import img from "../../assets/img/conditions.jpg";

const condition = () => {
  const conditions = [
    {
      title: "Service Offered",
      text: [
        "The services of this website Rik Academy are available only to the registered users on single user basis, for a particular period of time on making the stipulated payment and abiding by the applicable terms and conditions. The said services are personal in nature and cannot be assigned or transferred to or shared with any other person other than the registered users.",
        "By registering yourself as a user and subscribing to avail the services of this website Rik Academy it will be deemed that you have read, understood and agreed to fully abide by all the terms and conditions of the website as contained herein.",
        "The right to use the services of the website Rik Academy is on revocable license / permission basis as per the terms and conditions contained herein. Except the usage of the services during the license period, the registered users shall not have any right or title over the website or any of its contentsThe services offered by Rik Academy through this site are listed in detail in the home page of this site.",
        "Rik Academy currently provides users with access to a rich collection/compilation of online educational information and related resources etc. As a user of this site, you understand and agree that all the services provided are on the basis of as-it-is and Rik Academy assume no liability for the accuracy or completeness or use of, nor any liability to update, the information contained on this website.",
        "In order to use Rik Academy online services, you must obtain access to the World Wide Web, either directly or through devices that access web-based content, and pay any service fees associated with such access. In addition, you must provide all equipment necessary to make such a connection to the World Wide Web, including a computer and modem or other access devices.",
      ],
    },
    {
      title: "User Obligations",

      text: [
        "In consideration of your use of the services, you agree to: provide correct, precise, upto date and complete information about yourself as required by the service’s registration form wherever necessary; and maintain and promptly update the registration data to keep it true, accurate, current and complete.",
        "If you provide any information that is untrue, inaccurate, not up to date or incomplete, or P2P Block Technologies Pvt Ltd has reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete, P2P Block Technologies Pvt Ltd has the right to suspend or terminate your account and refuse any and all current or future use of the services (or any portion there of).",
        "If you are directly subscribing as a user of this website, you represent and warrant that you are at least 18 years of age and that you possess the legal right and capacity to use the services of P2P Block Technologies Pvt Ltd in accordance with the stated terms and usage policies. In cases, where a minor below the age of 18 years of age, wants to use this website, such a user shall duly register himself through his mother/father and natural guardian and such a mother/father and natural guardian hereby agree to accordingly register and supervise usage by, and be responsible for the action of any such minors who use the computer and/or password to access the Block Technologies Pvt Ltd. The mother/father and natural guardian shall enter into this agreement on behalf of such minor, and bind himself/herself in accordance with all terms and conditions herein.",
      ],
    },
    {
      title: "Agreement",
      subTitle: "Registration Information",
      text: [
        "You agree and are hereby put on notice, that you are prohibited from posting or transmitting to this website, any content/material that in unlawful, threatening, libelous, defamatory, pornographic or that in any manner violate or infringe the proprietary rights, intellectual property rights or any right or privacy of third party whatsoever and that violate any law, statute, ordinance or regulation; and that contain viruses or other similar harmful or threatening deleterious programming routines. If you violate this provision you will be penalised apart from termination of your rights to use the services and any other remedies available to Block Technologies Pvt Ltd Software (if any) that is made available to download from the P2P Blockchain Technologies Pvt Ltd site, excluding software that may be made available by end-users through a Communication Service, (Software) is the copyrighted work of the software provider. Your use of the Software is governed by the terms of the end user License Agreement unless you first agree to the License Agreement terms.",
        "P2P Block Technologies Pvt Ltd reserves the right, in its sole discretion, to terminate or refuse all or part of its services, for any reason without notice to you.This Agreement shall be governed by the Laws in India and in all disputes arising out of or relating to the use of Block Technologies Pvt Ltd, you hereby consent to the exclusive jurisdiction and venue of court in Delhi, India (only).",
        "This Agreement does not in any manner create any relationship whatsoever as between you and the Block Technologies Pvt Ltd, either as a joint venture, partnership, employment, or agency relationship. Performance of this agreement by P2P Block Technologies Pvt Ltd is subject to existing laws and legal process in India, and nothing contained in this agreement is inderogation of the rights of P2P Block Technologies Pvt Ltd to comply with governmental, court and law enforcement requests or requirements relating to your use of P2P Block Technologies Pvt Ltd or information provided to or gathered by P2P Block Technologies Pvt Ltd with respect to such use.",
        "Unless otherwise specified herein, this Agreement constitutes the entire agreement between the user and P2P Block Technologies Pvt Ltd with respect to the Rik Academy and it supersedes all prior communications and proposals, whether electronic, oral or written, between the user and P2P Block Technologies Pvt Ltd with respect to the Rik Academy site.",
      ],
    },
    {
      title: "Cookies",

      text: [
        "A cookie is a very small text document, which often includes an anonymous unique identifier. When you visit a Web site, that site’s computer asks your computer for permission to store this file in a part of your hard drive specifically designated for cookies. Each Web site can send its own cookie to your browser if your browser’s preferences allow it, but (to protect your privacy) your browser only permits a Web site to access the cookies it has already sent to you, not the cookies sent to you by other sites.",
        "Use of cookies makes web surfing easier by performing certain functions such as saving your Passwords, your personal preferences regarding your use of the particular Web site and tomake sure you don’t see the same ad repeatedly. Many consider the use of cookies to be an industry standard. If you choose to have your browser refuse cookies, it is possible that some areas of our Site will not function properly. You may note additionally that if you visit Rik Academy Web site where you are prompted to log in or that are customizable, you may be required to accept cookies. Advertisers and partners may also use cookies. We do not control use of these cookies and disclaim responsibility for information collected through them.",
      ],
    },
  ];
  return (
    <>
      <header className="z-0  ">
        <div className="max-w-full max-h-[600px]  mx-auto ">
          <Image
            src={img}
            alt="img"
            className="max-w-full h-[250px] md:h-[460px] max-h-[600px]"
          />
        </div>
      </header>
      <section className="z-10 -mt-8  relative   mx-8">
        <div className=" max-w-7xl  m-auto text-base text-lightGrey  shadow-xl   bg-white shadow-lightPurple  px-10 pt-9">
          {conditions.map((item, i) => (
            <div key={i}>
              <h1 className="text-2xl text-black py-4 font-medium relative">
                {item.title}
              </h1>
              <h2 className="text-xl pb-3 font-medium">{item.subTitle}</h2>

              <ul className=" pb-4  ">
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

export default condition;
