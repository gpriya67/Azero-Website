import React, { useEffect, useState } from "react";
import WhyChooseUs from "../component/WhyChooseUs";

const Work = () => {
  const workIcon = [
    {
      id: 1,
      icon: "/assets/chitra-project.svg",
    },
    { id: 2, icon: "/assets/file-project.svg" },
    {
      id: 3,
      icon: "/assets/fivea-project.svg",
    },
    {
      id: 4,
      icon: "/assets/mobile-project.svg",
    },
    {
      id: 5,
      icon: "/assets/slide-project.svg",
    },
    {
      id: 6,
      icon: "/assets/slide-project.svg",
    },
    {
      id: 7,
      icon: "/assets/ennam-project.svg",
    },
    {
      id: 8,
      icon: "/assets/chitra-project.svg",
    },
    {
      id: 9,
      icon: "/assets/chitra-project.svg",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((count) => {
        if (count + 1 > workIcon.length) {
          return 0;
        } else {
          return count + 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4 lg:px-20  mt-[10%] md:mt-[5%]">
      <div className="border-2 border-primary rounded-3xl  px-20 shadow-lg ">
        <div className="flex justify-center items-center mt-10">
          <div className="w-[280px] h-[44px] relative p-[2px] rounded-md animated-border">
            <button
              className="
            w-full h-auto bg-white rounded-md
            font-semibold text-[#4D4C4C] font-clash tracking-wide
            flex items-center justify-center gap-3
            hover:bg-primary hover:text-white transition-all duration-300
          "
            >
              <span className="w-3 h-3 rounded-full bg-primary animate-pulse mt-2"></span>
              <span className=" mt-2">Our Works</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20  mt-10 mb-10 ">
          {workIcon.map((wor, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl shadow-lg group cursor-pointer  transition-all duration-700 ${
                i < visibleCount
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-75"
              }`}
            >
              <img
                src={wor.icon}
                alt={`Work ${i}`}
                className="w-full h-[215px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
      <div className=" flex justify-center items-center mt-[10%] md:mt-[5%]">
   <div className="w-[280px] h-[44px] relative p-[2px] rounded-md animated-border">
        <button
          className="
            w-full h-auto bg-white rounded-md
            font-semibold text-[#4D4C4C] font-clash tracking-wide
            flex items-center justify-center gap-3
            hover:bg-primary hover:text-white transition-all duration-300
          "
        >
         <span className="w-3 h-3 rounded-full bg-primary animate-pulse mt-2"></span>
          <span className=" mt-2">Why Choose Us</span>
        </button>
      </div>
</div>

    <WhyChooseUs />
    </div>
  );
};

export default Work;
