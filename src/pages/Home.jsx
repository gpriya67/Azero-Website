import React, { useEffect, useState } from "react";
import Counter from "../component/Counter";
import {useTypewriter,Cursor } from 'react-simple-typewriter'

const Home = () => {
  const ProudlyIcon = [
    { id: 1, icon: "/assets/slide-logo.svg" },
    { id: 2, icon: "/assets/piax-logo.svg" },
    { id: 3, icon: "/assets/chitra-logo.svg" },
    { id: 4, icon: "/assets/fivea-logo.svg" },
    { id: 5, icon: "/assets/slide-logo.svg" },
    { id: 6, icon: "/assets/anchor-logo.svg" },
    { id: 7, icon: "/assets/ben-logo.svg" },
  ];

 
   const [text]   = useTypewriter({
    words: ["  Tech solutions", "Web Development"],
    loop: 0, 
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <div className=" px-4 mt-[25%] md:mt-[15%]  md:px-20 justify-center flex flex-col items-center ">
      <h1 className="text-[30px] md:text-[78px] font-normal font-clash leading-10 md:leading-none text-nowrap">
        Transforming ideas into
      </h1>
      <h1 className="text-[20px] md:text-[72px] font-medium font-clash leading-10 md:leading-none text-nowrap">
        Impactful{" "}
        <span
          className="text-[20px] md:text-[72px] font-bold 
        bg-gradient-to-r from-[#FE4A33] to-[#FEAEA4] bg-clip-text text-transparent"
        >
        
         <span className="inline">{text}</span>
      <Cursor cursorStyle="|" />
        </span>
        <br />
        <div className="text-center font-medium font-clash text-[30px]">Worldwide.</div>
      </h1>

      <div className="flex-row mt-[10%] md:mt-[5%]  md:flex justify-center gap-10">
        {[
          {
            number: "10+",
            label: "Years of Excellence",
            icon: <img src="/assets/star.svg" alt="star" />,
          },
          {
            number: "92%",
            label: "Success Rate",
            icon: <img src="/assets/Flame.svg" alt="flame" />,
          },
          {
            number: "100+",
            label: "Thriving Projects",
            icon: <img src="/assets/Vector.svg" alt="vector" />,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="w-[166px] h-[77px] bg-[#FFF7F7] px-2 py-1 rounded-md relative flex items-center justify-between mt-10"
          >
            <div
              className="w-[65px] h-[65px] flex items-center justify-center text-[20px] font-clash font-semibold 
                      bg-gradient-to-t from-[#FE4A33] to-[#FEAEA4] rounded-xl text-black text-center "
            >
              <Counter
                target={parseInt(item.number)}
                suffix={item.number.replace(/\d/g, "")}
              />
            </div>

            <p className="flex-1 text-[16px] font-aileron font-normal text-center ml-2 flex items-center justify-center">
              {item.label}
            </p>

            <div className="absolute -right-3 -top-2 w-[20px] h-[20px] object-cover">
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[20%] md:mt-[5%] flex justify-center items-center relative">
        <div className="absolute w-[260px] h-[70px] rounded-2xl bg-primary/40 blur-2xl"></div>

        <button
          className="
      relative z-10
      bg-primary
      text-[16px]
      px-10 py-4
      rounded-2xl
      text-white
      font-clash font-semibold
      tracking-wide
      transition-transform duration-300
      hover:scale-105
    "
        >
          LET’S TALK
        </button>
      </div>

      <div className="mt-[20%] md:mt-[10%] flex justify-center items-center">
        <div className="w-[280px] h-[44px] relative p-[2px] rounded-md animated-border">
          <button
            className="
        w-full h-full bg-white rounded-md
        font-semibold text-[#4D4C4C] font-clash tracking-wide
        flex items-center justify-center gap-3 
      "
          >
            <span className="w-3 h-3 rounded-full bg-primary"></span>

            <span>PROUDLY WORKED WITH</span>
          </button>
        </div>
      </div>

      <div className="relative w-full overflow-hidden mt-[5%]">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-white to-transparent z-10"></div>

        <div className="pointer-events-none absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className=" marquee-track flex gap-14 ">
          {ProudlyIcon.map((pro, i) => (
            <div
              key={i}
              className=" w-[150px] h-[100px] shrink-0 flex justify-center items-center"
            >
              <img
                src={pro.icon}
                alt="logo"
                className=" max-w-[120px] h-[50px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
