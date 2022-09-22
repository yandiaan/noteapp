import React, { useState } from "react";
import InputAuth from "../components/InputAuth";
import { getUserLogged, login, putAccessToken } from "../utils/network-data";

const LoginPage = ({ auth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dataInput = [
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
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, data } = await login({ email, password });
    const { user } = await getUserLogged();
    if (!error) {
      putAccessToken(data.accessToken);
      auth(user);
      alert("Login successful");
    } else {
      alert("Login failed");
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

export default LoginPage;
