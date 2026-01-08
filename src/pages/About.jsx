import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-10 lg:px-20">
      <div className="text-center sm:text-left mb-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#FE4A33] to-[#FEAEA4] bg-clip-text text-transparent"
        >
          Why Azero Tech
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 text-lg sm:text-xl mt-4 max-w-3xl mx-auto sm:mx-0"
        >
          Our commitment to quality and innovation sets Azero Tech apart. We
          focus on delivering customized solutions that drive business growth
          and ensure customer satisfaction.
        </motion.p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-10 mb-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 w-full max-w-lg"
        >
          <img
            src="/assets/about-us-1.webp"
            alt="About Azero Tech"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex-1"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FE4A33] to-[#FEAEA4] bg-clip-text text-transparent">
            About Azero Tech
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
            At Azero Tech, we combine innovation with a personalized approach to
            deliver custom solutions that set you apart. Our team’s dedication
            to quality and creativity ensures your business stands out in a
            crowded market. Partner with us for a seamless blend of technology
            and design expertise.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center sm:text-left mt-10"
      ></motion.div>
    </section>
  );
};

export default About;
