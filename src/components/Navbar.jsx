import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full fixed bg-white shadow p-2 z-50 ">
      {/* Logo */}

      {/*Menu*/}
      <div className="flex flex-col md:flex-row  px-12 py-4 flex items-center justify-between">
        <div>
          <a href="#" className="text-2xl font-bold text-[#1090CB]">
            LOGO
          </a>
        </div>
        {/* <div className="text-[#1090CB] relative">Home */}
        <div>
          <ul className="flex flex-col md:flex-row items-center gap-12" >
            <li className="text-[#1090CB]">Home<span className="absolute -top-0.2 right-150 font-bold">•</span></li>
            <li>About us</li>
            <li>Services</li>
            <li>Blog</li>
            <button className="bg-[#1090CB] text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
              Contact us
            </button>
          </ul>
        </div>
      </div>

      {/*button*/}
    </nav>
  );
};

export default Navbar;
