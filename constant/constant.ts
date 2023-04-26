const basicInputTemplate = { value: "", error: "" };

export const registerFormInfo = {
  name: { ...basicInputTemplate },
  email: { ...basicInputTemplate },
  mobileNumber: { ...basicInputTemplate },
  state: { ...basicInputTemplate },
  city: { ...basicInputTemplate },
  course: { ...basicInputTemplate },
};

export const loginFormInfo = {
  email: { ...basicInputTemplate },
  password: { ...basicInputTemplate },
};
