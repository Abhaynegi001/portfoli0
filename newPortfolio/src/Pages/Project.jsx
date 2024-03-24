import React from "react";
import Stick from "../component/Stick";
import Button from "../component/Button";
import calculater from '/src/assets/calculater.png'
import stone from '/src/assets/stone,paper.png'

function About() {
  return (
    <>
      <Stick />
      <div className="m-10">
        <h1 className="text-3xl font-bold text-center md:text-5xl md:my-16 lg:text-6xl lg:mx-[4rem]">
          Creativity Is Intelligence Having Fun!{" "}
        </h1>
        <div className="lg:flex lg:flex-col lg:justify-center lg:items-center">
          <div className="mt-12 md:mx-9 lg:flex">
            <div className="border-2 border-black md:mx-[3rem]">
              <img
                className="w-[20rem] p-6 md:w-[30rem] md:m-auto md:my-7 lg:w-[20rem]"
                src={calculater}
                alt="Image not found"
              />
            </div>
            <div className="lg:w-[30rem]">
              <h1 className="font-bold my-5 md:text-2xl">WEB DEVELOPMENT</h1>
              <h1 className="text-2xl font-bold my-3 md:text-4xl">
                Calculater - Web App
              </h1>
              <p className="font-medium md:text-xl">
              Designed and implemented a user-friendly calculator with basic arithmetic operations using HTML, CSS, and JavaScript.
              </p>
              <div className="my-6">
                <Button
                  title="View"
                  className="bg-red-600"
                  href="https://abhaynegi001.github.io/Calculator.github.io/"
                  target="_blank"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 md:mx-9 lg:flex">
            <div className="lg:w-[30rem] lg:my-16 lg:mr-5">
              <h1 className=" font-bold my-5">WEB DEVELOPMENT</h1>
              <h1 className="text-2xl font-bold my-3">
                Stone, Paper, Scissor - Web App
              </h1>
              <p className="font-medium">
              Developed an interactive Rock-Paper-Scissors web app using HTML, CSS, and JavaScript, allowing users to play the classic game against the computer.
              </p>
              <div className="my-6">
                <Button
                  title="View"
                  className="bg-red-600"
                  target="_blank"
                  href="https://abhaynegi001.github.io/stone_paper_scissors/"
                />
              </div>
            </div>
            <div className="border-2 border-black md:w-[30rem] md:m-auto md:my-7">
              <img
                className="w-[20rem] p-6 md:w-[30rem] md:m-auto md:my-7 lg:w-[20rem]"
                src={stone}
                alt="Image not found"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
