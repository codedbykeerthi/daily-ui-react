import React, { useState } from "react";
import AuthForm from "./AuthForm";
import AuthHeader from "./AuthHeader";
import logoWord from "../../../assets/day02/logoWord.png";
import splitimg from "../../../assets/day03/splitimg.png";
import logo from "../../../assets/day03/logo.png";
import whitelogo from "../../../assets/day03/whitelogo.png";
import AuthTab from "./AuthTab";

const AuthPage = () => {
  const authItems = ["Sign in", "Sign up"];
  const [authType, setAuthType] = useState("Sign in");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="w-full h-screen relative">
        <img
          src={splitimg}
          alt="splitimg"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 p-6">
          <img src={whitelogo} alt="DevSpace logo" className="w-40 mt-4" />

          <div className="mx-4 px-2 text-white">
            <h1 className="text-4xl font-semibold mb-3">Welcome back!</h1>
            <p className="line-clamp-2 whitespace-pre-line">
              Sign in to continue your journey and build something amazing.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full max-w-xl px-4 mx-auto justify-center">
        {/* <img
          className="w-35 object-cover mt-2 mb-10"
          src={logoWord}
          alt="logo"
        /> */}

        {/* <ul className="flex mb-10">
            {authItems.map((item) => (
              <li key={item} className="flex-1">
                <AuthTab
                  label={item}
                  isActive={authType === item}
                  onClick={() => setAuthType(item)}
                />
              </li>
            ))}
          </ul> */}

        <div className="relative flex border-b border-gray-200">
          {authItems.map((item) => (
            <button
              key={item}
              onClick={() => setAuthType(item)}
              className="flex-1 py-3 text-sm font-medium text-center"
            >
              {item}
            </button>
          ))}

          <span
            className={`absolute bottom-0 h-[2px] bg-blue-600 transition-all duration-300`}
            style={{
              width: "50%",
              left: authType === "Sign in" ? "0%" : "50%"
            }}
          />
        </div>

        <div className="mb-6 text-center">
          <h1 className="text-slate-900 text-xl font-semibold mb-2 ">
            Sign in to your account
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            Welcome back! Please enter your details
          </p>
        </div>

        <AuthForm />

        <div className="mt-4 text-center">
          <p className="text-sm text-slate-600 ">
            Dont have an account?{" "}
            <a
              href="#"
              className="text-sm font-medium text-blue-700 hover:underline focus:outline-none"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
