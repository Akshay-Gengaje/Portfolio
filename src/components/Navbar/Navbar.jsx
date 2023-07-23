import React from "react";

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineContacts,
} from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { MdOutlineHandshake } from "react-icons/md";
import { Link } from "react-scroll";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="flex justify-center ">
      <div className="w-[22rem] fixed bg-red-100 bottom-[2rem] rounded-3xl backdrop-opacity-70 bg-white/30 opacity-60 filter">
        <div className="my-5 flex justify-around">
          <Link
            to="home"
            activeClass="nav-bar-active"
            spy={true}
            smooth={true}
            offset={-900}
            duration={1500}
            onSetActive={handleSetActive}
            className="btn outline  p-3 rounded-full text-white hover:text-white hover:bg-black/60 active:bg-blue-700 "
          >
            <AiOutlineHome />
          </Link>
          <Link
            activeClass="nav-bar-active"
            to="about"
            spy={true}
            smooth={true}
            offset={-60}
            duration={1500}
            className="btn outline  p-3 rounded-full text-white hover:text-white hover:bg-black/60  active:bg-blue-700"
          >
            <AiOutlineUser />
          </Link>
          {/* <button className="btn outline  p-3 rounded-full text-white hover:text-white hover:bg-black/60 active:bg-blue-700 ">
            <BiBookBookmark />
          </button> */}
          <Link
            to="skills"
            activeClass="nav-bar-active"
            spy={true}
            smooth={true}
            offset={-156}
            duration={1500}
            className="btn outline  p-3 rounded-full text-white hover:text-white hover:bg-black/60 active:bg-blue-700 "
          >
            <MdOutlineHandshake />
          </Link>
          <Link
            to="contact"
            activeClass="nav-bar-active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1500}
            className="btn outline  p-3 rounded-full text-white hover:text-white hover:bg-black/60"
          >
            <AiOutlineContacts />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const handleSetActive = (to) => {
  console.log(to);
};
