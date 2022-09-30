import React, { useContext } from "react";

import { Link } from "react-router-dom";
import NavButton from "./NavButton";

import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import ThemeContext from "../context/ThemeContext";

const Sidebar = () => {
  const { theme, toggleContext } = useContext(ThemeContext);
  const datas = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Create a Note",
      path: "notes/new",
    },
    {
      title: "Archive",
      path: "archive",
    },
    {
      title: "Logout",
      path: "#",
      handler() {
        alert("Logout completed");
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
          <button onClick={toggleContext} className="text-4xl">
            {theme === "light" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
          </button>
          <button>{theme}</button>
        </div>
        <ul className="text-center w-64">
          {datas.map((item, index) => {
            return (
              <li key={index} className="w-full">
                <NavButton
                  title={item.title}
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
