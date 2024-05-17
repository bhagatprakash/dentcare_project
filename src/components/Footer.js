import React from "react";

function Footer() {
  return (
    <>
      <div className="max-w-[1320px] md:py-20 py-10 flex flex-col mx-auto sm:flex-row">
        {/* <h1 className="text-3xl my-10">57Dentcare</h1> */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4  gap-5 my-10 px-5">
          <div>
            <h1 className="text-2xl font-semibold my-5">Company</h1>
            <p className="text-red-500 text-xl">Home</p>
            <p className="text-sm">Services</p>
            <p className="text-xl">About Us</p>
            <p className="text-xl">Why Choose Us</p>
            <p className="text-xl">Testimonials</p>
            <p className="text-xl">Contact Us</p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold my-5">Pages</h1>
            <p className="text-xl">404</p>
            <p className="text-xl">Licensing</p>
            <p className="text-xl">Instructions</p>
            <p className="text-xl">Style Guide</p>
            <p className="text-xl">ChangeLog</p>
            <p className="text-xl">More Templates!</p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold my-5">Address</h1>
            <p className="text-xl">
              123 Dental Avenue City Ville State 12345 United States
            </p>
            <p className="text-xl text-blue-500 cursor-pointer">View Maps</p>
            <h1 className="text-2xl font-semibold my-3">Inquiries</h1>
            <p className="text-xl">(123) 456-7800</p>
            <p className="text-xl">info@57dentcare.com</p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold my-5">Newsletter</h1>
            <p className="text-xl">Stay updated with our latest news</p>
            <input
              type="text"
              placeholder="Your Email"
              className="border border-gray-600 py-2 h-[45px] w-full sm:w-[300px] px-3 rounded-[20px] font-semibold mt-2"
            />
            <h1 className="text-2xl font-semibold my-3">Follow Us</h1>
            <div className="flex space-x-3">
              <i className="text-3xl fa-brands fa-instagram"></i>
              <i className="text-3xl fa-brands fa-whatsapp"></i>
              <i className="text-3xl fa-brands fa-facebook"></i>
              <i className="text-3xl fa-brands fa-twitter"></i>
              <i className="text-3xl fa-brands fa-youtube"></i>
              <i className="text-3xl fa-brands fa-tiktok"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
