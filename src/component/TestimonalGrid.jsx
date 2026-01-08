import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: `Teamollo delivered the site within the requested timeline.
After launch, the client experienced a 50% increase in traffic
within days. They also demonstrated an impressive ability to work
with technologies the company had not previously used, which
proved to be reliable and easy to manage.`,
    img: "https://i.pravatar.cc/40?img=3",
    rating: 5,
  },

  {
    text: `While the copany wishes they
had more time to work out the
kinks with the Teamollo, they
are quite happy with the result
of the project. The resulting
website that the teamdevoloped
is fast and the communication
with the vender was very good.
The company will work with
them again.`,
    name: "Anton de Swardt",
    img: "https://i.pravatar.cc/40?img=4",
    rating: 5,
  },
  {
    text: `Teamollo delivered the site within the requested timeline.
After launch, the client experienced a 50% increase in traffic
within days. They also demonstrated an impressive ability to work
with technologies the company had not previously used, which
proved to be reliable and easy to manage.`,
    name: "Anton de Swardt",
    img: "https://i.pravatar.cc/40?img=5",
    rating: 5,
  },

  {
    text: `Teamollo of owrk , our brand
now has the image we were
looking for - playful yet professio
-nals. We have recived positive
from partners , the team, and
our community to the new look
of our Brand!`,
    name: "Anton de Swardt",
    img: "https://i.pravatar.cc/40?img=6",
    rating: 5,
  },
];

const TestimonialGrid = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div>
      <section className="py-10" id="testimonials">
        <div className="w-full mx-auto px-4">
          <motion.div
            className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-4
    gap-5
    place-items-center
  "
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            {testimonials.map((item, index) => {
              const isDown = index % 2 !== 0;
              const downOffset = isDown ? 50 : 0;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    marginTop: isDown ? 32 : 0,
                    marginTop: downOffset,
                  }}
                  className="
          bg-white
          rounded-3xl
          w-[321px]
          h-[415px]
          p-5
          shadow-lg
          flex
          flex-col
        "
                >
                  <p className="text-gray-700 text-[16px] leading-relaxed flex-1">
                    {item.text}
                  </p>

                  <div className="mt-6 border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />

                      <div className="flex flex-col gap-1">
                        <p className="text-gray-900 font-medium leading-tight">
                          {item.name}
                        </p>
                        <div className="flex gap-1">
                          {[...Array(item.rating)].map((_, i) => (
                            <img
                              key={i}
                              src="/assets/star-1.svg"
                              alt="star"
                              className="w-3 h-3"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      <div className=" flex justify-center items-center mt-10 gap-3">
        <div>
          <img src="/assets/forward.svg" alt="forward" onClick={prevSlide} />
        </div>
        <div>
          <img src="/assets/back arrow.svg" alt="back" onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialGrid;
