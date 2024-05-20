import React from "react";
import aboutImg from "../../Assets/about us.png";

function AboutUs() {
  return (
    <>
      <div className="max-w-[1320px] md:py-[80]  items-center py-10 p-10 flex gap-8  mx-auto md:flex-row flex-col">
        <div className="basis-[49%] ">
          <img
            src={aboutImg}
            alt="about ima"
            className="w-full  rounded-bl-[50px] rounded-tr-[50px] "
          />
        </div>
        <div className="basis-[49%] px-5">
          <p className="text-xl text-green-500 font-semibold">About Us</p>
          <h1 className="text-4xl  font-semibold">Patient-Centered Care</h1>
          <p className="text-xl my-10">
            "To succeed in your mission, you must have single-minded devotion to
            your goal." In pic: A boy holds a mask bearing the image of former
            Indian president APJ Abdul Kalam and a sapling during his death
            anniversary.
          </p>
          <h1 className="text-2xl  font-semibold">Our Mission</h1>
          <p className="text-xl my-2">
            When you focus on problems, you'll have more problems.{" "}
          </p>

          <button className="btn font-semibold my-5 bg-green-500 h-[50px] w-[150px]  rounded-full">
            Learn More <i className="fa-solid fa-arrow-trend-down"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
