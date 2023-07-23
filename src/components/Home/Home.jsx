import React from "react";
import { SiLinkedin } from "react-icons/si";
import { GrGithub } from "react-icons/gr";
import { FaHackerrank } from "react-icons/fa";
import { Link } from "react-scroll";
import resume from '../../assets/resume/AkshayGengaje.pdf'
const Home = () => {
  return (
    <div
      className=" container mx-auto  text-white mt-40  text-center md:relative"
      id="home"
    >
      <h6 className="text-xl my-3">Hello I'm</h6>
      <h1 className="text-6xl font-bold ">Akshay Gengaje</h1>
      <p className="mt-5 text-blue-600 text-lg font-bold">
        Full Stack Developer
      </p>
      {/* Content */}
      <div className="flex justify-center">
        <div className="text-center"></div>
        <div className="flex justify-center">
          <button className=" mt-5 py-2 outline px-4  rounded border-blue-500 text-blue-400 hover:bg-white hover:text-black">
            <a href={resume}>Download CV</a>
          </button>
          <button className="bg-blue-500 py-2 px-3 hover:bg-blue-700 outline text-white font-bold rounded mt-5 mx-5">
            Let's Talk
          </button>
        </div>
      </div>

      {/* Links  */}

      <div className="md:absolute lg:left-[13rem] md:left-5 top-0">
        <div className="flex justify-center ">
          <ul className="flex md:flex-col m-5 md:space-y-9 space-x-3 md:space-x-0">
            <li className="text-2xl">
              <a
                href="https://www.linkedin.com/in/akshay-gengaje"
                target="_blank"
              >
                <SiLinkedin />
              </a>
            </li>
            <li className="text-2xl">
              <a href="https://github.com/Akshay-Gengaje/" target="_blank">
                <GrGithub />
              </a>
            </li>
            <li className="text-2xl">
              <a
                href="https://www.hackerrank.com/akshaysgengaje"
                target="_blank"
              >
                <FaHackerrank />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Scroll md:absolute md:right-[5rem]  */}
      <div className="md:absolute lg:right-[13rem] md:right-5 md:top-20 md:rotate-90">
        <Link
          to="footer"
          spy={true}
          smooth={true}
          offset={600}
          duration={1500}
          className="tracking-widest hover:cursor-pointer"
        >
          scroll down
        </Link>
      </div>
    </div>
  );
};

export default Home;
