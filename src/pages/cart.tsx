import React, { useState } from "react";
import CartItemComponent from "@/components/partials/CartItemComponent";
import img from "@/assets/img/single-course-img.png";
import ButtonPrimary from "@/components/partials/ButtonPrimary";
import Input from "@/components/partials/Input";
import Link from "next/link";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";

const process = ["Order Details", "Billing Details", "Make Payment"];
const formData = {
  name: "Enter your name*",
  email: "Enter your Email*",
  "mobile number": "Enter Mobile Number*",
};

const Cart = () => {
  const [activeTab, setActiveTab] = useState(["order details"]);

  return (
    <section className="bg-bluePrimary min-h-screen pt-44 mb-20">
      <div className="max-w-6xl mx-auto bg-white w-full px-28 pt-20 pb-10">
        <div className="flex items-center px-10 mb-2.5">
          {process.map((item, i) => {
            const lastChild = i + 1 === process.length;
            const condition = i !== 0 && !lastChild;
            return (
              <li
                key={item}
                className={`h-[2px] w-full bg-gray-300 flex items-center ${
                  condition ? "justify-center" : lastChild ? "justify-end" : ""
                }`}
              >
                <span
                  className={`w-2.5 h-2.5 border-2 ${
                    i === 0
                      ? "border-bluePrimary bg-white"
                      : "border-gray-300 bg-gray-300"
                  } rounded-full `}
                />
              </li>
            );
          })}
        </div>
        <div className="flex items-center justify-between mb-20">
          {process.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        {/* order details */}
        {false && <OrderDetails />}
        {false && <BillingDetails />}
        {true && <MakePayment />}
      </div>
    </section>
  );
};

export default Cart;

const OrderDetails = () => {
  return (
    <>
      <div className="mb-10">
        <div className="px-8 flex items-center justify-between text-sm p4-5 mb-8 uppercase">
          <p>ITEMS DETAILS</p>
          <p>Price</p>
        </div>

        <CartItemComponent img={img} className="border-y border-bluePrimary" />
      </div>

      <ButtonPrimary className="rounded-full h-10 py-0 px-16 block ml-auto">
        Next
      </ButtonPrimary>
    </>
  );
};

const BillingDetails = () => {
  return (
    <div>
      <p className="mb-5">All marked fields are required.</p>

      <form>
        {Object.keys(formData).map((mainKey, i) => {
          const key = mainKey as keyof typeof formData;
          const length = Object.keys(formData).length;
          return (
            <>
              <label className="capitalize mb-2.5 inline-block">{key}</label>
              <Input
                className={`w-full ${i + 1 !== length ? "mb-5" : "mb-12"}`}
                placeholder={formData[key]}
              />
            </>
          );
        })}

        <div className="flex items-center justify-between">
          <a
            onClick={() => {}}
            className="text-bluePrimary cursor-pointer flex items-center gap-x-1"
          >
            <ArrowLeftIcon />
            Previous
          </a>
          <ButtonPrimary className="rounded-full py-0 h-10 pl-14 pr-9 flex items-center justify-center gap-x-1">
            Next
            <ArrowRightIcon />
          </ButtonPrimary>
        </div>
      </form>
    </div>
  );
};

const MakePayment = () => {
  return (
    <div>
      <p className="mb-8">
        Order details will be sent to your email address xyz@gmail.com
      </p>

      <div className="bg-lightBlue px-5 py-4 font-semibold flex items-center justify-between mb-12">
        <p>Payable Amount</p>
        <p>
          <span className="font-extralight">₹</span>2500
        </p>
      </div>

      <ButtonPrimary className="rounded-full h-10 px-12 py-0 block mx-auto mb-12">
        Proceed to Payment
      </ButtonPrimary>

      <p className="text-center mb-24">
        On successful purchase, the course(s) will be available instantly in My
        Courses. If it doesn`t , Please write an email to{" "}
        <Link href={"#"} className="font-semibold">
          support@rikacademy.com
        </Link>
      </p>

      <div className="flex items-center justify-between">
        <a
          onClick={() => {}}
          className="text-bluePrimary cursor-pointer flex items-center gap-x-1"
        >
          <ArrowLeftIcon />
          Previous
        </a>
        <ButtonPrimary className="rounded-full py-0 h-10 pl-14 pr-9 flex items-center justify-center gap-x-1">
          Next
          <ArrowRightIcon />
        </ButtonPrimary>
      </div>
    </div>
  );
};
