import LoginForm from "@/components/app/Forms/LoginForm";
import RegisterForm from "@/components/app/Forms/RegisterForm";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type btnsType = "register" | "login";

const btns: btnsType[] = ["register", "login"];

const Login = () => {
  const router = useRouter();
  const [formType, setFormType] = useState<btnsType>("register");

  useEffect(() => {
    if (router.query.tab && formType === "register") {
      router.push("/login");
    }
  }, [router, formType]);

  return (
    <section className="bg-bluePrimary min-h-screen flex justify-center items-center">
      <div className="bg-white rounded max-w-2xl w-full px-6 pt-5 pb-8">
        <div className="flex items-center gap-x-8 mb-10">
          {btns.map((item) => (
            <button
              key={item}
              className={`text-xl font-semibold p-1 capitalize focus:outline-none transition-colors border-b-2 
              ${
                item === formType ? "border-bluePrimary" : "border-transparent"
              }`}
              onClick={() => {
                setFormType(item);
                if (router.asPath !== "/login") {
                  router.push("/login");
                }
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {formType === "register" && <RegisterForm />}
        {formType === "login" && <LoginForm />}
      </div>
    </section>
  );
};

export default Login;
