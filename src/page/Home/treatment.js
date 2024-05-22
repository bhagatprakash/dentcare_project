import React from "react";
import { Link } from "react-router-dom";
import { cardData } from "../../Assets/constant/treatment";

function Treatment() {
  return (
    <>
      <div className="text-center container mx-auto">
        <h1 className="text-xl text-center py-2 text-green-500 font-semibold">
          Satisfy Solution
        </h1>
        <h1 className="text-4xl text-center font-semibold">
          The Best Dental Treatment
        </h1>

        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 max-[680px]:px-3 px-20 py-10 gap-5">
          {cardData.map((item, index) => (
            <Link
              to="#"
              key={index}
              className="flex flex-row items-center sm:justify-between bg-pink-100 border bg-cover border-gray-200 rounded-lg shadow max-[1100px]:flex-col p-5 md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="flex flex-col justify-between leading-normal">
                <h5 className="mb-2 text-2xl font-bold text-left tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
                <p className="mb-3 font-normal text-left text-gray-700 dark:text-gray-400">
                  {item.content}
                </p>
                <button className="btn font-semibold bg-white h-[50px] w-[150px] rounded-full">
                  Read More
                </button>
              </div>
              <img
                className="relative w-full rounded-t-lg h-96 md:h-auto md:w-[9rem] md:rounded-none md:rounded-s-lg"
                src={item.cardImag}
                alt="cardImage"
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Treatment;
