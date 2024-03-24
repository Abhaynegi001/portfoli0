import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  let [toogle, settoogle] = useState(true);

  return (
    <>
      <div className="m-9 flex justify-between items-center lg:mx-[8rem]">
        <Link to="/">
          <h1 className="font-bold text-4xl">
            <span className="text-[#E11D48]">A</span>BHAY.
          </h1>
        </Link>
        <div>
          <h1 className="text-2xl lg:hidden">
            {toogle ? (
              <FaBars
                onClick={() => {
                  settoogle(!toogle);
                }}
              />
            ) : (
              <ImCross
                onClick={() => {
                  settoogle(!toogle);
                }}
              />
            )}
          </h1>
          <ul className="hidden lg:flex gap-10 font-semibold text-lg pr-20">
            <Link to="/">
              <li>
                <p className="relative group">
                  <span>Home</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-black transition-all group-hover:w-full"></span>
                </p>
              </li>
            </Link>
            <Link to="/about">
              <li>
                {" "}
                <p className="relative group">
                  <span>About Me</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-black transition-all group-hover:w-full"></span>
                </p>
              </li>
            </Link>
            <Link to="/project">
              <li>
                <p className="relative group">
                  <span>Projects</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-black transition-all group-hover:w-full"></span>
                </p>
              </li>
            </Link>
            <Link to="/contact">
              <li>
                <p className="relative group">
                  <span>Contact</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-black transition-all group-hover:w-full"></span>
                </p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div
        className={`bg-black fixed left-11 text-white w-[18rem] h-[25rem] justify-center items-center  rounded-xl ${
          toogle ? "hidden" : "flex flex-col"
        } `}
      >
        <ul className="text-center text-2xl">
          <Link to="/">
            <li
              onClick={() => {
                settoogle(!toogle);
              }}
            >
              <p className="relative group my-4">
                <span>Home</span>
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-white transition-all group-hover:w-full"></span>
              </p>
            </li>
          </Link>
          <Link to="/about">
            <li
              onClick={() => {
                settoogle(!toogle);
              }}
            >
              <p className="relative group my-4">
                <span>About Me</span>
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-white transition-all group-hover:w-full"></span>
              </p>
            </li>
          </Link>
          <Link to="/project">
            <li
              onClick={() => {
                settoogle(!toogle);
              }}
            >
              <p className="relative group my-4">
                <span>Projects</span>
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-white transition-all group-hover:w-full"></span>
              </p>
            </li>
          </Link>
          <Link to="/contact">
            <li
              onClick={() => {
                settoogle(!toogle);
              }}
            >
              <p className="relative group my-4">
                <span>Contact</span>
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-white transition-all group-hover:w-full"></span>
              </p>
            </li>
          </Link>
        </ul>
        <div className="flex gap-3 my-3 text-2xl">
          <a href="https://github.com/Abhaynegi001" target="_blank">
            {" "}
            <FiGithub />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/abhay-negi-0319172b1?utm_source=share&utm_campagin=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            {" "}
            <LuLinkedin />{" "}
          </a>
          <a
            href="https://instagram.com/abhaynegi290?igshid=OGQ5ZDc2ODK2ZA=="
            target="_blank"
          >
            {" "}
            <FaInstagram />{" "}
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
