import React, { useEffect, useState } from "react";

import Image from "next/image";
import styles from "@/src/styles/Home.module.css";
import ButtonPrimary from "@/components/partials/ButtonPrimary";
import TickIcon from "@/components/icons/TickIcon";
import Star from "@/components/icons/Star";

import { gsap } from "gsap";

import { ScrollTrigger } from "@/assets/gsap/src/ScrollTrigger";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import aboutImg from "@/assets/img/about-academy.png";
import exploreCourses from "@/assets/img/explore-courses.png";
import benefitsOfCourses from "@/assets/img/benefits-of-courses.png";

import AddIcon from "@/components/icons/AddIcon";
import userImg from "@/assets/img/user-1.png";
import bolgImg1 from "@/assets/img/blog-1.png";
import bolgImg2 from "@/assets/img/blog-2.png";
import bolgImg3 from "@/assets/img/blog-3.png";

import globalAlumniImg1 from "@/assets/img/global-alumni-1.png";
import globalAlumniImg2 from "@/assets/img/global-alumni-2.png";
import globalAlumniImg3 from "@/assets/img/global-alumni-3.png";
import globalAlumniImg4 from "@/assets/img/global-alumni-4.png";

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
    title: "Online Students",
    numbers: 12500,
  },
  {
    title: "Batches",
    numbers: 200,
  },
  {
    title: "Courses",
    numbers: 10,
  },
];
const customerReview = [
  {
    img: userImg,
    text: "This cryptocurrency course was one of the best Blockchain course I’ve ever attended!",
    rating: 5,
  },
  {
    img: userImg,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    rating: 4,
  },
  {
    img: userImg,
    text: "Text of the printing and typesetting industry I’ve ever simply dummy text.",
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
    img: exploreCourses,
    title: "Explore Short Courses",
    text: "Learn about the Blockchain Technology. Join us and explore the possibilities!",
  },
  {
    img: exploreCourses,
    title: "Access Resources",
    text: "Gain access to a wide range of resources curated by professionals, including market reports, books, short courses, and more!",
  },
  {
    img: exploreCourses,
    title: "Read Blogs",
    text: "Read blogs that provide you with market insights, the latest news, and the best crypto content!",
  },
];
const globalAlumniImgData = [
  globalAlumniImg1,
  globalAlumniImg2,
  globalAlumniImg3,
  globalAlumniImg4,
];

