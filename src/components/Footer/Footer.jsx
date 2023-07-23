import React from "react";
import { SiLinkedin } from "react-icons/si";
import { GrGithub } from "react-icons/gr";
import { FaHackerrank } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="mt-10 py-10  bg-[#4DB5FF] flex flex-col  justify-evenly">
      <h1 className="text-3xl text-center font-bold m-3 hover:text-white">
        Akshay Gengaje
      </h1>
      <ul className="flex flex-col md:flex-row justify-center md:space-x-5 my-6 font-bold items-center ">
        <li className="hover:text-white">Home</li>
        <li className="hover:text-white">About</li>
        <li className="hover:text-white">Skill</li>
        <li className="hover:text-white">Portfolio</li>
        <li className="hover:text-white">Contact</li>
      </ul>
      <div className="flex justify-center">
        <ul className="flex m-5 space-x-7 ">
          <li className="text-4xl hover:text-white">
            <SiLinkedin />
          </li>
          <li className="text-4xl hover:text-white">
            <GrGithub />
          </li>
          <li className="text-4xl hover:text-white">
            <FaHackerrank />
          </li>
        </ul>
      </div>
      <p className="text-center hover:text-white">
        {" "}
        <span>&copy;</span> AG 2023. ALL RIGHTS RESERVED
      </p>
    </div>
  );
};

export default Footer;
