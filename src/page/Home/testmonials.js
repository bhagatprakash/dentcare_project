// import React from "react";
// import Image from "../../Assect/hospital-1.jpg";
// import Image1 from "../../Assect/hospital-2.jpg";
// import Image2 from "../../Assect/hospital-3.jpg";

// function Testmonials() {
//   return (
//     <>
//       {/* <div className=" container  max-w-[1100]  gap-5 py-10 lg:px-[30px] "> */}

//       <div
//         id="controls-carousel"
//         className="relative w-full"
//         data-carousel="static"
//       >
//         {/* <!-- Carousel wrapper --> */}
//         <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//           {/* <!-- Item 1 --> */}
//           <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img
//               src={Image}
//               className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//               alt="..."
//             />
//           </div>
//           {/* <!-- Item 2 --> */}
//           <div
//             className="hidden duration-700 ease-in-out"
//             data-carousel-item="active"
//           >
//             <img
//               src={Image1}
//               className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//               alt="..."
//             />
//           </div>
//           {/* <!-- Item 3 --> */}
//           <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img
//               src={Image2}
//               className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//               alt="..."
//             />
//           </div>
//         </div>
//         {/* <!-- Slider controls --> */}
//         <button
//           type="button"
//           className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//           data-carousel-prev
//         >
//           <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg
//               className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 6 10"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M5 1 1 5l4 4"
//               />
//             </svg>
//             <span className="sr-only">Previous</span>
//           </span>
//         </button>
//         <button
//           type="button"
//           className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//           data-carousel-next
//         >
//           <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg
//               className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 6 10"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="m1 9 4-4-4-4"
//               />
//             </svg>
//             <span className="sr-only">Next</span>
//           </span>
//         </button>
//       </div>
//       {/* </div> */}
//     </>
//   );
// }

// export default Testmonials;

import React, { useState } from "react";
import Image from "../../Assect/hospital-1.jpg";
import Image1 from "../../Assect/hospital-2.jpg";
import Image2 from "../../Assect/hospital-3.jpg";

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [Image, Image1, Image2];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      id="controls-carousel"
      className="relative w-full"
      data-carousel="static"
    >
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item={index === activeIndex}
          >
            <img
              src={image}
              className="block w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}

export default Testimonials;
