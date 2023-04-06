import React, { useEffect, useState } from "react";
import Input from "@/components/partials/Input";
import {
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

import ButtonPrimary from "@/components/partials/ButtonPrimary";
import ReloadIcon from "@/components/icons/ReloadIcon";

const fields = [
  {
    name: "name",
    placeholder: "Enter Your Name*",
  },
  {
    name: "email",
    placeholder: "Enter Email Address*",
  },
  {
    name: "mobileNumber",
    placeholder: "Enter Mobile Number*",
  },
  {
    name: "state",
    placeholder: "Select State*",
  },
  {
    name: "city",
    placeholder: "Select City*",
  },
  {
    name: "course",
    placeholder: "Select Course *",
    options: ["Blockchain", "WEB 3.0", "Trading"],
  },
];

const dropdownStyling =
  "px-4 py-2.5 rounded focus:outline-none border border-bluePrimary";

const RegisterForm = () => {
  const [captchaValue, setCaptchaValue] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptcha(captcha);
  };

  const reloadCaptcha = () => {
    generateCaptcha();
  };

  return (
    <form className="grid grid-cols-2 gap-y-5 gap-x-4 sm:gap-x-6">
      {fields.map((item) => {
        const condition = item.name === "city" || item.name === "state";
        const dropdownState = item.name === "country" || item.name === "state";

        return item.name === "state" ? (
          <RegionDropdown
            country="India"
            value={region}
            onChange={(val) => setRegion(val)}
            classes={dropdownStyling}
          />
        ) : item.name === "course" ? (
          <select className={`${dropdownStyling} col-span-2`}>
            {item?.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <Input
            key={item.name}
            placeholder={item.placeholder}
            className={condition ? "col-span-2 xs:col-span-1" : "col-span-2 "}
          />
        );
      })}

      <div className="col-span-2 xs:col-span-1 flex items-center justify-between border border-bluePrimary rounded px-3">
        <h3 className="mx-auto">{captcha}</h3>
        <button type="button" onClick={reloadCaptcha}>
          <ReloadIcon />
        </button>
      </div>

      <Input
        placeholder="Enter text as shown"
        className="col-span-2 xs:col-span-1"
        value={captchaValue}
        onChange={(e) => setCaptchaValue(e.target.value)}
      />

      <div className="flex items-center col-span-2 gap-x-2">
        <input id="checkbox" type="checkbox" />
        <label htmlFor="checkbox">
          I agree to receive information by signing up on RIK Academy*
        </label>
      </div>

      <ButtonPrimary className="w-full col-span-2 py-3">Register</ButtonPrimary>
    </form>
  );
};

export default RegisterForm;