const Home = () => {
  const [frequentQuestions, setFrequentQuestions] = useState<number[]>([]);
  const [customerReviewPage, setCustomerReviewPage] = useState(0);

  useEffect(() => {
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
  }, []);

  const toggleFrequentQuestionsHandler = (i: number) => {
    if (frequentQuestions.includes(i)) {
      // remove i from state
      const updated = frequentQuestions.filter((item) => item !== i);
      setFrequentQuestions(updated);
    } else {
      // add i to state
      setFrequentQuestions((prev) => (prev.length > 0 ? [...prev, i] : [i]));
    }
  };

  const innerContainerStyling = "max-2xl:px-1 max-xl:px-4 max-xs:px-2";

  return (
    <>
      <header className={styles.header}>
        <div
          className={`m-auto max-w-7xl h-full flex items-end ${innerContainerStyling}`}
        >
          <div className="max-w-xl mb-10">
            <h1 className="mb-8">Empowering the future of decentralization</h1>
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
      <section className="py-8 bg-lightBlue mb-40">
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
      <section className="bg-bluePrimary pt-14 pb-16 px-1 mb-40">
        <div className="wrapper flex items-start">
          {coursesData.map((item, i) => (
            <div key={i} className="min-w-full text-white explore">
              <div className="max-w-5xl m-auto w-full  flex flex-col items-start justify-center">
                <div className="max-xs:max-w-xs max-sm:max-w-sm max-md:max-w-lg max-lg:max-w-xl max-w-3xl m-auto">
                  <h2 className="mb-5">{item.title}</h2>
                  <p className="text-xl mb-7">{item.text}</p>

                  <div className="max-w-3xl max-xl:max-w-2xl max-lg:max-w-xl">
                    <Image src={item.img} alt="exploreCourses" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* benefits of courses */}
      <section className="pt-12 bg-lightBlue mb-40">
        <div className={`max-w-7xl m-auto ${innerContainerStyling}`}>
          <h2 className="mb-9 text-bluePrimary">Benefits of Courses</h2>

          <div className="flex items-center max-xl:items-end xl:gap-x-28 justify-between lg:justify-around">
            <div className="max-xl:max-w-md max-lg:hidden">
              <Image src={benefitsOfCourses} alt="img" />
            </div>

            <div className="max-xl:pb-10">
              {coursesBenefits.map((item, i) => (
                <li
                  key={item}
                  className={`list-none xs:w-max flex items-center gap-x-5 lg:text-sm ${
                    coursesBenefits.length === i + 1 ? "" : "mb-5"
                  }`}
                >
                  <TickIcon />
                  {item}
                </li>
              ))}

              <ButtonPrimary className="px-14 mt-12">
                {"Get Certificate Now>>>"}
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </section>

      {/* global alumni */}
      <section className="bg-lightBlue mb-40 py-24">
        <div className={`max-w-6xl m-auto ${innerContainerStyling}`}>
          <p className="text-xl mb-4">HEAR IT FROM</p>
          <h2 className="text-white mb-12">Our Global Alumni</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 justify-items-center gap-x-10 gap-y-10">
            {globalAlumniImgData.map((item, i) => (
              <Image
                key={i}
                src={item}
                alt="globalAlumniImg"
                className="max-md:w-52"
              />
            ))}
          </div>
        </div>
      </section>

      {/* frequently asked questions */}
      <section className="mb-40">
        <div className={`max-w-7xl m-auto ${innerContainerStyling}`}>
          <h3 className="text-center mb-12">Frequently Asked Questions</h3>

          <div className="flex flex-col gap-y-8">
            {frequentAskedQuestions.map((item, i) => (
              <div
                key={i}
                className={`transition-all ${
                  frequentQuestions.includes(i) ? "drop-shadow-md" : ""
                }`}
              >
                <ButtonPrimary
                  className="rounded-none min-w-full text-start py-5 max-sm:px-3 hover:drop-shadow-sm flex items-center gap-x-4 sm:gap-x-9"
                  onClick={() => {
                    toggleFrequentQuestionsHandler(i);
                  }}
                >
                  <AddIcon
                    className={`transition-all min-w-max ${
                      frequentQuestions.includes(i) ? "-rotate-45" : ""
                    }`}
                  />
                  {item.question}
                </ButtonPrimary>
                <div
                  className={`w-full bg-lightBlue px-5 transition-all ${
                    frequentQuestions.includes(i)
                      ? "h-max py-6"
                      : "h-0 overflow-hidden"
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* courses, students, and branches */}
      <section className="bg-bluePrimary py-20 mb-28">
        <div className="max-w-6xl m-auto grid xs:grid-cols-3 gap-y-10 max-xs:text-center text-white justify-items-center">
          {websiteData.map((item) => (
            <div key={item.title}>
              <h2>{item.numbers}</h2>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* customer review */}
      <section className="bg-lightBlue pt-20 pb-5 mb-40">
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
                <RenderStars noOfStars={item.rating} />

                <p className="mt-12 mb-20">{item.text}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* blogs */}
      <section className="bg-lightBlue pt-8 pb-11 mb-16">
        <div className={`max-w-7xl m-auto ${innerContainerStyling}`}>
          <p className="text-2xl mb-12">From our Blog.....</p>
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
      </section>
    </>
  );
};

export default Home;

const RenderStars: React.FC<{ noOfStars: number }> = ({ noOfStars }) => {
  const [stars, setStars] = useState<boolean[]>([]);

  useEffect(() => {
    setStars([]);
    for (let i = 0; i < 5; i++) {
      if (i < noOfStars) {
        // true
        setStars((prev) => (prev.length > 0 ? [...prev, true] : [true]));
      } else {
        // false
        setStars((prev) => (prev.length > 0 ? [...prev, false] : [false]));
      }
    }
  }, [noOfStars]);

  return (
    <div className="flex items-center gap-x-1">
      {stars.map((item, i) => (
        <Star key={i} color={item ? "gold" : "white"} />
      ))}
    </div>
  );
};
