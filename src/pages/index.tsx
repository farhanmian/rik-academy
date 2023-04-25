import React, { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/src/styles/Home.module.css";
import ButtonPrimary from "@/components/partials/ButtonPrimary";
import TickRoundedIcon from "@/components/icons/TickRoundedIcon";
import Star from "@/components/icons/Star";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from "react-countup";

import { gsap } from "gsap";

import { ScrollTrigger } from "@/assets/gsap/src/ScrollTrigger";
import ScrollTriggera from "react-scroll-trigger";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import aboutImg from "@/assets/img/about-academy.png";
import exploreCourses1 from "@/assets/img/explore-courses-1.png";
import exploreCourses2 from "@/assets/img/explore-courses-2.png";
import exploreCourses3 from "@/assets/img/explore-courses-3.png";
import benefitsOfCourses from "@/assets/img/benefits-of-courses.png";

import AddIcon from "@/components/icons/AddIcon";
import userImg1 from "@/assets/img/boy 1.jpg";
import userImg2 from "@/assets/img/boy 2.jpg";
import userImg3 from "@/assets/img/girl.jpg";
import bolgImg1 from "@/assets/img/blog-1.png";
import bolgImg2 from "@/assets/img/blog-2.png";
import bolgImg3 from "@/assets/img/blog-3.png";

import globalAlumniImg1 from "@/assets/img/global-alumni-1.png";
import globalAlumniImg2 from "@/assets/img/global-alumni-2.png";
import globalAlumniImg3 from "@/assets/img/global-alumni-3.png";
import globalAlumniImg4 from "@/assets/img/global-alumni-4.png";
import RenderStars from "@/components/partials/RenderStars";
import FaqComponent from "@/components/partials/FaqComponent";
import Type from "@/components/partials/Type";

const coursesBenefits = [
  "Get hired easily",
  "In-depth understanding of Blockchain",
  "Implementing Blockchain on business applications",
  "Blockchain and its use cases",
  "Lifetime access to the training videos",
  "Certified individuals’ names will be published on the website",
  "Assistance will be provided throughout the training program",
];
const frequentAskedQuestions = [
  {
    question: "What kind of courses do you offer in your academy?",
    answer:
      "Our academy offers courses in blockchain technology, web 3.0 and crypto trading. We have a variety of courses to choose from, ranging from introductory courses to advanced ones.",
  },
  {
    question: "Are your courses available online?",
    answer:
      "Yes, all of our courses are available online. You can take from anywhere in the world as long as you have an internet connection.",
  },
  {
    question: "What is the duration of your courses?",
    answer:
      "The duration of our courses varies depending on the course level and complexity. Our introductory courses usually last between 4-8 weeks, while our advanced courses can last upto 12 weeks.",
  },
  {
    question: "Who are your instructors?",
    answer:
      "Our instructors are experienced professionals with years of experience in blockchain technology, web 3.0 and crypto trading. They are experts in their respective fields and have a passion for teaching.",
  },
  {
    question: "Do you offer any hands-on projects or real-world case studies?",
    answer:
      "Yes, we offer hands-on projects and real-world case studies to provide our students with practical skills and knowledge. We believe in hands-on apporach to learning and we want our students to be able to apply to what they have learned in real-world scenarios.",
  },
  {
    question: "Do you provide any certification after completing the course?",
    answer:
      "Yes, we provide certification after completing the course. Our certificates are recognized in the industry and can help you stand out in job market.",
  },
  {
    question: "What are the prerequisities for enrolling in your courses?",
    answer:
      "There are no specific prerequisities for enrolling in our introductory courses. However, our advanced courses require a basic understanding of blockchain technology, web 3.0, and crypto trading.",
  },
];
const websiteData = [
  {
    title: "Courses",
    numbers: 10,
  },
  {
    title: "Batches",
    numbers: 15,
  },

  {
    title: " Hours Video",
    numbers: 100,
  },
];
const settings = {
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 100,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 100,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 100,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 100,
      },
    },
  ],
};
const customerReview = [
  {
    img: userImg1,
    text: " I have tried several online learning platforms but this is the best so far",
    rating: 5,
  },
  {
    img: userImg2,
    text: "The quality of education is top-notch and the courses are affordable",
    rating: 4.5,
  },
  {
    img: userImg3,
    text: "If you are looking for reliable and efficient learn, this academy is the way to go",
    rating: 5,
  },
];
const blogData = [
  {
    img: bolgImg1,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s,",
  },
  {
    img: bolgImg2,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    img: bolgImg3,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
];
const coursesData = [
  {
    img: exploreCourses1,
    title: "Explore Short Courses",
    text: (
      <p className="text-md xs:text-lg md:text-xl ">
        Learn about the{" "}
        <span className="text-colorYellow">Blockchain Technology</span>. Join us
        and explore the possibilities!
      </p>
    ),
  },
  {
    img: exploreCourses2,
    title: "Access Resources",
    text: (
      <p className="text-md xs:text-lg md:text-xl ">
        Learn about the{" "}
        <span className="text-colorYellow">WEB 3.0 Technology</span>. Join us
        and explore the possibilities!
      </p>
    ),
  },
  {
    img: exploreCourses3,
    title: "Read Blogs",
    text: (
      <p className="text-md xs:text-lg md:text-xl ">
        Explore a variety of courses on{" "}
        <span className="text-colorYellow">Trading</span> created by our experts
        and obtain certificate!
      </p>
    ),
  },
];
const globalAlumniImgData = [
  globalAlumniImg1,
  globalAlumniImg2,
  globalAlumniImg1,
  globalAlumniImg2,
];

const Home = () => {
  const [customerReviewPage, setCustomerReviewPage] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isMobile) return;
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline();
      const sections = gsap.utils.toArray(".explore");

      tl.to(".wrapper", {
        duration: 5,
        xPercent: -100 * (sections.length - 1),
      });

      ScrollTrigger.create({
        animation: tl,
        trigger: ".wrapper",
        start: "center center",
        mark: true,
        scrub: true,
        pin: true,
        end: "+=3000",
      });
    });
    return () => ctx.revert();
  }, [isMobile]);

  useEffect(() => {
    const deviceType = window.navigator.userAgent.includes("Mobile");
    setIsMobile(deviceType);
  }, [isMobile]);

  console.log("ismobile:", isMobile);

  const innerContainerStyling = "max-2xl:px-1 max-xl:px-4 max-xs:px-2";

  return (
    <>
      <header className={styles.header}>
        <div
          className={`m-auto max-w-7xl h-full flex items-end ${innerContainerStyling}`}
        >
          <div className="max-w-[100%] md:max-w-xl mb-10">
            <h1 className="mb-8">
              Join the digital revolution,
              <div className="h-40 md:h-44">
                {" "}
                <Type />
              </div>
            </h1>
            <div className="max-w-md mb-10 font-medium">
              <p className="mb-5">
                Welcome to Rik Academy, here we provide comprehensive and
                practical courses on Blockchain technology, Web 3 and Crypto
                trading. We offer a variety of courses tailored to different
                skill levels from beginners to advanced .
              </p>
              <p>
                Join us now and embark on a journey to become a blockchain and
                crypto expert!
              </p>
            </div>
            <ButtonPrimary>Get Started</ButtonPrimary>
          </div>
        </div>
      </header>

      {/* about */}
      <section className="py-8 bg-lightPurple mb-40">
        <div
          className={`max-w-7xl m-auto flex max-md:flex-col-reverse items-center justify-between xl:gap-x-20 ${innerContainerStyling}`}
        >
          <div className="max-w-2xl max-xl:max-w-xl max-lg:max-w-sm max-md:max-w-lg text-center md:text-left">
            <h2 className="mb-8 text-bluePrimary">About RIK Academy</h2>
            <p>
              Our academy is dedicated to providing top-notch education in
              blockchain technology, web 3.0 and crypto trading. We offer
              courses that cover the fundamentals of blockchain, the latest
              developments in web 3.0 and expert strategies for profitable
              crypto trading. Our experienced instructors will guide you through
              hands-on projects and real-world case studies to help you gain
              practical skills and knowledge in these rapidly evolving fields.
            </p>
          </div>
          <div className="max-w-lg max-xl:max-w-sm w-full">
            <Image
              src={aboutImg}
              alt="about-rik-academy"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* explore short courses */}
      <section
        className={`bg-bluePrimary pt-14 pb-16 px-1 mb-40 ${
          isMobile ? "overflow-x-auto" : ""
        }`}
      >
        <div className="wrapper flex max-sm:gap-x-20 items-start">
          {coursesData.map((item, i) => (
            <div key={i} className="min-w-full text-white explore">
              <div className="max-w-5xl m-auto w-full  flex flex-col items-start justify-center">
                <div className="max-xs:max-w-xs max-sm:max-w-sm max-md:max-w-lg max-lg:max-w-xl max-w-3xl m-auto">
                  <h2 className="mb-5">{item.title}</h2>
                  {item.text}

                  <div className="max-w-3xl max-xl:max-w-2xl max-lg:max-w-xl mt-7 ">
                    <Image src={item.img} alt="exploreCourses" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* benefits of courses */}
      <section className="pt-12 bg-lightPurple mb-40">
        <div className={`max-w-7xl m-auto ${innerContainerStyling}`}>
          <h2 className="mb-9 text-bluePrimary">Benefits of Courses</h2>

          <div className="flex items-center max-xl:items-end xl:gap-x-28 justify-between lg:justify-around">
            <div className="max-xl:max-w-md max-lg:hidden">
              <Image src={benefitsOfCourses} alt="img" />
            </div>

            <div className="max-xl:pb-10 m-3 md:m-0">
              {coursesBenefits.map((item, i) => (
                <li
                  key={item}
                  className={`list-none xs:w-max flex items-center gap-x-5 lg:text-sm ${
                    coursesBenefits.length === i + 1 ? "" : "mb-5"
                  }`}
                >
                  <TickRoundedIcon />
                  {item}
                </li>
              ))}

              <ButtonPrimary className="px-14  mt-12">
                {"Get Certificate Now>>>"}
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </section>

      {/* global alumni */}
      <section className="bg-lightPurple mb-40 py-24">
        <div className={`max-w-6xl m-auto ${innerContainerStyling}`}>
          <p className="text-xl mb-4">HEAR IT FROM</p>
          <h2 className="text-white mb-12">Our Global Alumni</h2>

          <div className="cursor-pointer    w-full ">
            <Slider {...settings}>
              {globalAlumniImgData.map((item, i) => (
                <div className="flex flex-row items-center mx-auto justify-center m-7  p-3 gap-5">
                  {" "}
                  <Image src={item} alt="img" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* frequently asked questions */}
      <section className="mb-40">
        <div className={`max-w-7xl m-auto ${innerContainerStyling}`}>
          <h3 className="text-center mb-12">Frequently Asked Questions</h3>

          <div className="flex flex-col gap-y-8">
            <FaqComponent frequentAskedQuestions={frequentAskedQuestions} />
          </div>
        </div>
      </section>

      {/* courses, students, and branches */}
      <section className="bg-bluePrimary py-20 mb-28">
        <div className="max-w-6xl m-auto grid xs:grid-cols-3 gap-y-10 max-xs:text-center text-white justify-items-center">
          {websiteData.map((item) => (
            <div key={item.title}>
              <div className="flex flex-row text-center justify-items-center">
                <h2>
                  <ScrollTriggera
                    onEnter={() => setLoading(true)}
                    onExit={() => {
                      setLoading(false);
                    }}
                  >
                    {loading && (
                      <CountUp
                        start={0}
                        end={item.numbers}
                        duration={3}
                        delay={0}
                      />
                    )}
                  </ScrollTriggera>
                </h2>
                <AddIcon className="my-auto text-2xl" />
              </div>

              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* customer review */}
      <section className="bg-lightPurple pt-20 pb-5 mb-40">
        <div
          className={`max-w-7xl m-auto text-center relative ${innerContainerStyling}`}
        >
          <h4 className="font-serif inter font-bold mb-12">
            People Love Our Crypto Courses
          </h4>

          <Carousel
            showArrows={false}
            showStatus={false}
            autoPlay
            infiniteLoop
            showThumbs={false}
            onChange={(index) => {
              setCustomerReviewPage(index);
            }}
            renderIndicator={(clickHandler, isSelected, index) => {
              return (
                <button
                  onClick={(e) => {
                    clickHandler(e);
                    setCustomerReviewPage(index);
                  }}
                  className={`w-5 h-5 rounded-full mx-2 ${
                    index === customerReviewPage ? "bg-bluePrimary" : "bg-white"
                  }`}
                />
              );
            }}
            selectedItem={customerReviewPage}
          >
            {customerReview.map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="xs:w-40 w-32 xs:h-40 h-32 mb-5">
                  <Image src={item.img} alt="user" className="rounded-full" />
                </div>
                <RenderStars noOfStars={item.rating} starClasses="w-5 h-5" />

                <p className="mt-12 mb-20">{item.text}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* blogs */}
      {/* <section className="bg-lightPurple pt-8 pb-11 mb-16">
        <div className={`max-w-7xl m-auto ${innerContainerStyling}`}>
          <p id="Blogs" className="text-2xl mb-12 ">
            From our Blog.....
          </p>
          <div className="grid sm:grid-cols-3 gap-y-20 justify-items-center gap-x-6">
            {blogData.map((item, i) => (
              <div key={i} className="max-sm:max-w-xs">
                <Image
                  src={item.img}
                  alt="img"
                  className="mb-8 max-sm:mx-auto rounded"
                />
                <p className="max-md:text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Home;
