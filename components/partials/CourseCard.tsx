import React from "react";
import Image, { StaticImageData } from "next/image";
import ButtonPrimary from "./ButtonPrimary";

interface Props {
  img: StaticImageData | string;
  title: string;
  moduleName: string;
  courseTopics: string[];
  isComingSoon?: boolean;
}

const CourseCard: React.FC<Props> = ({
  img,
  title,
  courseTopics,
  moduleName,
  isComingSoon,
}) => {
  return (
    <div className="max-w-[380px] relative md:max-w-[413px] text-base text-lightGrey p-4 border border-bluePrimary rounded-lg flex flex-col">
      <>
        <Image src={img} alt="img" className="w-full h-[200px] md:h-[240px]" />
        <div className="mb-7 mt-3 lg:mt-6">
          <h1 className="text-2xl mb-4 lg:mb-6 font-semibold">{title}</h1>
          <p className=" font-semibold mb-1">{moduleName}</p>
          <div className="mb-7">
            <ul className="pl-4">
              {courseTopics.map((item, i) => {
                return (
                  <li key={i} className=" mb-1 list-disc ">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <ButtonPrimary
          buttonType="white"
          className="w-full text-bluePrimary font-medium hover:text-white border-bluePrimary transition-all py-1 mt-auto"
        >
          Enroll Course
        </ButtonPrimary>
      </>

      {isComingSoon && (
        <div className="absolute w-full h-full top-0 left-0 rounded-lg bg-black/50 flex justify-center items-center text-center">
          <h2 className="text-4xl sm:text-5xl xl:text-6xl xl:leading-[70px] text-colorYellow">
            Coming <br /> Soon
          </h2>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
