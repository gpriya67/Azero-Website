import Counter from "./Counter";
import Card from "../component/Card";

export const WhyChooseUs = () => {
  return (
    <div>
      <section className="hidden md:block max-w-[1300px] mx-auto px-6 py-5 md:py-20">
        <div className=" flex flex-row gap-10">
          <div className=" w-[566px] h-[365px]">
            <h1 className=" text-[64px] font-clash font-normal  leading-tight mt-[5%] md:mt-[15%]">
              We deliver
              <br />
              <span className="block font-medium text-[80px]  bg-gradient-to-r from-[#FE4A33] to-[#FEAEA4] bg-clip-text text-transparent leading-none">
                Measurable
              </span>
              <span className="block font-medium text-[80px]  bg-gradient-to-r from-[#FE4A33] to-[#FEAEA4] bg-clip-text text-transparent leading-none">
                outcomes
              </span>
            </h1>
          </div>
          <div
            className=" rounded-2xl p-6 bg-white/60 backdrop-blur-md relative w-[360px] h-[365px]
    border border-[#EEEEEE] shadow-[0_8px_30px_rgba(0,0,0,0.04)]
    flex flex-col justify-between group transition-all duration-300"
          >
            <div className="flex relative justify-start w-[198px] h-[198px]">
              <img
                src="/assets/Mask group 5.png"
                alt="icon"
                className="w-full h-auto  absolute -top-10 -left-5"
              />
            </div>
            <div className="flex items-end gap-4 mt-10">
              <h2 className="font-clash font-medium text-[86px] bg-gradient-to-r from-[#FE4A33] to-[#FEAEA4] text-6xl bg-clip-text text-transparent ">
                <Counter target={12} suffix="+" />
              </h2>
              <span className="font-clash font-medium text-[32px] leading-tight">
                Industry Reach
              </span>
            </div>
            <p className="font-aileron font-normal text-[18px] text-[#000000B3] mt-5 ">
              A vibrant portfolio of expertise across industries
            </p>
          </div>
          <div
            className=" rounded-2xl p-6 bg-white/60 backdrop-blur-md relative w-[360px] h-[365px]
    border border-[#EEEEEE] shadow-[0_8px_30px_rgba(0,0,0,0.04)]
    flex flex-col justify-between group transition-all duration-300"
          >
            <div className="flex relative  w-[210px] h-[210px]">
              <img
                src="/assets/star.png"
                alt="icon"
                className="w-full h-auto  absolute -top-28 -right-36"
              />
            </div>
            <div className="flex items-end gap-4 mt-10">
              <h2 className="font-clash font-medium text-[86px] bg-gradient-to-r from-[#FE4A33] to-[#FEAEA4] text-6xl bg-clip-text text-transparent ">
                <Counter target={12} suffix="+" />
              </h2>
              <span className="font-clash font-medium text-[32px] leading-tight">
                Industry Reach
              </span>
            </div>
            <p className="font-aileron font-normal text-[18px] text-[#000000B3] mt-5 ">
              A vibrant portfolio of expertise across industries
            </p>
          </div>
        </div>

        <div className=" flex flex-row justify-between gap-10 mt-10">
          <div
            className=" rounded-2xl p-6 bg-white/60 backdrop-blur-md relative
    border border-[#EEEEEE] shadow-[0_8px_30px_rgba(0,0,0,0.04)]
    flex flex-col justify-between group transition-all duration-300  w-[428px] h-[360px]"
          >
            <div className="flex relative justify-end w-[191px] h-[191px]">
              <img
                src="/assets/Mask group 6.png"
                alt="icon"
                className="w-full h-auto  absolute  -right-40 -top-10"
              />
            </div>
            <div className="flex items-end gap-4 mt-10">
              <h2 className="font-clash font-medium text-[86px] bg-gradient-to-r from-[#FE4A33] to-[#FEAEA4] text-6xl bg-clip-text text-transparent ">
                <Counter target={98} suffix="%" />
              </h2>
              <span className="font-clash font-medium text-[32px] leading-tight">
                Results Retained
              </span>
            </div>
            <p className="font-aileron font-normal text-[18px] text-[#000000B3] mt-5 ">
              A vibrant portfolio of expertise across industries
            </p>
          </div>

          <div
            className=" rounded-2xl p-6 bg-white/60 backdrop-blur-md relative
    border border-[#EEEEEE] shadow-[0_8px_30px_rgba(0,0,0,0.04)]
    flex flex-col justify-between group transition-all duration-300  w-[428px] h-[360px]"
          >
            <div className="flex relative justify-end w-[172px] h-[175px]">
              <img
                src="/assets/slinder.png"
                alt="icon"
                className="w-full h-auto  absolute  -right-40 -top-5"
              />
            </div>
            <div className="flex items-end gap-4 mt-10">
              <h2 className="font-clash font-medium text-[86px] bg-gradient-to-r from-[#FE4A33] to-[#FEAEA4] text-6xl bg-clip-text text-transparent ">
                <Counter target={100} suffix="+" />
              </h2>
              <span className="font-clash font-medium text-[32px] leading-tight">
                Clients Retained
              </span>
            </div>
            <p className="font-aileron font-normal text-[18px] text-[#000000B3] mt-5 ">
              A vibrant portfolio of expertise across industries
            </p>
          </div>

          <div
            className=" rounded-2xl p-6 bg-white/60 backdrop-blur-md relative
    border border-[#EEEEEE] shadow-[0_8px_30px_rgba(0,0,0,0.04)]
    flex flex-col justify-between group transition-all duration-300  w-[428px] h-[360px]"
          >
            <div className="flex relative justify-end w-[130px] h-[220px]">
              <img
                src="/assets/dna.png"
                alt="icon"
                className="w-full h-auto  absolute  -right-56 -top-10"
              />
            </div>
            <div className="flex items-end gap-4 mt-10">
              <h2 className="font-clash font-medium text-[86px] bg-gradient-to-r from-[#FE4A33] to-[#FEAEA4] text-6xl bg-clip-text text-transparent ">
                <Counter target={4.5} suffix="+" />
              </h2>
              <span className="font-clash font-medium text-[32px] leading-tight">
                Rating
              </span>
            </div>
            <p className="font-aileron font-normal text-[18px] text-[#000000B3] mt-5 ">
              A vibrant portfolio of expertise across industries
            </p>
          </div>
        </div>
      </section>
      <section className="block md:hidden max-w-[1300px] mx-auto px-4 sm:px-6 py-10 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="w-full">
            <h1 className="font-clash font-normal leading-tight mt-6 text-[50px] ">
              We deliver
              <br />
              <span className="block font-medium bg-gradient-to-r from-[#FE4A33] to-[#FEAEA4] bg-clip-text text-transparent leading-none text-[60px] sm:text-[64px] lg:text-[80px]">
                Measurable
              </span>
              <span className="block font-medium bg-gradient-to-r from-[#FE4A33] to-[#FEAEA4] bg-clip-text text-transparent leading-none text-[60px] sm:text-[64px] lg:text-[80px]">
                outcomes
              </span>
            </h1>
          </div>

          <Card
            img="/assets/Mask group 5.png"
            alt="mask"
            imgClass="-top-10 -left-5"
            value={<Counter target={12} suffix="+" />}
            label="Industry Reach"
          />

          <Card
            img="/assets/star.png"
            alt="star"
            imgClass="-top-28 -right-36"
            value={<Counter target={12} suffix="+" />}
            label="Industry Reach"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <Card
            img="/assets/Mask group 6.png"
            alt="mask"
            imgClass="-right-40 -top-10"
            value={<Counter target={98} suffix="%" />}
            label="Results Retained"
          />

          <Card
            img="/assets/slinder.png"
            alt="slinder"
            imgClass="-right-40 -top-5"
            value={<Counter target={100} suffix="+" />}
            label="Clients Retained"
          />

          <Card
            img="/assets/dna.png"
            alt="dna"
            imgClass="-right-40 -top-10"
            value={<Counter target={4.5} suffix="+" />}
            label="Rating"
          />
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
