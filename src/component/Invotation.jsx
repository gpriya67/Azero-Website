import { useRef, useState } from "react";

const industries = [
  { id: "01", title: "Ecommerce" },
  {
    id: "02",
    title: "Fintech",
    desc: "Gather information about your business, its structure, goals and policies.",
  },
  { id: "03", title: "Healthcare" },
  { id: "04", title: "Edutech" },
  { id: "05", title: "Enterprise & Logistics" },
  { id: "06", title: "Real Estate" },
  { id: "07", title: "Travel & Hospitality" },
];

const Invotation = () => {
  const [active, setActive] = useState("02");
  const [hovered, setHovered] = useState(null);
  const containerRef = useRef(null);

  const dragState = useRef({ isDragging: false, startX: 0, scrollLeft: 0 });

  const handleDragStart = (e) => {
    e.stopPropagation();
    const container = containerRef.current;
    dragState.current.isDragging = true;
    dragState.current.startX = e.pageX;
    dragState.current.scrollLeft = container.scrollLeft;

    e.target.style.cursor = "grabbing";
  };

  const handleDragEnd = (e) => {
    dragState.current.isDragging = false;
    e.target.style.cursor = "grab";
  };

  const handleDrag = (e) => {
    const container = containerRef.current;
    if (!dragState.current.isDragging) return;
    e.preventDefault();
    const walk = (e.pageX - dragState.current.startX) * 1.2;
    container.scrollLeft = dragState.current.scrollLeft - walk;
  };

  return (
    <div className=" w-screen bg-[#242124] mt-[10%]">
      <div className=" w-full bg-[#242124]  mt-[5%] ">
        <div className="hidden md:flex justify-center w-full">
          <div className="w-[1440px] h-[953px]  px-20 py-16">
            <div className="flex justify-between items-start gap-12 mb-14">
              <div>
                <h1 className="leading-[1.05]">
                  <span className="block text-[#FFFFFF] text-[64px] font-clash font-light">
                    Innovative Thinking
                  </span>
                  <span className="block text-white text-[82px] text-nowrap font-clash font-medium ">
                    Proven Execution
                  </span>
                </h1>
              </div>

              <p className="w-[547px] h-[136px] text-[22px] font-aileron text-white leading-8">
                Our cross-functional teams combine strategic insight with
                technical excellence to build scalable digital solutions that
                solve real business challenges and drive measurable growth.
              </p>
            </div>

            <div className="flex justify-between gap-6">
              {industries.map((item) => {
                const isActive = active === item.id;
                const isHovered = hovered === item.id;

                return (
                  <div
                    key={item.id}
                    onClick={() => setActive(item.id)}
                    onMouseEnter={() => setHovered(item.id)}
                    onMouseLeave={() => setHovered(null)}
                    className={`relative cursor-pointer transition-all duration-500 ease-in-out
    rounded-2xl border border-white/10
    bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] 
    ${isActive ? "w-[360px] h-[517px] p-8" : "w-[120px] h-[517px] p-4"}
    flex flex-col`}
                  >
                    <span
                      className={`text-white italic font-aileron font-medium transition-all duration-500
      ${isActive ? "text-[64px]" : "text-[24px]"}`}
                    >
                      {item.id}.
                    </span>

                    {isActive ? (
                      <>
                        <h3 className="text-[#FFFFFF] text-[30px] font-medium font-clash mt-4">
                          {item.title}
                        </h3>

                        <p className=" font-aileron font-normal text-[16px] text-[#FFFFFFB2] mt-4 leading-relaxed">
                          {item.desc}
                        </p>
                      </>
                    ) : (
                      <div className="flex-1 flex items-center justify-center">
                        <span className="text-gray-300 text-sm tracking-wide rotate-90 whitespace-nowrap">
                          {item.title}
                        </span>
                      </div>
                    )}

                    {hovered === item.id && (
                      <div
                        onMouseDown={handleDragStart}
                        onMouseUp={handleDragEnd}
                        className="absolute bottom-6 left-1/2 -translate-x-1/2
        text-white text-xs tracking-widest cursor-grab
        active:cursor-grabbing select-none"
                      >
                        DRAG →
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invotation;
