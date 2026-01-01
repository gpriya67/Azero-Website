import { useState } from "react";
import Counter from "./Counter";

export const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState(true);
  return (
    <section className="max-w-[1300px] mx-auto px-6 py-5 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 items-start">
        <div className="lg:col-span-1 ">
          <h1 className="font-clash text-[56px]  leading-tight mt-[5%] md:mt-[15%]">
            We deliver
            <br />
            <span className="block font-medium text-[65px]  bg-gradient-to-r from-[#FE4A33] to-[#FEAEA4] bg-clip-text text-transparent leading-none">
              Measurable
            </span>
            <span className="block font-medium text-[65px]  bg-gradient-to-r from-[#FE4A33] to-[#FEAEA4] bg-clip-text text-transparent leading-none">
              outcomes
            </span>
          </h1>
        </div>
        <div
          className="h-[365px] rounded-2xl p-6 bg-white/60 backdrop-blur-md relative
    border border-[#EEEEEE] shadow-[0_8px_30px_rgba(0,0,0,0.04)]
    flex flex-col justify-between group transition-all duration-300"
        >
          <div className="flex justify-start">
            <img
              src="/assets/Mask group 5.png"
              alt="icon"
              className="w-[100px] md:w-[198px] h-auto absolute md:-top-5"
            />
          </div>
          <div className="flex items-end gap-4 mt-[40%]">
            <h2 className="font-clash bg-gradient-to-r from-[#FE4A33] to-[#FEAEA4] text-6xl md:text-8xl bg-clip-text text-transparent drop-shadow-lg leading-none">
              <Counter target={12} suffix="+" />
            </h2>
            <span className="font-clash font-semibold text-3xl md:text-4xl text-gray-800 mt-5">
              Industry Reach
            </span>
          </div>
          <p className="font-aileron text-[18px] text-gray-600 mt-7">
            A vibrant portfolio of expertise across industries
          </p>
          <div className="absolute bottom-0 left-0 w-full border-b-4 border-transparent group-hover:border-red-500 transition-all duration-300"></div>
        </div>

        <div
          className="h-[365px] rounded-2xl p-6 bg-white/60 backdrop-blur-md relative
    border border-[#EEEEEE] shadow-[0_8px_30px_rgba(0,0,0,0.04)]
    flex flex-col justify-between group transition-all duration-300"
        >
          <div className="flex justify-end">
            <img
              src="/assets/star.png"
              alt="icon"
              className="w-[100px] md:w-[198px] h-auto absolute md:-top-20 md:-right-10"
            />
          </div>
          <div className="flex items-end gap-4 mt-[40%]">
            <h2 className="font-clash bg-gradient-to-r from-[#FE4A33] to-[#FEAEA4] text-6xl md:text-8xl bg-clip-text text-transparent drop-shadow-lg leading-none">
              <Counter target={12} suffix="+" />
            </h2>
            <span className="font-clash font-semibold text-3xl md:text-4xl text-gray-800 mt-5">
              Industry Reach
            </span>
          </div>
          <p className="font-aileron text-[18px] text-gray-600 mt-7">
            A vibrant portfolio of expertise across industries
          </p>
          <div className="absolute bottom-0 left-0 w-full border-b-4 border-transparent group-hover:border-red-500 transition-all duration-300"></div>
        </div>

        <div
          className="h-[365px] rounded-2xl p-6 bg-white/60 backdrop-blur-md relative
    border border-[#EEEEEE] shadow-[0_8px_30px_rgba(0,0,0,0.04)]
    flex flex-col justify-between group transition-all duration-300"
        >
          <div className="flex justify-end">
            <img
              src="/assets/Mask group 6.png"
              alt="icon"
              className=" w-[100px] md:w-[198px] h-auto absolute md:-top-5"
            />
          </div>
          <div className="flex items-end gap-4 mt-[40%]">
            <h2 className="font-clash bg-gradient-to-r from-[#FE4A33] to-[#FEAEA4] text-6xl md:text-8xl bg-clip-text text-transparent drop-shadow-lg leading-none">
              <Counter target={12} suffix="+" />
            </h2>
            <span className="font-clash font-semibold text-3xl md:text-4xl text-gray-800 mt-5">
              Industry Reach
            </span>
          </div>
          <p className="font-aileron text-[18px] text-gray-600 mt-7">
            A vibrant portfolio of expertise across industries
          </p>
          <div className="absolute bottom-0 left-0 w-full border-b-4 border-transparent group-hover:border-red-500 transition-all duration-300"></div>
        </div>

        <div
          className="h-[365px] rounded-2xl p-6 bg-white/60 backdrop-blur-md relative
    border border-[#EEEEEE] shadow-[0_8px_30px_rgba(0,0,0,0.04)]
    flex flex-col justify-between group transition-all duration-300"
        >
          <div className="flex justify-end">
            <img
              src="/assets/slinder.png"
              alt="icon"
              className="w-[100px] md:w-[198px] h-auto absolute md:-top-5"
            />
          </div>
          <div className="flex items-end gap-4 mt-[40%]">
            <h2 className="font-clash bg-gradient-to-r from-[#FE4A33] to-[#FEAEA4] text-6xl md:text-8xl bg-clip-text text-transparent drop-shadow-lg leading-none">
              <Counter target={12} suffix="+" />
              {/*   12+ */}
            </h2>
            <span className="font-clash font-semibold text-3xl md:text-4xl text-gray-800 mt-5">
              Industry Reach
            </span>
          </div>
          <p className="font-aileron text-[18px] text-gray-600 mt-7">
            A vibrant portfolio of expertise across industries
          </p>
          <div className="absolute bottom-0 left-0 w-full border-b-4 border-transparent group-hover:border-red-500 transition-all duration-300"></div>
        </div>
        <div
          className="h-[365px] rounded-2xl p-6 bg-white/60 backdrop-blur-md relative
    border border-[#EEEEEE] shadow-[0_8px_30px_rgba(0,0,0,0.04)]
    flex flex-col justify-between group transition-all duration-300"
        >
          <div className="flex justify-end">
            <img
              src="/assets/dna.png"
              alt="icon"
              className="w-[100px] md:w-[198px] h-auto absolute md:-top-5"
            />
          </div>
          <div className="flex items-end gap-4 mt-[40%]">
            <h2 className="font-clash bg-gradient-to-r from-[#FE4A33] to-[#FEAEA4] text-6xl md:text-8xl bg-clip-text text-transparent drop-shadow-lg leading-none">
              <Counter target={12} suffix="+" />
            </h2>
            <span className="font-clash font-semibold text-3xl md:text-4xl text-gray-800 mt-5">
              Industry Reach
            </span>
          </div>
          <p className="font-aileron text-[18px] text-gray-600 mt-7">
            A vibrant portfolio of expertise across industries
          </p>
          <div className="absolute bottom-0 left-0 w-full border-b-4 border-transparent group-hover:border-red-500 transition-all duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
