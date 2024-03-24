import React from "react";
import Stick from "../component/Stick";
import Button from "../component/Button";

function Home() {
  return (
    <>
      <Stick />
      <div className="my-[9rem] mx-7 h-[50vh] md:mx-9 lg:mx-[18rem]">
        <h2 className="text-2xl font-semibold md:text-4xl md:pb-2">
          Hello! There I'am,
        </h2>
        <h1 className="text-3xl font-bold md:text-5xl md:py-2">ABHAY NEGI</h1>
        <h1 className="text-3xl font-bold text-[#1D4ED8] md:text-5xl md:py-3">
          -APP & SOFTWARE DEVELOPER
        </h1>
        <p className=" font-semibold my-4 md:text-2xl ">
          As a skilled developer specializing in building exceptional digital
          experiences, I am dedicated to turning ideas into innovative app and
          web applications, with the ultimate goal of creating user-friendly
          applications.
        </p>
        <div className="mt-10">
          <Button title="About Me" className="bg-red-600" href="/about"/>
        </div>
      </div>
    </>
  );
}

export default Home;
