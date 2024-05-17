import React from "react";
// import Image from "../../Assect/banner_img.png";

function Banner() {
  return (
    <div className="container  max-w-[1100] px-16 mx-auto my-12 flex flex-col lg:flex-row ">
      <div className="lg:w-[60%]">
        <h1 className="text-3xl lg:text-6xl font-semibold  my-10">
          Dental Excellence Starts Here: Your Guide to a Brighter, Healthier
          Smile
        </h1>
        <button className="btn mt-4 text-xl  h-[50px] w-[180px] rounded-[18px] font-semibold  bg-green-200 lg:mt-6">
          Booking Now
        </button>
      </div>
      <div className="  lg:mt-0 my-6  lg:w-[40%]  md:w-[20%]">
        <div className="h-[500px] w-[500px] sm:w-[400px] sm:text-center bg-orange-200  rounded-[28px] bg-center bg-my-img bg-cover"></div>
      </div>
    </div>
  );
}

export default Banner;
