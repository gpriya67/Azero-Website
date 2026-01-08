import Counter from "../component/Counter";

const Home = () => {
  return (
    <div className=" px-4 mt-[10%] md:mt-[5%]  md:px-20 justify-center flex flex-col items-center relative  ">
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/background.svg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-[30px] md:text-[78px] font-normal font-clash leading-10 md:leading-none text-nowrap text-black mt-[20%]">
        Transforming ideas{" "}
        <span className="font-thin text-[#0A0A0A]">into</span>
      </h1>
      <h1 className="text-[20px] md:text-[72px] font-medium font-clash leading-10 md:leading-none text-nowrap">
        Impactful{" "}
        <span
          className="text-[20px] md:text-[72px] font-bold 
        bg-gradient-to-r from-[#FE4A33] to-[#FEAEA4] bg-clip-text text-transparent"
        >
          Tech solutions
        </span>
        <br />
        <div className="text-center font-medium font-clash text-[20px] md:text-[72px]">
          Worldwide.
        </div>
      </h1>

      <div className="flex-row mt-[10%] md:mt-[5%]  md:flex   gap-10">
        {[
          {
            number: "10+",
            label: "Years of Excellence",
            icon: "/assets/star.svg",
          },
          {
            number: "92%",
            label: "Success Rate",
            icon: "/assets/Flame.svg",
          },
          {
            number: "100+",
            label: "Thriving Projects",
            icon: "/assets/Vector.svg",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="w-[168px] h-[77px] bg-[#FFF7F7] rounded-2xl relative
             flex items-center p-[6px] gap-[10px]"
          >
            <div className="p-[1px] rounded-2xl bg-gradient-to-br from-[#FE4A33] to-[rgba(255,30,0,0.16)]">
              <div
                className="w-[65px] h-[65px] flex items-center justify-center  
                 text-[20px] font-clash font-semibold
                 bg-gradient-to-r from-[#FE4A33] to-[rgba(255,30,0,0.16)]
                 rounded-2xl text-black text-center"
              >
                <Counter
                  target={parseInt(item.number)}
                  suffix={item.number.replace(/\d/g, "")}
                />
              </div>
            </div>

            <p className="text-[16px] font-clash font-normal leading-tight text-black">
              {item.label}
            </p>

            <div className="absolute -right-3 -top-2 w-[24px] h-[24px]">
              <img src={item.icon} alt="icon" className="w-full h-auto" />
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
    </div>
  );
};

export default Home;
