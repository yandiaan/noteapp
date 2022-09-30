import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import InputAuth from "../components/InputAuth";
import { register } from "../utils/network-data";
import { useNavigate } from "react-router-dom";

import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import ThemeContext from "../context/ThemeContext";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate("");

  const { theme, toggleContext } = useContext(ThemeContext);

  const dataInput = [
    {
      key: "name",
      type: "name",
      placeholder: {
        en: "enter your full name",
        id: "masukan nama lengkap anda",
      },
      handler(e) {
        setName(e.target.value);
      },
    },
    {
      key: "email",
      type: "email",
      placeholder: {
        en: "enter your email address",
        id: "masukan alamat email anda",
      },
      handler(e) {
        setEmail(e.target.value);
      },
    },
    {
      key: "password",
      type: "password",
      placeholder: {
        en: "enter your password",
        id: "masukan kata sandi anda",
      },
      handler(e) {
        setPassword(e.target.value);
      },
    },
    {
      key: "confirmpassword",
      type: "password",
      placeholder: {
        en: "confirm your password",
        id: "konfirmasi kata sandi anda",
      },
      handler(e) {
        password === e.target.value
          ? setConfirmPassword(e.target.value)
          : setConfirmPassword(false);
      },
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(password + " and " + confirmPassword);
    if (confirmPassword === false) {
      alert("Password and confirm password must be same!");
    } else {
      const { error } = await register({ name, email, password });
      if (!error) {
        navigate("/");
        alert("Register successful");
      } else {
        alert("Register failed");
      }
    }
  };

  return (
    <div className="flex">
      <div className="w-full h-full flex flex-col justify-center items-center py-12">
        <div className="bg-neutral dark:bg-tertiary w-1/2 shadow-lg rounded-2xl text-center py-12 px-16">
          <div className="relative mb-12 gap-12">
            <button
              onClick={toggleContext}
              className="text-4xl absolute top-0 left-0"
            >
              {theme === "light" ? (
                <MdOutlineDarkMode />
              ) : (
                <MdOutlineLightMode />
              )}
            </button>
            <button className="absolute top-0 right-0">{theme}</button>
          </div>
          <h1 className="font-bold text-2xl">Register an Account!!</h1>
          <h2 className="mt-2">
            have an account?
            <Link to="/" className="text-secondary underline ml-2">
              Login Now
            </Link>
          </h2>

          <form onSubmit={handleSubmit}>
            {dataInput.map(({ key, type, placeholder, handler }) => {
              return (
                <InputAuth
                  key={key}
                  type={type}
                  placeholder={placeholder.en}
                  handler={handler}
                />
              );
            })}
            <button
              type="submit"
              className="bg-primary py-2 px-8 mt-12 rounded-xl hover:bg-secondary text-neutral"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
