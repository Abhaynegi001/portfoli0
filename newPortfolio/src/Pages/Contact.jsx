import React, { useState } from "react";
import Stick from "../component/Stick";
import axios from "axios";
import toast from "react-hot-toast";

function About() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const datasend = async (e) => {
    try {
      e.preventDefault()
      const { data } = await axios.post(`${window.location.origin}/contact`, {
        name,
        email,
        message,
      });

      setname("");
      setemail("");
      setmessage("");

      toast.success(data.message);
    } catch (error) {
      toast.error(data.message);
    }
  };
  return (
    <>
      <Stick />
      <div>
        <h1 className="text-3xl font-bold m-5 text-center md:text-5xl md:m-[4rem] lg:text-6xl lg:m-[6rem] lg:mx-[8rem]">
          I'm Excited To Hear From You! Get In Touch And Let's Bring Your Ideas
          To Life!
        </h1>
        <form onSubmit={datasend} className="my-16 mx-9 md:mx-[12rem] lg:mx-[28rem]">
          <div>
            <label className="font-medium" htmlFor="name">
              Name
            </label>{" "}
            <br />
            <input
              className="mt-2 w-full outline-none border-b-2 border-black"
              type="text"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
              required
            />
          </div>
          <div className="my-4 md:my-6">
            <label className="font-medium" htmlFor="email">
              E-mail
            </label>{" "}
            <br />
            <input
              className="mt-2 w-full outline-none border-b-2 border-black"
              type="email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              required
            />
          </div>
          <div>
            <label className="font-medium" htmlFor="message">
              Message
            </label>{" "}
            <br />
            <textarea
              rows="3"
              className="mt-2 w-full outline-none border-b-2 border-black"
              type="text"
              value={message}
              onChange={(e) => {
                setmessage(e.target.value);
              }}
              required
            />
          </div>
          <button
            className="bg-[#E11D48] text-white text-xl font-medium my-7 rounded-sm p-3"
            type="submit"
          >
            send
          </button>
        </form>
      </div>
    </>
  );
}

export default About;
