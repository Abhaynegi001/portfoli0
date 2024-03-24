import React from "react";

function Footer() {
  return (
    <>
      <div className="w-full h-[0.1rem] bg-black" />
      <div className="text-center my-7 font-medium md:text-2x lg:flex justify-around">
        <h3>2024 ©️ All Rights Reserved.</h3>
        <h3>
          Built and design by <span className="underline">Abhay Negi</span>
        </h3>
      </div>
    </>
  );
}

export default Footer;
