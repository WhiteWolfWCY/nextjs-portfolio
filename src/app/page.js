"use client";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import { Hind } from "next/font/google";
import MySlider from "./components/SliderCard/MySlider";
import AboutMe from "./components/AboutMe/AboutMe";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <HomeComponent />
      <div
        id="portfolio"
        className="mt-0 pt-5 -mb-40"
        style={{
          backgroundImage:
            "linear-gradient(-62deg, #EEF7FB 0 45%, white 0% 100%)",
          width: "100%",
        }}
      >
        <div className="container m-auto">
          <p className="text-[300px] text-[#F7FBFD] md:pl-[50px] px-5 max-w-[750px] w-[100%] overflow-hidden"
          style={{
            transform: "translate(0px, -20px)"
          }}
          >
            portfolio
          </p>
          <div style={{
            transform: "translate(0px, -250px)"
          }}>
            <p className="text-[#48AFDE] md:pl-[80px] px-5 font-extrabold text-5xl">
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
    </main>
  );
}
