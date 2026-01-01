import React, { useEffect, useState } from "react";

const testimonials = [
  {
    text: `Teamollo delivered the site within the timeline as they requested.
In the end, the client found a 50% increase in traffic within days
since its launch. They also had an impressive ability to use
technologies that the company hadn't used, which have also
proved to be easy to use and reliable.`,
    name: "Anton de Swardt",
    img: "https://i.pravatar.cc/40?img=3",
    rating: 5,
  },
  {
    text: `Teamollo delivered the site within the timeline as they requested.
In the end, the client found a 50% increase in traffic within days
since its launch. They also had an impressive ability to use
technologies that the company hadn't used, which have also
proved to be easy to use and reliable.`,
    name: "Anton de Swardt",
    img: "https://i.pravatar.cc/40?img=3",
    rating: 5,
  },
  {
    text: `Teamollo delivered the site within the timeline as they requested.
In the end, the client found a 50% increase in traffic within days
since its launch. They also had an impressive ability to use
technologies that the company hadn't used, which have also
proved to be easy to use and reliable.`,
    name: "Anton de Swardt",
    img: "https://i.pravatar.cc/40?img=3",
    rating: 5,
  },
  {
    text: `Teamollo delivered the site within the timeline as they requested.
In the end, the client found a 50% increase in traffic within days
since its launch. They also had an impressive ability to use
technologies that the company hadn't used, which have also
proved to be easy to use and reliable.`,
    name: "Anton de Swardt",
    img: "https://i.pravatar.cc/40?img=3",
    rating: 5,
  },
];


const TestimonialGrid = () => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let timer;

    if (visibleCount < testimonials.length) {
      timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 800);
    } else {
      timer = setTimeout(() => {
        setVisibleCount(0);
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [visibleCount]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {testimonials.map((item, i) => (
        <div
          key={i}
          className={`bg-white rounded-3xl px-6 py-7 shadow-md transition-all duration-700
            ${
              i < visibleCount
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-6 scale-95"
            }
          `}
        >
          <p className="text-[16px] text-black leading-relaxed">
            {item.text}
          </p>

          <div className="flex items-center gap-4 mt-6">
            <img
              src={item.img}
              className="w-10 h-10 rounded-full"
              alt={item.name}
            />
           <div className=" flex flex-col">
             <p className="text-black font-medium">{item.name}</p>
            <div className="flex gap-1 mt-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <img
                      key={i}
                      src="/assets/star-1.svg"
                      alt="star"
                      className="w-[12px] h-[12px]"
                    />
                  ))}
                </div>
           </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialGrid;
