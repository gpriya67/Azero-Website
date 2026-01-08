import { motion } from "framer-motion";

export default function WhiteStackLayers() {
  return (
    <div>
      <section className="hidden  md:flex  py-10 justify-center">
        <div className="relative w-[1364px] h-[700px] overflow-visible">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 80, transition: { duration: 0.5 } },
            }}
            className="absolute bottom-0 left-0 right-0 mx-auto h-[460px] bg-white rounded-[28px] shadow-md"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 50,
                transition: { duration: 0.5, delay: 0.15 },
              },
            }}
            className="absolute bottom-0 left-0 right-0 mx-auto h-[500px] bg-white rounded-[28px] shadow-lg"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: {
                opacity: 1,
                y: 25,
                transition: { duration: 0.5, delay: 0.3 },
              },
            }}
            className="absolute bottom-0 left-0 right-0 mx-auto h-[530px] bg-white rounded-[28px] shadow-xl"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 0 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.45 },
              },
            }}
            className="absolute inset-x-0 top-0 bottom-0 mx-auto bg-white rounded-[28px] shadow-2xl h-[700px] p-10"
          >
            <div className="w-full max-w-[1364px] h-auto lg:h-[633px] mx-auto px-4 sm:px-6">
              <div className="mt-5">
                <h1 className="font-clash text-primary leading-none font-thin text-[67px]">
                  Designing the{" "}
                  <span className="font-semibold font-clash">
                    Best Websites
                  </span>
                  <br />
                  <span className="font-normal">
                    for All Businesses Nationwide
                  </span>
                </h1>
              </div>

              <div className="font-aileron font-normal text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] text-[#00000052] mt-6 sm:mt-8 md:mt-10 w-full lg:max-w-[817px] leading-relaxed">
                From California to New York, our team has worked with clients
                across the U.S. to deliver websites that perform. Whether you’re
                a local startup or a national brand, Hungry Ram provides the
                same creativity, reliability and results-driven approach.
              </div>

              <div className="flex flex-col lg:flex-row mt-8 sm:mt-10 gap-6 lg:gap-10">
                <div className="flex-1">
                  <div className="font-clash font-normal text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] text-[#00000052] leading-snug">
                    UI/UX Design | UI/UX Consulting | UX Research | Usability
                    Testing | Design System | Heuristic Evaluation | Interaction
                    Design.
                  </div>
                  <div className="w-[241px] h-[55px] mt-4 sm:mt-[10%]">
                    <button className="px-6 py-3 sm:px-8 sm:py-4 rounded-md bg-primary text-white font-clash font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full h-auto">
                      View all Our Site
                    </button>
                  </div>
                </div>

                <div className="flex justify-end items-end w-[530px] -mt-[7%]">
                  <img
                    src="/assets/image.svg"
                    className="object-contain rounded-lg w-full h-auto"
                    alt="Illustration"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className=" md:hidden  px-4 flex justify-center">
        <div className="relative w-full max-w-[420px] h-[720px]">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 60 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-0 inset-x-0 mx-auto
                     h-[420px] bg-white rounded-[22px] shadow-md"
          />

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 35 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="absolute bottom-0 inset-x-0 mx-auto
                     h-[460px] bg-white rounded-[22px] shadow-lg"
          />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 18 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="absolute bottom-0 inset-x-0 mx-auto
                     h-[500px] bg-white rounded-[22px] shadow-xl"
          />

          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute inset-0 bg-white rounded-[22px]
                     shadow-2xl p-5 flex flex-col gap-6"
          >
            <div>
              <h1 className="font-clash text-primary text-[28px] leading-tight">
                Designing the{" "}
                <span className="font-semibold">Best Websites</span>
                <br />
                <span className="font-normal text-[22px]">for Businesses</span>
              </h1>

              <p className="text-[14px] text-[#00000070] mt-4 leading-relaxed">
                We create high-performance websites for startups and growing
                brands across the nation.
              </p>

              <p className="text-[13px] text-[#00000060] mt-4 leading-snug">
                UI/UX Design · UX Research · Design Systems · Usability Testing
              </p>

              <button
                className="mt-6 w-full py-3 rounded-md
                         bg-primary text-white font-semibold shadow-md"
              >
                View Our Work
              </button>
            </div>

            <div className="flex justify-center">
              <img
                src="/assets/image.svg"
                alt="Illustration"
                className="w-full max-w-[260px] object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
