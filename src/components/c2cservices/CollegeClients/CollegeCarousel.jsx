import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import image1 from "../../../assets/Images/Colleges/1 (1).jpg";
import image2 from "../../../assets/Images/Colleges/1 (2).jpg";
import image3 from "../../../assets/Images/Colleges/1 (3).jpg";
import image4 from "../../../assets/Images/Colleges/1 (4).jpg";
import image5 from "../../../assets/Images/Colleges/1 (5).jpg";
import image6 from "../../../assets/Images/Colleges/1 (6).jpg";
import image7 from "../../../assets/Images/Colleges/1 (7).jpg";
import image8 from "../../../assets/Images/Colleges/1 (8).jpg";
import image9 from "../../../assets/Images/Colleges/1 (9).jpg";

const CollegeClients = ({ heading, description }) => {
  const clients = [
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image4 },
    { id: 5, src: image5 },
    { id: 6, src: image6 },
    { id: 7, src: image7 },
    { id: 8, src: image8 },
    { id: 9, src: image9 },
  ];
  const loopClients = [...clients, ...clients, ...clients];

  const [index, setIndex] = useState(clients.length);

  const slideWidth = 200;
  const visibleCards = 5;
  const centerOffset = 2;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = prev + 1;
        if (next >= clients.length * 2) {
          return clients.length;
        }

        return next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [clients.length]);

  const visibleIndex = (index + centerOffset) % clients.length;

  const goToSlide = (i) => {
    setIndex(clients.length + i - centerOffset);
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-[#0a192f] via-[#112240] to-[#1a365d]">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500 opacity-5" />
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-teal-400 opacity-5" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-purple-500 opacity-5" />

        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-[0.03]"
          style={{
            backgroundSize: "20px 20px",
            backgroundImage:
              "linear-gradient(to right, gray 1px, transparent 1px), linear-gradient(to bottom, gray 1px, transparent 1px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-900/30 text-blue-400 text-sm font-medium mb-4">
            Trusted By
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
            {heading}
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto" />

          <p className="mt-6 text-blue-100/80 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Slider */}
        <div
          className="relative mx-auto overflow-hidden"
          style={{ width: slideWidth * visibleCards }}
        >
          <motion.div
            className="flex gap-6"
            animate={{ x: -(index * slideWidth) }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ width: loopClients.length * slideWidth }}
          >
            {loopClients.map((client, i) => {
              const realIndex = i % clients.length;

              return (
                <div
                  key={i}
                  className="flex justify-center items-center"
                  style={{ width: slideWidth }}
                >
                  <div
                    className={`relative overflow-hidden mx-auto transition-all duration-700
          ${
            realIndex === visibleIndex
              ? "bg-gradient-to-b from-blue-800/30 to-teal-800/20 shadow-lg shadow-teal-900/20 scale-110 border-2 border-gray-400 rounded-3xl"
              : "bg-blue-900/20 scale-95 opacity-70 border border-white/10 rounded-xl"
          }`}
                    style={{ width: "150px", height: "150px" }}
                  >
                    <img
                      src={client.src}
                      className={`w-full h-full object-cover transition-all duration-700 rounded-2xl ${
                        realIndex === visibleIndex ? "scale-110" : "scale-100"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* === Dots === */}
        <div className="flex justify-center mt-8 gap-1.5">
          {clients.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === visibleIndex
                  ? "bg-teal-400 w-6"
                  : "bg-blue-600/40 hover:bg-blue-500/60 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollegeClients;
