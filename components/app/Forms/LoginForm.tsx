import ButtonPrimary from "@/components/partials/ButtonPrimary";
import Input from "@/components/partials/Input";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import OTPInput from "react-otp-input";

const fields = ["email", "password"];

const LoginForm = () => {
  const router = useRouter();
  const tab = router.query.tab;

  const [otp, setOtp] = useState("");

  const formSubmitHandler = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (tab === "forgot-password") {
      console.log("forgot password");
      router.push("?tab=reset-password");
      //
    } else if (tab === "reset-password") {
      console.log("reset password");
      //
    } else {
      console.log("login form");
    }
  };

  return (
    <form className="flex flex-col" onSubmit={formSubmitHandler}>
      {!tab && (
        <>
          {fields.map((item, i) => (
            <Input
              key={item}
              className={`placeholder:capitalize ${i === 0 ? "mb-5" : "mb-8"}`}
              placeholder={`enter your ${item}`}
            />
          ))}

          <div className="flex items-center col-span-2 gap-x-2 mb-5">
            <input id="checkbox" type="checkbox" />
            <label htmlFor="checkbox">
              Check to remember your login details
            </label>
          </div>

          <ButtonPrimary className="w-full mb-8">Login</ButtonPrimary>
          <Link href={"?tab=forgot-password"} className="w-max m-auto">
            FORGOT PASSWORD?
          </Link>
        </>
      )}

      <>
        {tab === "forgot-password" && (
          <Input
            placeholder="Enter Your Registered Email ID*"
            className="mb-8"
          />
        )}

        {tab === "reset-password" && (
          <>
            <Input disabled placeholder="xyz@gmail.com" className="mb-16" />

            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
              containerStyle="mb-8 mx-auto otpContainer gap-x-6"
              inputStyle="border-b-2 border-bluePrimary text-xl focus:outline-none min-w-[50px] sm:min-w-[80px]"
            />
          </>
        )}

        {tab && (
          <>
            <ButtonPrimary className="w-full mb-8">Submit</ButtonPrimary>
            <Link href={"/login"} className="w-max m-auto">
              LOGIN NOW
            </Link>
          </>
        )}
      </>
    </form>
  );
};

export default LoginForm;
