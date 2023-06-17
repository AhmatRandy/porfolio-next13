import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoArrowDown } from "react-icons/go";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Image from "next/image";

export default function Sidebar() {
  const name = "<AhmatRandy />";
  return (
    <div>
      <div className="flex justify-center">
        <Image
          src="/photo.png"
          alt="logo"
          width={100}
          height={100}
          className="object-contain rounded-full "
        />
      </div>
      <h3 className=" mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 py-1 text-base my-3 rounded-full hover:">
        <span className=" text-md">{name}</span>
      </h3>
      <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 py-1 text-base my-3 rounded-full ">
        Front end Engineer
      </p>

      <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 py-1 text-base my-3 rounded-full ">
        Download Resume
      </p>

      <div className="flex flex-row justify-center items-center space-x-4 text-[#0000}">
        <a
          href="www.linkedin.com/in/
ahmat-randy-1a306318b
"
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/AhmatRandy">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      <div className="bg-slate-300 text-base py-3 mt-2 px-2 rounded-md">
        <div className="flex flex-row space-x-1 justify-center items-center">
          <GoArrowDown className="text-red" />
          <p>Jakarta, Indonesia</p>
        </div>
        <p>randyahmat76@gmail.com</p>
        <div className="flex flex-row space-x-1 justify-center items-center">
          <AiOutlineWhatsApp className="text-green-500 w-5 h-5 cursor-pointer" />
          <p> 081258351781</p>
        </div>
      </div>

      <div className="flex flex-col space-y-3 justify-center items-center py-2 ">
        <button className="py-2 px-2 rounded-3xl w-8/12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Email me
        </button>
        <button className="py-2 px-2 rounded-3xl w-8/12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Dark Ui
        </button>
      </div>
    </div>
  );
}
