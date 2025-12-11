import React from "react";
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaBuilding,
  FaUserTie,
  FaNetworkWired,
  FaMoneyBillWave,
  FaCalendarCheck,
  FaClipboardCheck
} from "react-icons/fa";

const iconList = [
  <FaUniversity size={24} />,
  <FaBuilding size={24} />,
  <FaUserTie size={24} />,
  <FaNetworkWired size={24} />,
  <FaMoneyBillWave size={24} />,
  <FaCalendarCheck size={24} />,
  <FaClipboardCheck size={24} />
];

const iconColors = [
  "from-pink-400 to-red-500",
  "from-yellow-400 to-orange-500",
  "from-green-400 to-emerald-500",
  "from-sky-400 to-blue-500",
  "from-fuchsia-400 to-pink-500",
  "from-teal-400 to-cyan-500",
  "from-purple-400 to-indigo-500"
];

const WhyChooseInfoziant = ({ heading, points, description, image }) => {
  return (
    <section className="w-full bg-gray-50 py-20 px-4 sm:px-8 lg:px-16 text-gray-800 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 text-transparent bg-clip-text text-center"
        >
          {heading}
        </motion.h2>

        <div className="w-20 h-1 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 rounded-full mx-auto my-6"></div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-14 text-center"
        >
          {description}
        </motion.p>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side with image */}
          
          {/* Right side with points */}
          <div className="flex-1 space-y-6">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center group"
              >
                <div
                  className={`text-white p-3 rounded-full bg-gradient-to-br ${iconColors[index % iconColors.length]} transition-all duration-300 group-hover:scale-110 shadow-md mr-4 flex-shrink-0`}
                >
                  {iconList[index % iconList.length]}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{point}</h4>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full md:w-1/2 h-full"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={image}
                  alt="Dynamic Content"
                  className="w-3/4 h-3/4 object-cover object-center rounded-2xl"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br from-teal-400/10 to-blue-500/10"></div>
        <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-gradient-to-br from-purple-400/10 to-pink-500/10"></div>
      </div>
    </section>
  );
};

export default WhyChooseInfoziant;