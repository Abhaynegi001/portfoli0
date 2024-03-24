import React from "react";
import Stick from "../component/Stick";
import Button from "../component/Button";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { VscServer } from "react-icons/vsc";
import { FaLaptopCode } from "react-icons/fa";
import { FaCodeMerge } from "react-icons/fa6";
import me from '/src/assets/me.png'

function About() {
  const data = [
    {
      id:134,
      icon:[<PiBracketsCurlyBold/>],
      title:"Frontend",
      skills:"Html, CSS, Javascript, React js, Tailwind CSS, Bootstrap"
    },
    {
      id:2234,
      icon:[<VscServer/>],
      title:"Backend",
      skills:"Node js, Express js, MongoDB"
    },
    {
      id:3123,
      icon:[<FaLaptopCode/>],
      title:"Language",
      skills:"C, C++"
    },
    {
      id:2344,
      icon:[<FaCodeMerge/>],
      title:"Others",
      skills:"Git, Vercel"
    },
  ];

  return (
    <>
      <Stick />
      <div>
        <h1 className="text-3xl font-bold text-center m-5 md:text-5xl md:p-6 lg:text-6xl lg:mx-12">
          Crafting Top-Notch Experiences With Every Line Of Code!
        </h1>
        <div className="lg:flex lg:justify-center lg:items-center lg:mx-[5rem] ">
          <div className="mx-10 border-2 border-black flex justify-center md:mx-16">
            <img
              className="w-[15rem] py-5 md:w-[30rem] md:my-5 lg:w-[25rem] lg:h-[30rem] lg:mx-7"
              src={me}
              alt="image not found"
            />
          </div>
          <div className="m-6 md:mx-16  lg:w-[30rem] lg:m-2">
            <h1 className="text-3xl font-bold">ABOUT ME.</h1>
            <div className="my-3 text-lg font-medium">
              <p>
                Hello there! Im Abhay Negi, a passionate and dedicated
                <span className="text-blue-800">
                  {" "}
                  APPLICATION & SOFTWARE DEVELOPER
                </span>
                . My main focus these days is on building accessible and
                inclusive products that provide a{" "}
                <span className="text-blue-800">SEAMLESS USER EXPERIENCE</span>.
              </p>
              <p className="my-3">
                In my work, I prioritize user-centered design and collaboration
                with clients to ensure that their vision is fully realized in
                the final product. I am passionate about staying up-to-date with
                the latest developments in the tech industry. As a developer, I
                have a deep passion for adding clarity to complicated concepts
                by developing them. My expertise lies in{" "}
                <span className="text-blue-800">
                  APP DEVELOPMENT AND WEB DEVELOPMENT
                </span>
                .
              </p>

              <p>
                Whether its building a
                <span className="text-blue-800">
                  NEW MOBILE APP FROM SCRATCH OR CUSTOMZING EXISTING PROJECTS
                </span>
                , I am committed to delivering exceptional results with every
                project I work on. Overall, my goal is to use my{" "}
                <span className="text-blue-800">
                  SKILLS AND KNOWLEDGE TO CREATE INNOVATIVE, HIGH-QUALITY
                  DIGITAL PRODUCTS
                </span>{" "}
                that make a positive impact on users lives.
              </p>
            </div>
            <div className="flex items-center gap-10 mt-10">
              <Button title="Hire Me" className="bg-red-600" href="/contact" />
              <h1 className="flex gap-3 font-medium text-xl justify-center items-center cursor-pointer">
                Resume <BsBoxArrowUpRight />
              </h1>
            </div>
          </div>
        </div>

        <div className="my-10">
          <h1 className="text-5xl font-bold text-center my-10">Skills</h1>
          <div className="md:flex md:flex-wrap md:justify-center">
          {data.map(item=> (
            <div className="border-2 border-black mx-5 p-6 my-5 md:w-[15rem]" key={item.id}>
              <h1 className="text-4xl">{item.icon}</h1>
              <h1 className="text-3xl font-bold my-4">{item.title}</h1>
              <h2 className="font-medium">
                {item.skills}
              </h2>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
