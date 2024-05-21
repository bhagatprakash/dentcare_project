import React from "react";
import card1 from "../../Assets/card-2.png";
import card2 from "../../Assets/card-3.png";
import card3 from "../../Assets/card-4.png";
import card4 from "../../Assets/card-5.png";
import card5 from "../../Assets/card-6.png";
import { Link } from "react-router-dom";

function Treatment() {
  return (
    <>
      <div className="text-center container   mx-auto ">
        <h1 className=" text-xl text-center py-2 text-green-500  font-semibold">
          Satisfy Solution
        </h1>
        <h1 className="text-4xl text-center  font-semibold ">
          The Best Dental Treatment
        </h1>

        <div className=" grid xl:grid-cols-3 lg:grid-cols-2  md:grid-cols-2 max-[680px]:px-3   px-20 py-10 gap-5">
          {/* card-1  */}

          <Link
            href="#"
            className="flex flex-row items-center sm:justify-between bg-pink-100 border  bg-cover border-gray-200 rounded-lg shadow max-[1100px]:flex-col p-5 md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="flex flex-col  justify-between leading-normal">
              <h5 className="mb-2 text-2xl font-bold text-left tracking-tight text-gray-900 dark:text-white">
                Teeth Whitening
              </h5>
              <p className="mb-3 font-normal text-left text-gray-700 dark:text-gray-400">
                consmetic tretment to enhance the whiteness of teeth in
                chronological order.
              </p>
              <button className="btn font-semibold bg-white h-[50px] w-[150px]  rounded-full">
                Read More
              </button>
            </div>
            <img
              className=" relative  w-full rounded-t-lg h-96 md:h-auto md:w-[9rem] md:rounded-none md:rounded-s-lg"
              src={card5}
              alt=""
            />
          </Link>
          {/* card-2  */}
          <Link
            href="#"
            className="flex flex-row max-[1100px]:flex-col items-center bg-orange-100 border border-gray-200 p-5 rounded-lg shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="flex flex-col  justify-between  leading-normal">
              <h5 className="mb-2 text-2xl text-left font-bold tracking-tight text-gray-900 dark:text-white">
                Dental implant
              </h5>
              <p className="mb-3 font-normal text-left text-gray-700 dark:text-gray-400">
                consmetic tretment to enhance the whiteness of teeth 2021 so
                far, in reverse chronological order.
              </p>
              <button className="btn font-semibold bg-white h-[50px] w-[150px]   rounded-full">
                Read More
              </button>
            </div>
            <img
              className="w-full rounded-t-lg h-96 md:h-auto md:w-[9rem] relative md:rounded-none md:rounded-s-lg"
              src={card1}
              alt=""
            />
          </Link>
          {/* card-3  */}
          <Link
            href="#"
            className="flex flex-row max-[1100px]:flex-col text-left items-center bg-blue-100 border border-gray-200 rounded-lg p-5 shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="flex flex-col justify-between  p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Teeth Filling
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                consmetic tretment to enhance the whiteness of teeth 2021 so
                far, in reverse chronological order.
              </p>
              <button className="btn font-semibold bg-white h-[50px] w-[150px]   rounded-full">
                Read More
              </button>
            </div>
            <img
              className=" w-full rounded-t-lg h-96 md:h-auto md:w-[9rem] md:rounded-none md:rounded-s-lg"
              src={card2}
              alt=""
            />
          </Link>
          {/* card-4  */}
          <Link
            href="#"
            className="flex flex-row max-[1100px]:flex-col text-left items-center bg-blue-100 border border-gray-200 rounded-lg p-5 shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="flex flex-col justify-between  p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Periodontal Care
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                consmetic tretment to enhance the whiteness of teeth 2021 so
                far, in reverse chronological order.
              </p>
              <button className="btn font-semibold bg-white h-[50px] w-[150px]   rounded-full">
                Read More
              </button>
            </div>
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-[9rem] md:rounded-none md:rounded-s-lg"
              src={card3}
              alt=""
            />
          </Link>
          {/* card-5  */}
          <Link
            href="#"
            className="flex flex-row max-[1100px]:flex-col text-left items-center bg-pink-100 border border-gray-200 p-5 rounded-lg shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="flex flex-col justify-between  p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Crown and Bridges
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                consmetic tretment to enhance the whiteness of teeth 2021 so
                far, in reverse chronological order.
              </p>
              <button className="btn font-semibold bg-white h-[50px] w-[150px]   rounded-full">
                Read More
              </button>
            </div>
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-[9rem] md:rounded-none md:rounded-s-lg"
              src={card4}
              alt=""
            />
          </Link>
          {/* card-6  */}
          <Link
            href="#"
            className="flex flex-row max-[1100px]:flex-col text-left items-center bg-orange-100   border p-5 border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Orl Surgery
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                consmetic tretment to enhance the whiteness of teeth 2021 so
                far, in reverse chronological order.
              </p>
              <button className="btn font-semibold bg-white h-[50px] w-[150px]   rounded-full">
                Read More
              </button>
            </div>
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-[9rem] md:rounded-none md:rounded-s-lg"
              src={card5}
              alt=""
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Treatment;
