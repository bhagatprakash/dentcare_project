import React, { useEffect, useState } from "react";
import { handleNenu } from "./script";

function Header() {
  useEffect(() => {
    document.getElementById("hamburger").onclick = function toggleMenu() {
      const navToggle = document.getElementsByClassName("toggle");
      for (let i = 0; i < navToggle.length; i++) {
        navToggle.item(i).classList.toggle("hidden");
      }
    };
  }, []);
  return (
    <>
      <header>
        <nav className="flex flex-wrap items-center justify-between  p-10 ">
          <div>
            <h1 className="text-3xl font-semibold">57DentCare</h1>
          </div>
          <div className="flex md:hidden">
            <button id="hamburger">
              <img
                className="toggle block"
                src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
                width="40"
                height="40"
              />
              <img
                className="toggle hidden"
                src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
                width="40"
                height="40"
              />
            </button>
          </div>
          <div className="toggle hidden w-full md:w-auto md:flex  row-gap-25 text-bold mt-5 md:mt-0  md:border-none">
            <a
              href="#"
              className="block md:inline-block  hover:text-blue-500  text-2xl font-semibold px-3 py-3  text-center"
            >
              Home
            </a>
            <a
              href="#"
              className="block md:inline-block  hover:text-blue-500 text-2xl font-semibold px-3 py-3 text-center"
            >
              Services
            </a>
            <a
              href="#"
              className="block md:inline-block  hover:text-blue-500 px-3 py-3 text-2xl font-semibold text-center"
            >
              About Us
            </a>
            <a
              href="#"
              className="block md:inline-block  hover:text-blue-500 px-3 py-3 text-2xl font-semibold  text-center "
            >
              Way Choose Us
            </a>
            <a
              href="#"
              className="block md:inline-block  hover:text-blue-500 px-3 py-3 text-2xl font-semibold  text-center "
            >
              Testimonials
            </a>
          </div>
          <a
            href="#"
            className="toggle hidden md:flex w-full md:w-auto px-4 py-2  sm:bg-green-300 text-center  text-2xl font-semibold  outline outline-2 outline-offset-2  rounded-3xl hover:bg-blue-500  md:rounded"
          >
            Contact Us
          </a>
        </nav>
      </header>
    </>
  );
}

export default Header;
