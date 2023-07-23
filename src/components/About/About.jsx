import React from "react";
import { GiAchievement } from "react-icons/gi";
import profileImage from '../../assets/images/pxfuel.jpg'
const About = () => {
  return (
    <div className=" mt-20 md:mt-36" id="about">
      <p className="text-white text-lg text-center">Get to know</p>
      <h1 className="text-blue-600 text-3xl text-center font-bold">About Me</h1>
      <div className="container mx-auto grid md:grid-cols-2  text-white mt-10">
        <div className="flex justify-center items-center ">
          <img
            src={profileImage}
            alt="image"
            className=" w-3/6 border-2 border-blue-300 rounded-md rotate-12 z-10 hover:-rotate-0"
          />
        </div>
        <div className="flex-col justify-center m-5">
          <div className="grid md:grid-cols-2 center gap-5 my-5">
            <div className="h-[11rem] md:w-[14rem] md:h-[10rem]  bg-[#132942] rounded-2xl flex flex-col justify-center items-center space-y-5  hover:bg-transparent hover:border-2 ">
              <GiAchievement size={30} />
              <h1>Experience</h1>
              <p className="text-gray-400">0.9 Months</p>
            </div>
            <div className="h-[11rem] md:w-[14rem] md:h-[10rem]  bg-[#132942] rounded-2xl flex flex-col justify-center items-center space-y-5  hover:bg-transparent hover:border-2 ">
              <GiAchievement size={30} />
              <h1>Projects</h1>
              <p className="text-gray-400">6+ Completed Projects</p>
            </div>
          </div>
          <p className="font-bold text-blue-100 mt-14 text-center m-3">
            Junior Software Developer with expertise in React JS, data
            visualization, and REST API integration. Committed to delivering
            seamless user experiences and contributing to innovative projects.
            Skilled in enhancing client decision-making through comprehensive
            data insights. Eager to drive impactful results and grow
            professionally.
          </p>
          <button className="btn outline py-4 px-3 rounded-lg m-5 hover:bg-purple-900 ">
            Let's talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
