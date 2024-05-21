import React, { useState } from "react";
import { cardData } from "../../Assets/carosalData";

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  return (
    <>
      <div
        id="controls-carousel"
        className="relative w-full bg-carosalImage  h-[620px]  rounded-lg "
      >
        {/* Carousel wrapper */}
        <div className="">
          {cardData.map((item, index) => (
            <div
              key={index}
              className={` item absolute inset-0 pt-6 transition-opacity duration-700 ease-in-out ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
              data-carousel-item={index === activeIndex}
            >
              <div className="item  text-center mx-auto py-10 w-full max-w-[44rem] px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl font-semibold">Testimonials</h2>
                <h1 className="text-3xl  font-semibold">{item.Header}</h1>
                <img
                  src={item.carosalImage}
                  className=" !h-[100px] !w-[100px] mx-auto my-6  rounded-[50%]"
                  alt="Rounded icon"
                />

                <h1 className="text-3xl my-5 mx-auto font-semibold">
                  {item.content}
                </h1>

                <div className="mx-auto text-center my-5">
                  <h1 className="text-2xl font-semibold">{item.titleName}</h1>
                  <h1 className="text-2xl">{item.job}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-red">
            <svg
              className="w-4 h-4 text-red-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-red">
            <svg
              className="w-4 h-4 text-red-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      {/* new  */}
    </>
  );
}

export default Testimonials;
