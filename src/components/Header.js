import React, { useEffect, useState } from "react";

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
        <nav className="flex flex-wrap items-center justify-between my-5 px-5 lg:px-20 ">
          <div>
            <h1 className="text-[24px] font-semibold">
              57<span className="text-green-500">D</span>entCare
            </h1>
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
              className="block md:inline-block  text-[20px] font-semibold px-3 py-3  text-center"
            >
              Home
            </a>
            <a
              href="#"
              className="block md:inline-block   text-[20px] font-semibold px-3 py-3 text-center"
            >
              Services
            </a>
            <a
              href="#"
              className="block md:inline-block   px-3 py-3 text-[20px] font-semibold text-center"
            >
              About Us
            </a>
            <a
              href="#"
              className="block md:inline-block   px-3 py-3 text-[20px] font-semibold  text-center "
            >
              Way Choose Us
            </a>
            <a
              href="#"
              className="block md:inline-block   px-3 py-3 text-[20px] font-semibold  text-center "
            >
              Testimonials
            </a>
          </div>
          <a
            href="#"
            className="toggle hidden md:flex w-full md:w-auto px-4 py-2 sm:text-center   text-center border-green-500   font-semibold  border rounded-full "
          >
            Contact Us <i class="fa-solid fa-arrow-down mx-2 my-2"></i>
          </a>
        </nav>
      </header>
    </>
  );
}

export default Header;
