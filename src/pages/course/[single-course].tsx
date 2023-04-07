import React from "react";

import TickIcon from "@/components/icons/TickIcon";
import VideoIcon from "@/components/icons/VideoIcon";
import WorldLogo from "@/components/icons/WorldLogo";
import FaqComponent from "@/components/partials/FaqComponent";
import RenderStars from "@/components/partials/RenderStars";

import img from "@/assets/img/single-course-img.png";
import CartPopup from "@/components/partials/CartPopup";

import SingleCourseDetailCard from "@/components/app/SingleCourseDetailCard";

const learningInfo = [
  "Why this is important",
  "Understand the theory behind Blockchain",
  "Applications of Blockchain",
  "Hashing Algorithm",
  "Immutable Ledger",
  "Understand the theory behind P2P Network",
  "Centralized and Distributed Network",
  "Blockchain Mining",
  "Proof-of-Work protocol (PoW)",
  "Proof-of-Stake protocol (PoS)",
  "Difference between PoW and PoS",
  "Completing chain problem",
];
const basicInfoData = {
  "Course Starts On": "01 May, 2023",
  "Class Schedule": "Flexible",
  "Mode of the Course": "Pre Recorded",
  "No. of Lectures": "10+",
  "Class Recording Provided": "Yes",
  "Doubt Classes": "20+ Doubt Session",
  "Course Validity": "1 Year",
  "Class Timings": "Anytime",
};
const frequentAskedQuestions = [
  {
    question: "Is this a live or recorded Class?",
    answer:
      "We will provide you recorded class. You can learn at your own pace and comfort.",
  },
  {
    question: "Do, i need to learn anything before this course starts?",
    answer:
      "No, you do not need to learn anything. Our courses are designed in a manner that anyone can understand them. Our curriculum will help you understand each topic from the scratch.",
  },
  {
    question: "If i miss any LIVE session,how can i attend it again?",
    answer: "All the course content is pre-recorded.",
  },
  {
    question:
      "I don’t have any Prior experience of any programming language, Can i take this Course?",
    answer:
      "Their is no need to learn anything before enrolling in our courses. Required programming languages will be taught in the advanced courses.",
  },
  {
    question: "Can i get a refund incase i change my mind?",
    answer:
      "No refund will be given once you have enrolled. But we offer free demo classes , where you can access few classes before enrolling in the course.",
  },
];

const courseCardDetails = {
  img: img,
  discountedPrice: 2500,
  price: 5000,
  "course-time": "1 hrs 10 min",
  details: [
    "What is blockchain Technology?",
    "What is P2P Network?",
    "Blockchain Mining",
    "Proof-of-Work protocol (PoW)",
    "Proof-of-Stake protocol (PoS)",
    "Completing chain problem",
  ],
};

const SingleCourse = () => {
  const basicDetailData = Object.keys(basicInfoData);

  return (
    <>
      <header className="bg-bluePrimary px-5 lg:px-20 xl:px-40 pb-16 pt-32 mb-60">
        <div className="max-w-7xl mx-auto flex justify-between relative">
          {/* text container */}
          <div className="text-white max-w-md lg:max-w-lg xl:max-w-xl">
            <p className="text-2xl mb-2.5">Welcome to RIK Academy</p>

            <h1 className="mb-8 max-lg:text-4xl">Blockchain Technology</h1>

            <p className="mb-12">
              This beginner&#39;s course on Blockchain Technology will introduce
              you to the basics of decentralized systems and distributed ledger
              technology. By the end of this course you will have a solid
              foundation for further exploration and development in the
              blockchain space.
            </p>

            <div className="flex gap-x-1 items-center mb-6">
              <p className="text-xs">4.8</p>
              <RenderStars noOfStars={5} starClasses="w-3 h-3" />
            </div>

            <div className="flex items-center gap-x-12">
              <span className="flex items-center gap-x-2.5">
                <WorldLogo />
                <p>Hindi</p>
              </span>

              <span className="flex items-center gap-x-2.5">
                <VideoIcon />
                <p>10+ Lectures</p>
              </span>
            </div>
          </div>

          {/* card */}
          <SingleCourseDetailCard
            {...courseCardDetails}
            className="absolute right-0 lg:-right-[5%] -top-[10%] lg:-top-[20%] z-10 shadow-md rounded-lg"
          />
        </div>
      </header>

      <section className="mb-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mb-24">
            <p className="text-2xl font-semibold mb-8">What you will learn </p>

            <div className="grid grid-cols-2 gap-y-3">
              {learningInfo.map((item, i) => (
                <li key={i} className="flex items-center list-none gap-x-2.5">
                  <TickIcon /> {item}
                </li>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mb-24">
            <p className="text-xl font-semibold mb-8">Basic Details</p>

            {basicDetailData.map((mainKey, i) => {
              const key = mainKey as keyof typeof basicInfoData;
              return (
                <div
                  key={i}
                  className={`grid grid-cols-2 ${
                    i + 1 === basicDetailData.length ? "" : "mb-2.5"
                  }`}
                >
                  <p>{key}</p>
                  <p>{basicInfoData[key]}</p>
                </div>
              );
            })}
          </div>

          <div>
            <p className="text-2xl font-semibold mb-8">FAQs</p>
          </div>

          <div className="flex flex-col gap-y-7">
            <FaqComponent frequentAskedQuestions={frequentAskedQuestions} />
          </div>
        </div>
      </section>

      <CartPopup />
    </>
  );
};

export default SingleCourse;
