import { useEffect, useState } from "react";
import Testimonials from "../component/Testimonials";
import Invotation from "../component/Invotation";
import Questions from "../component/Questions";
import Footer from "../component/Footer";

import WhiteStackLayers from "../component/WhiteStackLayers";

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
    <div>
      <div className="hidden md:block w-screen mt-[5%]">
        <div>
          <div className="flex flex-col items-center  bg-primary  ">
            <button className="flex items-center gap-2 px-4 py-2 text-white border border-white rounded-md text-sm font-medium mt-5">
              <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
              OUR SERVICE
            </button>

            <div className=" w-[1440px] h-[1024px]">
              <h1 className=" text-[78px]  font-clash font-normal text-white text-center mt-6">
                What We Build,{" "}
                <span className="font-bold">Scales Your Business</span>
              </h1>

              <p className="text-[#FFFFFFFF] flex justify-center items-center  font-aileron font-normal tracking-[1px] text-[24px]">
                From ideas to execution, we design and develop digital solutions
                that help businesses grow faster and smarter.
              </p>
              <div className=" px-20">
                <WhiteStackLayers />
              </div>
            </div>
          </div>
        </div>
        <div className="  flex flex-col items-center   ">
          <div className=" w-full flex flex-col items-center">
            <Testimonials />
            <Invotation />
            <Questions />
            <Footer />
          </div>
        </div>
      </div>

      <div className="block md:hidden w-full">
        <div className="w-full mt-20 sm:mt-16 px-4">
          <div className="flex flex-col items-center bg-primary py-12 sm:py-16 px-4 sm:px-6 rounded-xl">
            <button className="flex items-center gap-2 px-4 py-2 text-white border border-white rounded-md text-xs sm:text-sm font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
              OUR SERVICE
            </button>

            <div className="w-full flex flex-col items-center mt-6">
              <h1 className="text-[10px]  font-clash font-normal text-white text-center ">
                What We Build,{" "}
                <span className="font-bold">Scales Your Business</span>
              </h1>

              <p className="text-white text-center text-[10px] font-aileron font-normal tracking-wide  mt-4 max-w-[300px] sm:max-w-[400px]">
                From ideas to execution, we design and develop digital solutions
                that help businesses grow faster and smarter.
              </p>

              <div className="w-full mt-8 px-2 sm:px-6">
                <WhiteStackLayers />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full mt-8 px-4">
          <Testimonials />
          <Invotation />
          <Questions />

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Service;
