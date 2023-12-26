"use client";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillMail, AiOutlineFieldTime } from "react-icons/ai";
import { FaHeadphones } from "react-icons/fa";
import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Page() {
  const [state, setState] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setState({
      ...state,
      [key]: value,
    });
  };
  console.log(state)

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g, "");
    setState({
      ...state,
      phoneNumber: numericValue,
    });
  };

  const clearState = () => {
    setState({
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    });
  };

  return (
    <React.Fragment>
      <div className="flex flex-col items-center justify-center w-full pt-[80px] pb-[80px] mt-4">
        <div className='flex flex-col items-center justify-center bg-[url("/offices.jpg")] bg-cover bg-center w-full h-[400px]'>
          <div className="flex flex-col items-center justify-center w-full h-full bg-[#223740]/70 backdrop-brightness-50 ">
            <div className="text-center bg-[#48AFDE] py-[5px] px-[10px] tracking-wide uppercase font-semibold text-[20px] text-white rounded-lg">
              <a href="#contact" className="cursor-pointer">
                Contact Form
              </a>
            </div>
            <div className="mt-[10px]">
              <h1 className="recoletaBold text-5xl text-[#48AFDE] p-2 text-center tracking-white">
                {" "}
                Contact Me
              </h1>
            </div>
            <div className="flex justify-center text-center mt-[10px] md:w-[700px]">
              <p className="text-white font-[300] text-center text-xl">
                As a dedicated web developer, I'm passionate about turning ideas
                into seamless digital experiences. If you're looking for
                innovative and functional web solutions, I'm here to help. Let's
                collaborate to bring your vision to life!
              </p>
            </div>
          </div>
        </div>
        <div className="px-[20px]">
          <div className="sm:flex gap-[20px] mt-[50px] max-w-[1105px] w-full h-full">
            <div className="flex flex-col flex-1 xl:flex-row gap-[20px]">
              <div
                className="flex w-[300px] flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white text-center"
                style={{ boxShadow: "#48AFDE -1px 1px 10px 0px" }}
              >
                <div className="flex items-center gap-[15px]">
                  <div className="">
                    <FaLocationDot size={30} color="#48AFDE" />
                  </div>

                  <div className="flex flex-col">
                    <div className="text-[#48AFDE] text-[14px]">
                      <p>Location</p>
                    </div>
                    <div className="font-semibold text-[20px] tracking-wide">
                      <p>Meet Me At:</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[#666666] mt-2">Lublin, Poland</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1 xl:flex-row gap-[20px]">
              <div
                className="flex flex-col w-[300px] py-[35px] px-[45px] text-center rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white"
                style={{ boxShadow: "#48AFDE -1px 1px 10px 0px" }}
              >
                <div className="flex items-center gap-[15px]">
                  <div className="">
                    <FiPhoneCall size={30} color="#48AFDE" />
                  </div>

                  <div className="flex flex-col">
                    <div className="text-[#48AFDE] text-[14px]">
                      <p>Contact</p>
                    </div>
                    <div className="font-semibold text-[20px] tracking-wide">
                      <p>Call me on:</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[#666666] mt-2">609-359-811</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1 xl:flex-row gap-[20px]">
              <div
                className="flex w-[300px] flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white"
                style={{ boxShadow: "#48AFDE -1px 1px 10px 0px" }}
              >
                <div className="flex items-center gap-[15px]">
                  <div className="">
                    <AiFillMail size={30} color="#48AFDE" />
                  </div>

                  <div className="flex flex-col">
                    <div className="text-[#48AFDE] text-[14px] text-center">
                      <p>Drop a line:</p>
                    </div>
                    <div className="font-semibold text-[20px] tracking-wide">
                      <p>Mail address:</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[#666666] text-[15px] mt-2">
                    mateuszmartyna44@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row justify-center gap-[60px] mt-[10px] px-[30px] max-w-[1105px] m-auto p-10">
        <div className="flex flex-col gap-[20px] w-full">
          <div className="flex flex-col items-center justify-center">
            <div className="text-center w-[100px] bg-[#48AFDE] py-[1px] tracking-wide uppercase font-300 font-sans text-[14px] text-white rounded-lg ">
              Contact me
            </div>
            <div className="">
              <p className="text-[30px] text-[#223740] ">
                Feel free to reach me!
              </p>
            </div>
          </div>

          <form className="flex flex-col gap-[20px]">
            <div
              className={`flex flex-col sm:flex-row gap-[20px] ${hind.className}`}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name..."
                required
                onChange={handleChange}
                value={state.name}
                className="px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email..."
                required
                onChange={handleChange}
                value={state.email}
                className="px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200"
              />
            </div>
            <div
              className={`flex flex-col sm:flex-row gap-[20px] ${hind.className}`}
            >
              <input
                type="text"
                name="phoneNumber"
                placeholder="Your Number..."
                required
                onChange={handlePhoneChange}
                value={state.phoneNumber}
                className="px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200"
              />
              <input
                type="text"
                name="Subject"
                placeholder="Your Subject..."
                required
                onChange={handleChange}
                value={state.subject}
                className="px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200"
              />
            </div>
            <div className={`${hind.className}`}>
              <textarea
                required
                onChange={handleChange}
                value={state.message}
                name="message"
                placeholder="Your Message..."
                className="px-[12px] outline-none h-[180px] w-full rounded-md py-[12px] flex-1 bg-gray-200"
              />
            </div>
            <div
              id="contact"
              className="flex flex-col items-center justify-center"
            >
              <button className="bg-[#48AFDE] w-full px-[30px] py-[12px] hover:bg-[#223740] transition-color duration-300 font-semibold rounded-lg text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
