"use client";
import React, {useState} from "react";
import { Hind } from "next/font/google";
import { AboutData } from "@/app/data";

const hind = Hind({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
  });

export default function Aboutme() {

    const [isFlipped, setIsFlipped] = useState(false);
    const [isFaded, setIsFaded] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [mapData, setMapData] = useState(AboutData[0]);


    const myFunctions = (data) => {
        setIsFlipped(false);
        setIsFaded(false);
        setMapData(data);
    }

    const handleCardClick = (date, index) => {
        setIsFlipped(true);
        setIsFaded(true);
        setSelectedIndex(index);

        setTimeout(()=>myFunctions(data), 600);
    }

    const HandleNext =() => {
        if(selectedIndex < 5){
            handleCardClick(AboutData[selectedIndex + 1], selectedIndex + 1);
        }else{
            handleCardClick(AboutData[0], 0)
        }
    }

    const HandlePrevious =() => {
        if(selectedIndex !== 0){
            handleCardClick(AboutData[selectedIndex - 1], selectedIndex - 1);
        }else{
            handleCardClick(AboutData[5], 5)
        }
    }

  return (
    <React.Fragment>
      <div
        id="about-me"
        className="bg-[#E0F3FD] pt-[250px] mt-10 pb-[100px] lg:pb-[600px] relative lg:h-[800px]"
      >
        <div className="container m-auto">
          <h1 className="text-[240px] w-[80%] overflow-hidden absolute lg:left-40 md:left-30 top-[-50px] text-[#EAF7FC]">
            About Me
          </h1>
          <h1 className="relative font-recoletaBlack text-5xl text-[#48AFDE] mb-5 -mt-40 md:px-24 px-5">
            About Myself
          </h1>
          <h4 className="relative w-full font-[300] md:w-3/4 lg:w-2/3 xl:w-1/2 font-recoleta text-[#223740] text-2xl mb-10 px-5 md:px-24">
            Glad to see you! Want to know me better?
          </h4>
          <section className="relative flex flex-col lg:flex-row px-5 md:px-24">
            <p className={`w-full lg:w-1/3 text-[#223740] mr-0 mb-5 lg:mr-4 ${hind.className}`}>
            Hello there! I am Mateusz, a passionate computer science student and a dedicated 
            web developer. My journey into the world of technology started at a young age, 
            and since then, I have explored various realms of computer science, 
            delving into numerous programming languages.
            </p>
            <p className={`w-full lg:w-1/3 text-[#223740] mr-0 mb-5 lg:mr-4 ${hind.className}`}>
            I have dabbled in creating servers for different games, scripting, 
            and modding, as well as developing applications using languages 
            such as C++ and Python. Currently, as a web developer,
            I focus on honing my skills in JavaScript, TypeScript, React, NodeJS and NextJS.
            </p>
            <p className={`w-full lg:w-1/3 text-[#223740] mr-0 mb-5 lg:mr-4 ${hind.className}`}>
            In my professional career, I thrive in the LowCode environment, 
            particularly in Outsystems, where I serve as a reactive web developer. 
            My responsibilities involve crafting architectural solutions, 
            developing backend systems, implementing algorithms for seamless API 
            integration with other systems, and designing user interfaces.
            </p>
          </section>
        </div>
      </div>
      <div style={{
            backgroundImage: "linear-gradient(45deg, #EAF7FC 70%, #48AFDE 30%)",
            width: "100%"
        }}
            className="lg:-mt-60">
        <section className="container flex flex-col m-auto sm:flex-row px-5 md:px-24 mt-[50px] sm:mt-0 transform translate-y-[-100px]">
            <div className="hidden sm:flex w-full sm:w-1/2 lg:w-7/12">
                {
                    AboutData.map((item, index)=>(
                        <a onClick={() => handleCardClick(item, index)}
                            style={{boxShadow: "#48AFDE -5px 10px 20px 0px"}}
                            className={`relative cursor-pointer transition-all transform duration-300 group rounded-xl center p-6 lg:p-10 flex flex-col justify-center items-center`}
                        >
                            <div className="w-16 h-16 sm:w-10 sm:h-10 lg:w-16 lg:h-16">
                                <img src={item.img}/>
                            </div>
                        </a>
                    ))
                }
            </div>
        </section>
      </div>
    </React.Fragment>
  );
}
