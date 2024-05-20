import React, { useState } from "react";
import img from "../../Assets/hospital-1.jpg";
import img1 from "../../Assets/hospital-2.jpg";
import img2 from "../../Assets/hospital-3.jpg";

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [img, img1, img2];

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <div id="controls-carousel" className="relative w-full">
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {images.map((image, index) => (
            <div
              key={index}
              className={` item absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
              data-carousel-item={index === activeIndex}
            >
              <div className="item  text-center w-[800px] px-10">
                <h2 className="text-xl font-semibold">Testimonials</h2>
                <h1 className="text-3xl font-semibold">
                  What People Say About Us
                </h1>
                <img
                  src={image}
                  className=" !h-[100px] !w-[100px] mx-auto  rounded-[50%]"
                  alt="Rounded Image"
                />

                <h1 className="text-3xl font-semibold">
                  The eleventh president of India and one of the most loved
                  president by the children in our country is APJ Abdul Kalam.
                </h1>

                <div className="mx-auto text-center my-10">
                  <h1 className="text-2xl font-semibold">Dipak pal</h1>
                  <h1 className="text-2xl">Detroit, Michigan</h1>
                </div>
              </div>

              {/* <img
                src={image}
                className="block w-full h-full object-cover"
                alt={`Slide ${index + 1}`}
              />

              <h1 className="text-3xl font-semibold">
                The eleventh president of India and one of the most loved
                president by the children in our country is APJ Abdul Kalam.
              </h1>

              <div className="mx-auto text-center my-10">
                <h1 className="text-2xl font-semibold">Dipak pal</h1>
                <h1 className="text-2xl">Detroit, Michigan</h1>
              </div> */}
            </div>
          ))}
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
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
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
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
