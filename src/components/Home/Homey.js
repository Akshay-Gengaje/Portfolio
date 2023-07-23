import React from "react";
import { SiLinkedin } from "react-icons/si";
import { GrGithub } from "react-icons/gr";
import { FaHackerrank } from "react-icons/fa";
const Home = () => {
  return (
    <div className=" container mx-auto text-white flex flex-col md:flex-row justify-evenly mt-40 ">
      {/* Links  */}
      <div className="flex justify-center">
        <ul className="flex md:flex-col m-5 md:space-y-9 space-x-3 md:space-x-0">
          <li className="text-2xl">
            <SiLinkedin />
          </li>
          <li className="text-2xl">
            <GrGithub />
          </li>
          <li className="text-2xl">
            <FaHackerrank />
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="justify-center">
        <div className="text-center">
          <h6 className="text-xl my-3">Hello I'm</h6>
          <h1 className="text-6xl font-bold ">Akshay Gengaje</h1>
          <p className="mt-5 text-blue-600 text-lg font-bold">
            Full Stack Developer
          </p>
        </div>
        <div className="flex justify-center">
          <button className=" mt-5 py-2 outline px-4  rounded border-blue-500 text-blue-400 hover:bg-white hover:text-black">
            Download CV
          </button>
          <button className="bg-blue-500 py-2 px-3 hover:bg-blue-700 outline text-white font-bold rounded mt-5 mx-5">
            Let's Talk
          </button>
        </div>
      </div>
      <div className="hidden md:flex items-end rotate-90 ">
        <p className="tracking-widest">scroll down</p>
      </div>
    </div>
  );
};

export default Home;
