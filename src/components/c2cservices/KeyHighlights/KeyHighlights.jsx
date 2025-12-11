import React from "react";
import { FaStar } from "react-icons/fa";

const KeyHighlights = ({ heading, points }) => {
  const isOdd = points.length % 2 !== 0;
  const lastIndex = points.length - 1;

  return (
    <section className="w-full py-20 bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#1a365d] text-white font-sans relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-400 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-400 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-300 via-teal-500 to-blue-600 bg-clip-text text-transparent py-2">
            {heading}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 via-teal-400 to-blue-500 rounded-full mx-auto my-2"></div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {points.map((point, index) => {
            const isLastOdd = isOdd && index === lastIndex;

            return (
              <div
                key={index}
                className={`group p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 
                  hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-left
                  ${isLastOdd ? "sm:col-span-2 sm:mx-auto sm:w-1/2" : ""}
                `}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-teal-400 to-blue-500 text-indigo-950">
                    <FaStar className="text-base" />
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {point}
                  </p>
                </div>
                {/* <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {point}
                </p> */}
                <div className="relative group">
                  {/* Your main content here */}

                  <div className="absolute left-0 h-1 w-0 group-hover:w-full mt-4 bg-gradient-to-r from-teal-400 to-blue-500 transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;
