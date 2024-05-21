import React from "react";
import consimage from "../../Assets/consulation.png";

function Consolation() {
  return (
    <>
      <div className="max-w-[1320px]    py-10 p-10 flex flex-col md:flex-row mx-auto my-4">
        <div className="basis-[50%] pb-5  w-full bg-gray-100 shadow-2xl rounded-l-xl">
          <img src={consimage} alt="about image" className="w-full" />
        </div>
        <div className="basis-[50%] shadow-2xl bg-white rounded-r-xl">
          <div className="mx-auto text-center my-20">
            <h1 className="text-4xl font-semibold">Free Consultation</h1>
          </div>
          <div>
            <form action="#">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10 px-10">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-gray-400 py-1 h-[65px] px-2 rounded-[20px] text-center"
                />
                <input
                  type="text"
                  placeholder="I am interested in"
                  className="border border-gray-400 py-1 px-2 h-[65px] text-center rounded-[20px]"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10 px-10">
                <input
                  type="text"
                  placeholder="Email"
                  className="border border-gray-400 py-1 h-[65px] px-2 rounded-[20px] text-center"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border border-gray-400 py-1 px-2 h-[65px] text-center rounded-[20px]"
                />
              </div>

              <div className="text-center md:mb-6 ">
                <button className="btn mt-4  h-[65px] w-[81%]  md:w-[80%] sm:w-[252px]  mb-10 rounded-full font-semibold bg-green-500 lg:mt-6">
                  Get Free Consulation
                  <i class="fa-solid fa-arrow-down mx-3"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Consolation;
