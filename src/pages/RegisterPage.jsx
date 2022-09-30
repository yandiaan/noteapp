import React, { useContext } from "react";
import { Link } from "react-router-dom";
import InputAuth from "../components/InputAuth";
import { register } from "../utils/network-data";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";

import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdGTranslate,
} from "react-icons/md";

import ThemeContext from "../context/ThemeContext";
import LocaleContext from "../context/LocaleContext";

const RegisterPage = () => {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPassword, onConfirmPasswordChange] = useInput("");
  const navigate = useNavigate("");

  const { theme, toggleThemeContext } = useContext(ThemeContext);
  const { locale, toggleLocaleContext } = useContext(LocaleContext);

  const dataInput = [
    {
      key: "name",
      type: "name",
      placeholder: {
        en: "enter your full name",
        id: "masukan nama lengkap anda",
      },
      handler: onNameChange,
    },
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
    {
      key: "confirmpassword",
      type: "password",
      placeholder: {
        en: "confirm your password",
        id: "konfirmasi kata sandi anda",
      },
      handler: onConfirmPasswordChange,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(password + " and " + confirmPassword);
    if (confirmPassword === false) {
      alert(
        locale === "en"
          ? "Password and confirm password must be same!"
          : "Password dan konfirmasi password harus sama!"
      );
    } else {
      const { error } = await register({ name, email, password });
      if (!error) {
        navigate("/");
        alert(
          locale === "en" ? "Register successful" : "Berhasil membuat akun"
        );
      } else {
        alert(locale === "en" ? "Register failed" : "Gagal membuat akun");
      }
    }
  };

  return (
    <div className="flex">
      <div className="w-full h-full flex flex-col justify-center items-center py-12">
        <div className="bg-neutral dark:bg-tertiary w-1/2 shadow-lg rounded-2xl text-center py-12 px-16">
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
            {locale === "en" ? "Register an Account!!" : "Buat akun baru!!"}
          </h1>
          <h2 className="mt-2">
            {locale === "en" ? "have an account?" : "sudah punya akun?"}
            <Link to="/" className="text-secondary underline ml-2">
              {locale === "en" ? "Login Now" : "Masuk Sekarang"}
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
              {locale === "en" ? "Register" : "Daftar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
