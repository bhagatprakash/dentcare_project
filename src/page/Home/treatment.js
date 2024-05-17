import React from "react";
import card from "../../Assect/card-7-.png";
import card1 from "../../Assect/card-2.png";
import card2 from "../../Assect/card-3.png";
import card3 from "../../Assect/card-4.png";
import card4 from "../../Assect/card-6.png";
import card5 from "../../Assect/banner_img.png";

function Treatment() {
  return (
    <>
      <div className="text-center  mx-auto my-10">
        <h1 className=" text-xl text-center py-2 text-green-300  font-semibold">
          Satisfy Solution
        </h1>
        <h1 className="text-4xl text-center  font-semibold ">
          The Best Dental Treatment
        </h1>
      </div>

      <div className="max-w-[1320]  grid lg:grid-cols-3  md:grid-cols-2  p-20 gap-5">
        {/* card-1  */}
        <a
          href="#"
          className="flex flex-col items-center sm:justify-between bg-pink-100 border  bg-cover border-gray-200 rounded-lg shadow md:flex-row p-5 md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col  justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Teeth Whitening
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              consmetic tretment to enhance the whiteness of teeth 2021 so far,
              in reverse chronological order.
            </p>
            <button className="btn font-semibold bg-white h-[50px] w-[150px]  rounded">
              Read More
            </button>
          </div>
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={card}
            alt=""
          />
        </a>
        {/* card-2  */}
        <a
          href="#"
          className="flex flex-col items-center bg-orange-100 border border-gray-200 p-5 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col  justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Dental implant
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              consmetic tretment to enhance the whiteness of teeth 2021 so far,
              in reverse chronological order.
            </p>
            <button className="btn font-semibold bg-white h-[50px] w-[150px]  rounded">
              Read More
            </button>
          </div>
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={card1}
            alt=""
          />
        </a>
        {/* card-3  */}
        <a
          href="#"
          className="flex flex-col items-center bg-blue-100 border border-gray-200 rounded-lg p-5 shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col justify-between  p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Teeth Filling
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              consmetic tretment to enhance the whiteness of teeth 2021 so far,
              in reverse chronological order.
            </p>
            <button className="btn font-semibold bg-white h-[50px] w-[150px]  rounded">
              Read More
            </button>
          </div>
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={card2}
            alt=""
          />
        </a>
        {/* card-4  */}
        <a
          href="#"
          className="flex flex-col items-center bg-blue-100 border border-gray-200 rounded-lg p-5 shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col justify-between  p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Periodontal Care
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              consmetic tretment to enhance the whiteness of teeth 2021 so far,
              in reverse chronological order.
            </p>
            <button className="btn font-semibold bg-white h-[50px] w-[150px]  rounded">
              Read More
            </button>
          </div>
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={card3}
            alt=""
          />
        </a>
        {/* card-5  */}
        <a
          href="#"
          className="flex flex-col items-center bg-pink-100 border border-gray-200 p-5 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col justify-between  p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Crown and Bridges
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              consmetic tretment to enhance the whiteness of teeth 2021 so far,
              in reverse chronological order.
            </p>
            <button className="btn font-semibold bg-white h-[50px] w-[150px]  rounded">
              Read More
            </button>
          </div>
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={card4}
            alt=""
          />
        </a>
        {/* card-6  */}
        <a
          href="#"
          className="flex flex-col items-center bg-orange-100   border p-5 border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Orl Surgery
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              consmetic tretment to enhance the whiteness of teeth 2021 so far,
              in reverse chronological order.
            </p>
            <button className="btn font-semibold bg-white h-[50px] w-[150px]  rounded">
              Read More
            </button>
          </div>
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={card5}
            alt=""
          />
        </a>
      </div>
    </>
  );
}

export default Treatment;
