import React from "react";

import SkillBox from "./SkillBox";
const frontend = [
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind",
  "JS",
  "Redux",
  "React JS",
];
const backend =[
  "Node Js", "Express Js", "Java", "Spring Boot", "REST API", "AWS Cloud", "MySql"
]
const Skills = () => {
  return (
    <div className="container mx-auto my-52 flex flex-col justify-center" id="skills">
      <p className="text-white text-lg text-center">The skills I have</p>
      <h1 className="text-blue-600 text-3xl text-center font-bold">Skills</h1>
      <div className="flex justify-around ">
        <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-6 space-y-5 md:space-y-0">
          <div className="w-96 h-64 bg-[#132942] flex-col justify-center rounded-2xl">
            <SkillBox skills={frontend} title={"Front-end Development"} />
          </div>
          <div className="w-96 h-64 bg-[#132942] flex-col justify-center rounded-2xl">
            <SkillBox skills={backend} title={"Back-end Development"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
