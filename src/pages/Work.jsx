import  { useEffect, useState } from "react";
import WhyChooseUs from "../component/WhyChooseUs";
import { motion } from "framer-motion";
import Produaly from "../component/Produaly";

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div>
      <div>
        <Produaly />
      </div>
      <motion.div
        className="px-4 sm:px-6 lg:px-20 mt-[20%] sm:mt-[10%] md:mt-[5%]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="relative rounded-[28px] sm:rounded-[36px] p-[3px]">
          <div
            className="
        rounded-[24px] sm:rounded-[32px]
        px-4 sm:px-10 md:px-14 lg:px-20
        py-8 sm:py-12 md:py-14
        shadow-lg
        bg-gradient-to-br
        from-[rgba(255,164,164,0.25)]
        to-[rgba(255,235,235,0.6)]
      "
          >
            <div className="flex justify-center">
              <div className="w-[140px] h-[36px] p-[2px] rounded-md ">
                <button
                  className="
              w-full h-full bg-white rounded-md
              font-semibold text-[#4D4C4C]
              flex items-center justify-center gap-2
              hover:bg-primary hover:text-white
              transition-all duration-300
            "
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-[14px] sm:text-[16px]">Our Works</span>
                </button>
              </div>
            </div>

            <motion.div
              className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8 sm:gap-12 lg:gap-20
          mt-10
        "
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              {workIcon.map((wor, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="group rounded-xl flex justify-center"
                >
                  <div
                    className="
              w-full
              max-w-[340px]
              aspect-[16/10]
              overflow-hidden
              rounded-xl
              bg-white
              shadow-lg
            "
                  >
                    <img
                      src={wor.icon}
                      alt="work"
                      className="
                  w-full h-full object-cover
                  transition-transform duration-500
                  group-hover:scale-110
                "
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
      <div className=" flex justify-center items-center mt-[10%] md:mt-[5%]">
        <div className="w-[188px] h-[36px] relative p-[2px] rounded-md animated-border">
          <button
            className="
            w-full h-auto bg-white rounded-md
            font-semibold text-[#4D4C4C] font-clash tracking-wide
            flex items-center justify-center gap-3
            hover:bg-primary hover:text-white transition-all duration-300
          "
          >
            <span className="w-3 h-3 rounded-full bg-primary animate-pulse mt-1"></span>
            <span className=" mt-1 text-[16px] uppercase">Why Choose Us</span>
          </button>
        </div>
      </div>

      <WhyChooseUs />
    </div>
  );
};

export default Work;
