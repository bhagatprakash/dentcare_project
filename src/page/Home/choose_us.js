import React from "react";
import choseImge from "../../Assets/way chose us.png";

function ChooseUs() {
  return (
    <>
      <div className="max-w-[1320px] md:py-[80] py-10 p-10 flex items-center mx-auto md:flex-row flex-col">
        <div className="basis-[49%] px-3">
          <p className="text-xl text-green-500 font-semibold">Why Choose Us</p>
          <h1 className="text-4xl my-3 font-semibold">Comprehensive</h1>
          <h1 className="text-4xl  font-semibold ">Dental Services</h1>

          <p className="text-lg   my-9 ">
            <i className="fa-solid fa-circle-check mx-2 text-green-500 "></i>
            <span className=" text-2xl font-semibold">
              Experienced Professionals :-
            </span>
            "To succeed in your mission, you must have single-minded devotion to
            your goal."
          </p>

          <p className="text-lg my-5">
            <i className="fa-solid fa-circle-check mx-2 text-green-500 "></i>
            <span className=" text-2xl font-semibold">
              State-of-the-Art Techanology :-
            </span>
            "To succeed in your mission, you must have single-minded devotion to
            your goal."
          </p>

          <p className="text-lg my-5 ">
            <i className="fa-solid fa-circle-check mx-2 text-green-500 "></i>
            <span className=" text-2xl font-semibold">
              Compassionate Care :-
            </span>
            "To succeed in your mission, you must have single-minded devotion to
            your goal."
          </p>

          <p className="text-lg my-5 ">
            <i className="fa-solid fa-circle-check mx-2 text-green-500 "></i>
            <span className=" text-2xl font-semibold">Patient Eduction:-</span>
            "To succeed in your mission, you must have single-minded devotion to
            your goal."
          </p>

          <p className="text-lg my-3">
            <i className="fa-solid fa-circle-check mx-2 text-green-500 "></i>
            <span className=" text-2xl font-semibold">Convenient Hours :-</span>
            "To succeed in your mission, you must have single-minded devotion to
            your goal."
          </p>
        </div>
        <div className="basis-[49%] ">
          <img
            src={choseImge}
            alt="about ima"
            className="w-full  rounded-bl-[50px]  rounded-tr-[50px]"
          />
        </div>
      </div>
    </>
  );
}

export default ChooseUs;
