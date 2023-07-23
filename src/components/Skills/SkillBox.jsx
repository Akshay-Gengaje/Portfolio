import React from "react";
import { FiTool } from "react-icons/fi";
const SkillBox = (props) => {
  const title = props.title;
  const skills = props.skills;

  return (
    <div className="md:w-96 h-64 bg-[#132942] flex-col justify-center rounded-2xl">
      <h1 className="text-center font-bold text-blue-500 text-xl m-5">
        {title}
      </h1>
      <div className="grid grid-cols-2 gap-4 m-5 ">
        {skills.map((skill, index) => (
          <div
            className="text-blue-300 text-center flex justify-start items-center space-x-2 mx-auto"
            key={index}
          >
            <FiTool size={20} />
            <span className="text-lg">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillBox;
