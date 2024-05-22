import React from "react";
import choseImge from "../../Assets/images/way chose us.png";
import { cardData } from "../../Assets/constant/choose";

function ChooseUs() {
  return (
    <>
      <div className="max-w-[1320px] md:py-[80] py-10 p-10 flex items-center mx-auto md:flex-row flex-col">
        <div className="basis-[49%] px-3">
          <p className="text-xl text-green-500 font-semibold">Why Choose Us</p>
          <h1 className="text-4xl my-3 font-semibold">Comprehensive</h1>
          <h1 className="text-4xl  font-semibold ">Dental Services</h1>

          {cardData.map((item, index) => (
            <p className="text-lg my-9" key={index}>
              <i className="fa-solid fa-circle-check mx-2 text-green-500"></i>
              <span className="text-2xl font-semibold">{item.title}</span>"
              {item.content}"
            </p>
          ))}
        </div>
        <div className="basis-[49%]">
          <img
            src={choseImge}
            alt="about image"
            className="w-full rounded-bl-[50px] rounded-tr-[50px]"
          />
        </div>
      </div>
    </>
  );
}

export default ChooseUs;
