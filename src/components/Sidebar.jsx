import React, { useContext } from "react";

import { Link } from "react-router-dom";
import NavButton from "./NavButton";

import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdGTranslate,
} from "react-icons/md";

import ThemeContext from "../context/ThemeContext";
import LocaleContext from "../context/LocaleContext";

const Sidebar = () => {
  const { theme, toggleThemeContext } = useContext(ThemeContext);

  const { locale, toggleLocaleContext } = useContext(LocaleContext);

  const datas = [
    {
      title: {
        en: "Home",
        id: "Beranda",
      },
      path: "/",
    },
    {
      title: {
        en: "Create a Note",
        id: "Buat Catatan Baru",
      },
      path: "notes/new",
    },
    {
      title: {
        en: "Archive",
        id: "Arsip",
      },
      path: "archive",
    },
    {
      title: {
        en: "Logout",
        id: "Keluar",
      },
      path: "#",
      handler() {
        alert(locale === "en" ? "Logout completed" : "Berhasil Keluar");
        localStorage.removeItem("accessToken");
        window.location.reload();
      },
    },
  ];

  return (
    <>
      <div className="flex flex-col w-1/4 items-center py-8 dark:text-white bg-tertiary text-black dark:bg-primary h-screen fixed drop-shadow-2xl">
        <Link
          to="/"
          className="cursor-pointer text-3xl font-semibold hover:text-tertiary hover:scale-110 transition-all mb-16"
        >
          Yan Notes
        </Link>
        <div className="flex mb-12 gap-12">
          <button onClick={toggleThemeContext} className="text-4xl">
            {theme === "light" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
          </button>
          <button
            onClick={toggleLocaleContext}
            className="text-2xl gap-1 flex items-center"
          >
            <MdGTranslate />
            {locale === "en" ? "en" : "id"}
          </button>
        </div>
        <ul className="text-center w-64">
          {datas.map((item, index) => {
            return (
              <li key={index} className="w-full">
                <NavButton
                  title={locale === "en" ? item.title.en : item.title.id}
                  path={item.path}
                  handler={item.handler}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
