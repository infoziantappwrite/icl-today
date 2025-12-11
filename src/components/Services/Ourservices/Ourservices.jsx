import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutGrid,
  Smartphone,
  Code,
  Zap,
  Link2,
} from "lucide-react";

const services = [
  {
    icon: LayoutGrid,
    title: "Web Development",
    desc: "From static websites to complex web applications, we craft high-performance digital solutions that are responsive, SEO-friendly, and scalable.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "We build Android & iOS applications that offer seamless UX, leveraging native and hybrid frameworks to meet performance and market needs.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    desc: "Robust backend (Node.js, Python) meets interactive frontend (React, Next.js) to deliver powerful full-stack solutions tailored to your business.",
    color: "from-green-400 to-emerald-600",
  },
  {
    icon: Zap,
    title: "Progressive Web Apps",
    desc: "PWAs bring native-like performance to web users. Fast-loading, offline-capable apps that work across devices without needing an app store.",
    color: "from-indigo-500 to-fuchsia-600",
  },
  {
    icon: Link2,
    title: "API Development & Integration",
    desc: "We create robust, secure, and scalable APIs and help integrate third-party services for data flow across platforms seamlessly.",
    color: "from-cyan-400 to-blue-600",
  },
];

const OurServices = () => {
  return (
    <section className="bg-gray-950 text-white py-20" id="services-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-[2.5rem] font-bold mb-4 text-center bg-gradient-to-r from-[#15f5ba] to-[#06f] bg-clip-text text-transparent inline-block">
            Our Web & App Development Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Delivering innovative, user-centric solutions for diverse industries and business needs using cutting-edge technology.
          </p>
        </motion.div>

        {/* Services Grid */}
<div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10 sm:justify-items-center">
          <AnimatePresence>
            {services.slice(0, 3).map((service, i) => (
              <motion.div
                key={i}
                className="group relative rounded-2xl shadow-lg bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 p-[2px]"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="relative z-10 rounded-2xl bg-gray-900/80 backdrop-blur-md p-6 group-hover:bg-gray-900/90 h-full flex flex-col justify-start transition duration-300">
                  <div className={`flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-gradient-to-tr ${service.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={28} className="animate-pulse group-hover:animate-none" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition duration-300">
                    {service.desc}
                  </p>
                  <div className={`absolute -inset-px z-0 rounded-2xl bg-gradient-to-tr ${service.color} opacity-10 blur-2xl group-hover:opacity-20 transition duration-300`} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Two Cards */}
        <div className="md:col-span-3 lg:col-span-3 flex flex-col sm:flex-row justify-center gap-10 mt-10">
          <AnimatePresence>
            {services.slice(3).map((service, i) => (
              <motion.div
                key={i}
                className="group relative rounded-2xl shadow-lg bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 p-[2px]"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="relative z-10 rounded-2xl bg-gray-900/80 backdrop-blur-md p-6 group-hover:bg-gray-900/90 h-full flex flex-col justify-start transition duration-300">
                  <div className={`flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-gradient-to-tr ${service.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={28} className="animate-pulse group-hover:animate-none" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition duration-300">
                    {service.desc}
                  </p>
                  <div className={`absolute -inset-px z-0 rounded-2xl bg-gradient-to-tr ${service.color} opacity-10 blur-2xl group-hover:opacity-20 transition duration-300`} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Tech Stack Footer */}
        <motion.div
          className="text-center mt-16 text-gray-400 text-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>
            We use{" "}
            <span className="text-white font-medium bg-gradient-to-r from-[#15f5ba] to-[#06f] bg-clip-text">
              React
            </span>,{" "}
            <span className="text-white font-medium bg-gradient-to-r from-[#15f5ba] to-[#06f] bg-clip-text">
              React Native
            </span>,{" "}
            <span className="text-white font-medium bg-gradient-to-r from-[#15f5ba] to-[#06f] bg-clip-text">
              Flask
            </span>,{" "}
            <span className="text-white font-medium bg-gradient-to-r from-[#15f5ba] to-[#06f] bg-clip-text">
              Node.js
            </span>, and{" "}
            <span className="text-white font-medium bg-gradient-to-r from-[#15f5ba] to-[#06f] bg-clip-text">
              MongoDB
            </span>{" "}
            to build scalable, future-ready applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
