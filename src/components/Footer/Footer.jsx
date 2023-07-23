import React from "react";
import { SiLinkedin } from "react-icons/si";
import { GrGithub } from "react-icons/gr";
import { FaHackerrank } from "react-icons/fa";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div
      id="footer"
      className="mt-10 py-10  bg-[#4DB5FF] flex flex-col  justify-evenly"
    >
      <h1 className="text-3xl text-center font-bold m-3 hover:text-white">
        Akshay Gengaje
      </h1>
      <ul className="flex flex-col md:flex-row justify-center md:space-x-5 my-6 font-bold items-center ">
        <li className="hover:text-white">
          <Link to="home" spy={true} smooth={true} offset={600} duration={1500}>
            Home
          </Link>
        </li>
        <li className="hover:text-white">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={600}
            duration={1500}
          >
            About
          </Link>
        </li>
        <li className="hover:text-white">
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={600}
            duration={1500}
          >
            Skills
          </Link>
        </li>
        <li className="hover:text-white">
          <Link
            to="footer"
            spy={true}
            smooth={true}
            offset={600}
            duration={1500}
          >
            PortFolio
          </Link>
        </li>
        <li className="hover:text-white">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={600}
            duration={1500}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex justify-center">
        <ul className="flex m-5 space-x-7 ">
          <li className="text-4xl hover:text-white">
            <a
              href="https://www.linkedin.com/in/akshay-gengaje"
              target="_blank"
            >
              <SiLinkedin />
            </a>
          </li>
          <li className="text-4xl hover:text-white">
            <a href="https://github.com/Akshay-Gengaje/" target="_blank">
              <GrGithub />
            </a>
          </li>
          <li className="text-4xl hover:text-white">
            <a href="https://www.hackerrank.com/akshaysgengaje" target="_blank">
              <FaHackerrank />
            </a>
          </li>
        </ul>
      </div>
      <p className="text-center hover:text-white">
        <span>&copy;</span> AG 2023. ALL RIGHTS RESERVED
      </p>
    </div>
  );
};

export default Footer;
