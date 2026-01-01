const StatCard = ({ icon, iconClass, value, title }) => {
  return (
    <div
      className="h-[365px] rounded-2xl p-6 bg-white/60 backdrop-blur-md relative
      border border-[#EEEEEE] shadow-[0_8px_30px_rgba(0,0,0,0.04)]
      flex flex-col justify-between overflow-hidden"
    >
   
      <img
        src={icon}
        alt="icon"
        className={iconClass}
      />

    
      <div>
        <div className="flex items-center gap-4">
          <h2 className="font-clash text-[86px] text-[#FE8C7A] leading-none">
            {value}
          </h2>
          <span className="font-clash text-[32px] font-medium">
            {title}
          </span>
        </div>

        <p className="font-aileron text-[18px] text-[#6B6B6B] mt-3 max-w-[280px]">
          A vibrant portfolio of expertise across industries
        </p>
      </div>
    </div>
  );
};

export default StatCard;
