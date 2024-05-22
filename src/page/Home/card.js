import React from "react";
import Banner from "./banner";
import { cardData } from "../../Assets/constant/cardData";

function Card() {
  return (
    <>
      <Banner />
      <div className="container mx-auto relative">
        <div className="bg-accent/20 lg:left-0 lg:right-0 lg:p-0">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 px-12 relative top-[-70px] max-[600px]:top-0">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="max-w-sm p-6 my-19 bg-white rounded-lg shadow-xl"
              >
                <img
                  src={card.cardImag}
                  alt={card.title}
                  className="h-[100px] w-[100px]"
                />
                <a href="#">
                  <h5 className="my-5 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {card.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-xl text-gray-500 dark:text-gray-400">
                  {card.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
