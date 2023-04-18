import React from "react";
import Image from "next/image";
import img from "../../assets/img/disclaimer.jpg";

const disclaimer = () => {
  const disclaimers = [
    {
      text: [
        "The information/material provided on the Web Site is provided on an “As Is” basis. P2P Block Technologies Pvt Ltd do not warranty the accuracy, completeness, nonobsolescence, non-infringement, merchantability or fitness for a particular purpose of the information available through the service. Nor is it guaranteed that the services will be error free, or continuously available, or that the service will be free of viruses or other harmful components.",

        "P2P Block Technologies Pvt Ltd disclaims all responsibility for any loss, injury, liability or damage of any kind resulting from and arising out of, or any way related to:Any errors in or omissions from the Web site and its content, including but not limited to technical inaccuracies and typographical errors. Any third party Web sites or content therein directly or indirectly accessed through links in the Site, including but not limited to any errors in or omissions there from. The unavailability of this Site or any portion thereof. The use of any equipment or software in connection with the Site by the user.",
      ],
    },
    {
      title: "Limitation of Liability",

      text: [
        "Under no circumstances shall P2P Block Technologies Pvt Ltd be liable to any User for:   Loss, injury, claim, liability or damages of any kind resulting from the use of or the inability to use the materials in the Web site, even if P2P Block Technologies Pvt Ltd had been advised of the possibility of such damages and regardless of the form of action, whether in contract, stated or otherwise.",
        "Special, direct, incidental, punitive, exemplary or consequential damages of any kind whatsoever in any way due, resulting from or arising in connection with the use of or the inability to use the Web site or its content / materials; and Claim attributable to errors, omission or inaccuracies in or destructive properties of any information.",
      ],
    },
    {
      title: "No Liability",

      text: [
        "P2P Block Technologies Pvt Ltd claims exemption from any liability arising out of any such error in the data base.",
      ],
    },
    {
      title: "Third Party Advertising",

      text: [
        "There may be information, advertisement, and schemes displayed through this Web site. P2P Block Technologies Pvt Ltd disclaims, to the fullest extent permissible, the correctness, viability, availability, merchantability or fitness of such information, advertisement and scheme. P2P Block Technologies Pvt Ltd hereby declares that the advertisers and their clients etc are neither its agent, partner or principal and P2P Block Technologies Pvt Ltd do not provide any guarantee or warranty or any representation on behalf of any of the advertisers or their clients.Any material downloaded and used shall be at the risk of the user and no services utilised by this Web site shall create any warranty. P2P Block Technologies Pvt Ltd shall not responsible if any information/page is downloaded from P2P Block Technologies Pvt Ltd and after downloading complete/partial, text/information is altered/removed/obscured contained therein.",
        "P2P Block Technologies Pvt Ltd and/or its respective suppliers make no representations about the suitability, reliability, availability, timelines, of the products and services contained on the Web site for any purpose. All products, services are provided “as is” without warranty of any kind. and/or its respective suppliers hereby disclaim all warranties and conditions with regard to this information, products, services including all implied warranties and conditions of merchantability, fitness for a particular purpose, title and non-infringement.",
        "In no event shall P2P Block Technologies Pvt Ltd and/or its suppliers be liable for any direct, indirect, punitive, incidental, special, consequential damages or any damages whatsoever including, without limitation, damages for loss of use, data or profits, arising out of or in any way connected with the use or performance of the Rik Academy Web site, with the delay or inability to use the Rik Academy Web site or related services, the provision of or failure to provide services, or for any information, software, products and services obtained through the Rik Academy Web sites, or otherwise arising out of the use of P2P Block technologies Pvt Ltd Web site, whether based on contract, negligence, strict liability or otherwise, even if P2P Block Technologies Pvt Ltd or any of its suppliers has been advised of the possibility of damages.",
      ],
    },
    {
      title: "Indemnification",
      text: [
        "As a user of this Web site, you agree to protect and fully compensate P2P Block technologies Pvt Ltd and its domain’s associates, such as, service providers and technology partners, from any and all third party claims, liabilities, damages, expenses and costs, including, but not limited to, all legal expenses, arising from your use of services on this domain, your violation of the terms or your infringement by any other use of your account, of any intellectual property or other right of anyone.",
      ],
    },
    {
      title: "Legal Jurisdiction",
      text: [
        "The laws of the Republic of India shall govern any dispute arising from the use of this Web site and the courts in Delhi, India alone shall have exclusive jurisdiction to deal with all such matters.",
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
      <section className="z-10 -mt-7 relative   mx-8">
        <div className=" max-w-7xl  m-auto text-base text-lightGrey  shadow-xl   bg-white shadow-lightPurple  md:px-20  px-6 pt-7">
          {disclaimers.map((item, i) => (
            <div key={i}>
              <h1 className="text-2xl text-black py-4 font-normal relative">
                {item.title}
              </h1>

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

export default disclaimer;
