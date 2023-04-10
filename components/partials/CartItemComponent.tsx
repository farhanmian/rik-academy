import Image, { StaticImageData } from "next/image";
import React from "react";
import CloseIcon from "../icons/CloseIcon";

const CartItemComponent: React.FC<{
  img: StaticImageData | string;
  className?: string;
}> = ({ img, className: classes = "" }) => {
  return (
    <div
      className={`px-8 py-2.5 bg-lightPurple flex justify-between items-center mb-10 ${classes}`}
    >
      <div className="flex items-center">
        <Image src={img} className="w-32 mr-5" alt="img" />
        <div>
          <p className="mb-2.5 text-xl font-semibold">Blockchain Technology</p>
          <p className="text-sm">RIK Academy | Till 2025</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <span>
          <p className="text-sm mb-1 font-semibold">
            <span className="font-extralight">₹</span> 2500
          </p>
          <p className="text-xs">incl. 18% GST</p>
        </span>

        <span className="cursor-pointer">
          <CloseIcon color="red" />
        </span>
      </div>
    </div>
  );
};

export default CartItemComponent;
