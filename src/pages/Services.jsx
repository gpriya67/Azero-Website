import React, { useEffect, useState } from "react";
import Testimonials from "../component/Testimonials";
import Invotation from "../component/Invotation";
import Questions from "../component/Questions";
import Footer from "../component/Footer";
import { motion, AnimatePresence } from "framer-motion";

const Service = () => {
  const [visibleCount, setVisibleCount] = useState(0);

  const servicesData = [
    { id: 1, title: "Service One" },
    { id: 2, title: "Service Two" },
    { id: 3, title: "Service Three" },
    { id: 4, title: "Service Four" },
    { id: 5, title: "Service Five" },
    { id: 6, title: "Service Six" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
      
        return prev + 1 > servicesData.length ? 1 : prev + 1;
      });
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" px-4 md:px-20 flex flex-col items-center w-full  ">
      <div className="flex flex-col items-center w-full bg-primary py-16 px-4 md:px-8 lg:px-20">
      <button className="flex items-center gap-2 px-4 py-2 text-white border border-white rounded-md text-sm font-medium">
        <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
        OUR SERVICE
      </button>

      <h1 className="text-xl md:text-5xl lg:text-6xl font-clash font-normal text-white text-center mt-6">
        What We Build, <span className="font-bold">Scales Your Business</span>
      </h1>

      <p className="text-white text-base md:text-lg lg:text-xl text-center font-aileron mt-4 max-w-3xl">
        From ideas to execution, we design and develop digital solutions that help businesses grow faster and smarter.
      </p>

      <div className="relative w-full max-w-[1292px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] mx-auto mt-8">
        {servicesData.map((service, i) => (
          <AnimatePresence key={service.id}>
            {i < visibleCount && (
              <motion.div
                initial={{ y: 50, opacity: 0, scale: 0.95 }}
                animate={{ y: -i * 10, opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full rounded-2xl shadow-md bg-white flex items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
                style={{ zIndex: i }}
              >
                {service.title}
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
    </div>

      <div className=" w-full flex flex-col items-center">
        <Testimonials />
        <Invotation />
        <Questions />
        <Footer />
      </div>
    </div>
  );
};

export default Service;
