const Card = ({ img, imgClass, value, label }) => {
  return (
    <div
      className="
        relative rounded-2xl p-6
        bg-white/60 backdrop-blur-md
        border border-[#EEEEEE]
        shadow-[0_8px_30px_rgba(0,0,0,0.04)]
        flex flex-col justify-between
        transition-all duration-300
        w-full h-[320px] sm:h-[360px]
      "
    >
     
      <div className="relative w-[180px] h-[180px]">
        <img
          src={img}
          alt="icon"
          className={`absolute ${imgClass} w-full h-auto`}
        />
      </div>

    
      <div className="flex items-end gap-3 mt-6">
        <h2 className="font-clash font-medium bg-gradient-to-r from-[#FE4A33] to-[#FEAEA4] bg-clip-text text-transparent text-[56px] sm:text-[72px] lg:text-[86px]">
          {value}
        </h2>
        <span className="font-clash font-medium text-[20px] sm:text-[26px] lg:text-[32px] leading-tight">
          {label}
        </span>
      </div>

      
      <p className="font-aileron text-[16px] sm:text-[18px] text-[#000000B3] mt-4">
        A vibrant portfolio of expertise across industries
      </p>
    </div>
  );
};

export default Card;
