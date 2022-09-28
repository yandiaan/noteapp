import React, { useState } from "react";
import InputAuth from "../components/InputAuth";
import { register } from "../utils/network-data";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate("");

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
      <div className="w-full h-screen flex flex-col justify-center items-center py-12">
        <div className="bg-neutral h-full w-1/2 shadow-lg rounded-2xl text-center py-12 px-16">
          <h1 className="font-bold text-2xl">Hey Dude! U Should Login!!</h1>
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
