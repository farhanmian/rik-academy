import Image, { StaticImageData } from "next/image";
import React from "react";
import ClockIcon from "../icons/ClockIcon";
import ButtonPrimary from "../partials/ButtonPrimary";

interface Props {
  img: StaticImageData | string;
  discountedPrice: number | string;
  price: number | string;
  "course-time": string;
  details: string[];
  className?: string;
}

const SingleCourseDetailCard: React.FC<Props> = (props) => {
  const classes = props.className;

  return (
    <div
      className={`${classes} rounded-lg p-4 max-w-xs lg:max-w-sm 2xl:max-w-md w-full bg-white`}
    >
      <Image src={props.img} alt="img" className="w-full rounded-lg mb-5" />

      <div className="text-sm lg:text-xl font-semibold flex items-center mb-4 lg:mb-8">
        <p className="mr-5">
          <span className="font-extralight">₹</span> {props.discountedPrice}
        </p>
        <p className="text-gray-400 mr-auto">
          <span className="font-extralight">₹</span> {props.price}
        </p>

        <p className="flex items-center">
          <span className="mr-2.5">
            <ClockIcon />
          </span>
          1 hrs 10 min
        </p>
      </div>

      <ButtonPrimary className="w-full mb-6" buttonType="white">
        Buy Now
      </ButtonPrimary>

      <div>
        <p className="font-medium mb-3">This Course Includes:</p>
        <div className="ml-2 flex flex-col gap-y-2.5 ">
          {props.details.map((item, i) => (
            <li key={i} className="max-lg:text-sm">
              {item}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleCourseDetailCard;
