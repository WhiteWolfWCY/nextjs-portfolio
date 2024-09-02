"use client";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import { Hind } from "next/font/google";
import MySlider from "./components/SliderCard/MySlider";
import AboutMe from "./components/AboutMe/aboutme";
import CallToAction from "./components/CallToAction/CallToAction";
import { useEffect, useState } from "react";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {
  const [mounted, setIsMounted] = useState(false);
  const [showRedirectMessage, setShowRedirectMessage] = useState(true);
  const [counter, setCounter] = useState(3); // Initialize counter to 3 seconds
  const redirectUrl = "https://portfolio-v2-beta-gilt.vercel.app/";

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000); // Decrement counter every second

    if (counter === 0) {
      window.location.replace(redirectUrl);
      clearInterval(timer);
    }

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [counter]);

  return (
    <main className="min-h-screen relative">
      {showRedirectMessage && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-90 flex items-center justify-center z-50 flex-col">
          <h1 className="text-6xl text-orange-500">
            This website is outdated. 
          </h1>
          <h1 className="text-white text-2xl">
            Redirecting to the new website in {counter} seconds...
          </h1>
        </div>
      )}
      <HomeComponent />
      <div
        id="portfolio"
        className="mt-0 pt-5 -mb-40"
        style={{
          backgroundImage:
            "linear-gradient(-62deg, #f0af69 0 45%, white 0% 100%)",
          width: "100%",
        }}
      >
        <div className="container m-auto">
          <p className="text-[300px] select-none text-[#F7FBFD] md:pl-[50px] px-5 max-w-[750px] w-[100%] overflow-hidden"
          style={{
            transform: "translate(0px, -20px)"
          }}
          >
            portfolio
          </p>
          <div style={{
            transform: "translate(0px, -250px)"
          }}>
            <p className="text-[#ed891f] md:pl-[80px] px-5 font-extrabold text-5xl">
              Recent Works
            </p>
            <p className={`max-w-2xl md:pl-[80px] px-5 text-[16px] text-[#47626D] leading-8 mt-5 ${hind.className}`}>
              Here you can see some of my recent work. As a still learning
              developer I realize that some of it might seem trivial for you. However, 
              each of these projects have let me explore and learn new web technologies,
              which has been crucial for me to become more experienced and well-oriented 
              when it comes to web development. I hope you enjoy taking a look at my work!
            </p>
          </div>
        </div>
        <div style={{
            transform: "translate(0px, -170px)"
          }}>
          <MySlider />
        </div>
      </div>
      <AboutMe />
      <CallToAction/>
    </main>
  );
}