import React from "react";
import CartIcon from "../icons/CartIcon";
import CloseIcon from "../icons/CloseIcon";
import Image from "next/image";
import img from "@/assets/img/single-course-img.png";
import Link from "next/link";
import ButtonPrimary from "./ButtonPrimary";

const CartPopup = () => {
  return (
    <>
      <div className="fixed z-30 top-[20%] left-1/2 -translate-x-1/2 py-6 bg-white max-w-4xl w-full">
        <div className="px-8 flex justify-between items-center mb-12">
          <p className="flex items-center gap-x-2.5">
            <span>
              <CartIcon />
            </span>
            Cart (1 Item)
          </p>

          <span className="cursor-pointer">
            <CloseIcon />
          </span>
        </div>

        <div className="px-8 flex items-center justify-between text-sm p4-5 mb-8 uppercase">
          <p>ITEMS DETAILS</p>
          <p>Price</p>
        </div>

        <div className="px-8 py-2.5 bg-lightPurple flex justify-between items-center mb-10">
          <div className="flex items-center">
            <Image src={img} className="w-32 mr-5" alt="img" />
            <div>
              <p className="mb-2.5 text-xl font-semibold">
                Blockchain Technology
              </p>
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

        <div className="px-8">
          <span className="flex items-center gap-x-2.5 mb-5 justify-end">
            <p>Total Amount</p>
            <p className="font-semibold text-bluePrimary">
              <span className="font-extralight">₹</span> 2500
            </p>
          </span>

          <div className="flex items-center justify-between w-full">
            <Link href={"#"} className="text-bluePrimary">
              Add more
            </Link>

            <ButtonPrimary className="py-1.5 px-10 rounded-full">
              Checkout
            </ButtonPrimary>
          </div>
        </div>
      </div>

      {/*overlay  */}
      <div className="w-full h-full fixed top-0 bg-black/50 z-20" />
    </>
  );
};

export default CartPopup;
