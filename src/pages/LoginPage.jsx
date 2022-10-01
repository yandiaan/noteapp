import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import InputAuth from "../components/InputAuth";
import { getUserLogged, login, putAccessToken } from "../utils/network-data";
import useInput from "../hooks/useInput";

import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdGTranslate,
} from "react-icons/md";

import ThemeContext from "../context/ThemeContext";
import LocaleContext from "../context/LocaleContext";

const LoginPage = ({ auth }) => {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const { theme, toggleThemeContext } = useContext(ThemeContext);
  const { locale, toggleLocaleContext } = useContext(LocaleContext);

  const dataInput = [
    {
      key: "email",
      type: "email",
      placeholder: {
        en: "enter your email address",
        id: "masukan alamat email anda",
      },
      handler: onEmailChange,
    },
    {
      key: "password",
      type: "password",
      placeholder: {
        en: "enter your password",
        id: "masukan kata sandi anda",
      },
      handler: onPasswordChange,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, data } = await login({ email, password });
    const { user } = await getUserLogged();
    if (!error) {
      putAccessToken(data.accessToken);
      auth(user);
      alert(locale === "en" ? "Login successful" : "Login Berhasil");
    } else {
      alert(locale === "en" ? "Login failed" : "Login gagal");
    }
  };

  return (
    <div className="flex">
      <div className="w-full h-screen flex flex-col justify-center items-center py-12">
        <div className="bg-neutral dark:bg-tertiary h-full w-1/2 shadow-lg rounded-2xl text-center py-12 px-16">
          <div className="relative mb-12 gap-12">
            <button
              onClick={toggleThemeContext}
              className="text-4xl absolute top-0 left-0"
            >
              {theme === "light" ? (
                <MdOutlineDarkMode />
              ) : (
                <MdOutlineLightMode />
              )}
            </button>
            <button
              onClick={toggleLocaleContext}
              className="text-2xl gap-1 flex items-center absolute top-0 right-0"
            >
              <MdGTranslate />
              {locale === "en" ? "en" : "id"}
            </button>
          </div>
          <h1 className="font-bold text-2xl">
            {locale === "en"
              ? "Hey Dude! U Should Login!!"
              : "Hey, Kamu harus login dulu!!"}
          </h1>
          <h2 className="mt-2">
            {locale === "en" ? "don't have an account?" : "Tidak punya akun?"}
            <Link to="/register" className="text-secondary underline ml-2">
              {locale === "en" ? "Register Now" : "Daftar Sekarang"}
            </Link>
          </h2>
          <form onSubmit={handleSubmit}>
            {dataInput.map(({ key, type, placeholder, handler }) => {
              return (
                <InputAuth
                  key={key}
                  type={type}
                  placeholder={
                    locale === "en" ? placeholder.en : placeholder.id
                  }
                  handler={handler}
                />
              );
            })}
            <button
              type="submit"
              className="bg-primary py-2 px-8 mt-12 rounded-xl hover:bg-secondary text-neutral"
            >
              {locale === "en" ? "Login" : "Masuk"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  auth: PropTypes.func,
};

export default LoginPage;
