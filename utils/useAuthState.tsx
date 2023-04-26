import { registerFormInfo } from "@/constant/constant";
import React, { useState } from "react";

const useAuthState = () => {
  const [registerForm, setRegisterForm] = useState({ ...registerFormInfo });

  const handleInputValidation = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let error = "";
    const name = event.target.name;
    const value = event.target.value;

    if (name === "name") {
      if (value.length < 8) {
        error = "Minimum character limit is 8";
      } else if (value.length > 20) {
        error = "Maximum character limit is 20";
      }
    } else if (name === "password") {
      if (value.length < 8) {
        error = "Minimum character limit is 8";
      } else if (value.length > 20) {
        error = "Maximum character limit is 20";
      }
    } else if (name === "email") {
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)) {
        error = "Invalid Email";
      }
    } else if (name === "mobileNumber") {
      if (!/^\d{10}$/.test(value)) {
        error = "Invalid Phone Number";
      }
    } else if (name === "state" || name === "city" || name === "course") {
      if (value.length === 0) {
        error = "This field can not be empty";
      }
    }
    return error;
  };

  const formEmptyAndErrorValidation = (form: any, key: string) => {
    let error = "";
    if (form.value.length === 0 && form.error.length == 0) {
      error = `${key} should not be empty`;
    } else if (form.value.length !== 0 && form.error.length !== 0) {
      error = `${key} is not valid`;
    } else {
      error = form.error;
    }
    return error;
  };

  const handleRegisterForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    let x = { ...registerForm };
    const name = event.target.name as keyof typeof registerForm;
    x[name]["value"] = event.target.value;
    x[name]["error"] = handleInputValidation(event);
    setRegisterForm(x);
  };

  const extractRegisterFormData = () => {
    let data: { [key: string]: string } = {};

    for (const [mainKey, mainValue] of Object.entries(registerForm)) {
      const key = mainKey as keyof typeof registerForm;
      data[key] = mainValue.value;
    }
    return data;
  };

  const postRegisterForm = async () => {
    let x = { ...registerForm };
    let error = false;
    for (const [mainKey, mainValue] of Object.entries(x)) {
      const key = mainKey as keyof typeof registerForm;
      let err = formEmptyAndErrorValidation(mainValue, `${mainKey}`);
      x[key] = {
        ...x[key],
        error: err,
      };
      if (err.length !== 0) error = true;
    }

    setRegisterForm(x);
    if (error) {
      throw Error("Invalid or Incomplete Form Fields...");
    }

    //end data validation
    const data: any = extractRegisterFormData(); //extractData
    console.log("data", data);
  };

  return {
    registerForm,
    handleRegisterForm,
    postRegisterForm,
  };
};

export default useAuthState;
