const Produaly = () => {
  const ProudlyIcon = [
    { id: 1, icon: "/assets/slide-logo.svg" },
    { id: 2, icon: "/assets/piax-logo.svg" },
    { id: 3, icon: "/assets/chitra-logo.svg" },
    { id: 4, icon: "/assets/fivea-logo.svg" },
    { id: 5, icon: "/assets/slide-logo.svg" },
    { id: 6, icon: "/assets/anchor-logo.svg" },
    { id: 7, icon: "/assets/ben-logo.svg" },
  ];
  return (
    <div>
      <div className="mt-[20%] md:mt-[10%] flex justify-center items-center">
        <div className="w-[280px] h-[44px] relative p-[2px] rounded-md animated-border">
          <button
            className="
        w-full h-full bg-white rounded-md text-[16px]
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

export default Produaly;
