import React from "react";
import { motion } from "framer-motion";

const BackgroundGlow = () => (
  <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
    <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-400 blur-3xl"></div>
    <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-400 blur-3xl"></div>
  </div>
);

const Achievements = ({ title = "Our Achievements", subtitle = "Explore our key accomplishments", image, achievements = [] }) => {
  return (
    <div className="relative min-h-screen bg-white text-gray-900 px-4 sm:px-6 py-12 overflow-hidden">
      <BackgroundGlow />

      <div className="relative z-10">
        {/* Title Section */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 text-transparent bg-clip-text text-center">
            {title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 rounded-full mx-auto my-6"></div>
          <p className="mt-2 text-gray-600 text-lg font-medium">{subtitle}</p>
        </div>

        {/* Image + Cards Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-y-6 lg:gap-y-0 lg:gap-x-14 max-w-[1500px] mx-auto mt-2">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={image}
              alt="Achievements Visual"
              className="w-[250px] sm:w-[300px] md:w-full  object-contain"
            />
          </div>

          {/* Cards Section */}
          <div className="relative w-full lg:w-1/2">
            {/* Desktop View - Stair Layout */}
            <div className="hidden lg:block relative h-[550px] overflow-visible">
              {achievements.map((item, index) => {
                const totalSteps = achievements.length - 1;
                const maxOffset = 400;
                const stepOffset = (maxOffset / totalSteps) * index;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="absolute group"
                    style={{
                      bottom: `${stepOffset}px`,
                      left: `${stepOffset - 170}px`,
                      zIndex: achievements.length - index,
                    }}
                  >
                    <div
                      className={`flex items-center gap-4 w-[clamp(240px,28vw,320px)] h-[72px] rounded-xl shadow-lg px-5 py-3 bg-gradient-to-r ${item.color} transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}
                    >
                      <div className="text-white text-2xl">{item.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-white">{item.title}</h3>
                        <p className="text-xs text-white/90">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile View - Vertical Stack */}
            <div className="flex flex-col gap-4 lg:hidden">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="group"
                >
                  <div
                    className={`flex items-center gap-4 w-full rounded-xl shadow-lg px-5 py-3 bg-gradient-to-r ${item.color} transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl`}
                  >
                    <div className="text-white text-2xl">{item.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                      <p className="text-xs text-white/90">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
