import React from "react";
import Banner from "./banner";
import { cardData } from "../../Assets/cardData";

function Card() {
  return (
    <>
      <Banner />
      <div className="container mx-auto relative">
        <div className="bg-accent/20    lg:left-0 lg:right-0 lg:p-0  ">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 px-12 relative top-[-70px] max-[600px]:top-0">
            {/* <!-- card 1 --> */}
            <div className="max-w-sm p-6 my-19 bg-white rounded-lg  shadow-xl">
              <img
                src={cardData[0].cardImag}
                alt=""
                className="h-[100px] w-[100px] "
              />
              <a href="#">
                <h5 className="my-5 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {cardData[0].title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-xl text-gray-500 dark:text-gray-400">
                {cardData[0].content}
              </p>
            </div>
            {/* card-2  */}
            <div className="max-w-sm p-6 my-19 bg-white rounded-lg shadow-xl">
              <img
                src={cardData[1].cardImag}
                alt=""
                className="h-[100px] w-[100px]"
              />
              <a href="#">
                <h5 className="my-5 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {cardData[1].title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-xl text-gray-500 dark:text-gray-400">
                {cardData[1].content}
              </p>
            </div>
            {/* card-3  */}
            <div className="max-w-sm p-6 my-19 bg-white rounded-lg shadow-xl">
              <img
                src={cardData[2].cardImag}
                alt=""
                className="h-[100px] w-[100px]"
              />
              <a href="#">
                <h5 className="my-5 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {cardData[2].title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-xl text-gray-500 dark:text-gray-400">
                {cardData[2].content}
              </p>
            </div>
            {/* card-4  */}
            <div className="max-w-sm p-6 my-19 bg-white rounded-lg shadow-xl">
              <img
                src={cardData[3].cardImag}
                alt=""
                className="h-[100px] w-[100px]"
              />
              <a href="#">
                <h5 className="my-5 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {cardData[3].title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-xl text-gray-500 dark:text-gray-400">
                {cardData[3].content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
