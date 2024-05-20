import React from "react";

function Banner() {
  return (
    <div className="container  max-w-[1100] px-8 mx-auto my-12 flex flex-col lg:flex-row ">
      <div className="lg:w-[60%]">
        <h1 className="text-[54px] lg:text-6xl font-semibold  my-10">
          Dental Excellence Starts Here: Your Guide to a Brighter, Healthier
          Smile
        </h1>
        <button className="btn mt-4 h-[50px] w-[180px]   rounded-full font-semibold  bg-green-500 lg:mt-6">
          Booking Now <i className="fa-solid fa-arrow-trend-down"></i>
        </button>
      </div>

      <div className="h-[500px] w-[450px] max-[600px]:w-full sm:text-center   rounded-[28px] bg-center bg-my-img bg-cover"></div>
    </div>
  );
}

export default Banner;
