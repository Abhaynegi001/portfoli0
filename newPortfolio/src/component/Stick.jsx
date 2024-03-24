import React from "react";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Stick() {
  return (
    <div className="text-5xl hidden  fixed bottom-0 left-4 lg:flex flex-col  items-center mx-10">
      <Link to="https://github.com/Abhaynegi001" target="_blank">
        {" "}
        <FiGithub className="py-2" />{" "}
      </Link>
      <Link
        to="https://www.linkedin.com/in/abhay-negi-0319172b1?utm_source=share&utm_campagin=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
      >
        {" "}
        <LuLinkedin className="py-2" />{" "}
      </Link>
      <Link
        to="https://instagram.com/abhaynegi290?igshid=OGQ5ZDc2ODK2ZA=="
        target="_blank"
      >
        {" "}
        <FaInstagram className="py-2" />{" "}
      </Link>
      <div className="h-[11rem] w-[0.2rem] bg-black" />
    </div>
  );
}

export default Stick;
