"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const navigation = ["Journey", "Skills", "Certification"];
  return (
    <div className="fixed w-full md:w-1/3 left-1/2 -translate-x-1/2 items-center justify-center z-1000 ">
      <div
        className={`bg-[#1F1F1F] w-full flex-col p-2 rounded-b-2xl ${openNav ? "md:rounded-2xl" : "md:rounded-full"}`}
      >
        <div className="w-full flex justify-between items-center px-5 ">
          <div>
            <Link href="mailto:peaceaboluwade@gmail.com" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </Link>
          </div>
          <div className="px-3 py-1 w-fit  rounded">
            <Link href="#Hero" className="font-bold text-3xl text-white">
              Peace
            </Link>
          </div>

          <button
            className="flex flex-col items-center w-5 gap-1 text-white cursor-pointer transition-all duration-300 ease-in-out"
            onClick={() => setOpenNav(!openNav)}
          >
            <div
              className={`border ${openNav ? "w-2" : "w-full"} transition-all duration-200 ease-in-out`}
            ></div>
            <div className="border w-3"></div>
            <div
              className={`border ${openNav ? "w-full" : "w-2"} transition-all duration-200 ease-in-out`}
            ></div>
          </button>
        </div>
        {/* {openNav && ( */}
        <ul
          className={`bg-[#F8F7F3] w-full  rounded-2xl  ${openNav ? "h-auto p-2" : "h-0 p-0"} transition-all duration-200 ease-in-out overflow-hidden`}
        >
          {navigation.map((item, index) => (
            <li
              className=" text-center flex flex-col gap-10 border-b border-[#1f1f1f]/10 last:border-0 "
              key={index}
              onClick={() => setOpenNav(!openNav)}
            >
              <Link
                href={`#${item}`}
                className="w-full block  p-2 hover:bg-[#1f1f1f] rounded-2xl hover:text-white hover:font-bold cursor-pointer"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        {/* )} */}
      </div>
    </div>
  );
};

export default Navbar;
