import React from "react";

const COLORS = [
  "from-pink-400 to-red-500",
  "from-orange-400 to-yellow-500",
  "from-yellow-400 to-green-400",
  "from-green-400 to-teal-400",
  "from-teal-400 to-blue-400",
  "from-blue-400 to-indigo-400",
  "from-indigo-400 to-purple-400",
  "from-purple-400 to-pink-400",
];

const BackgroundGlow = () => (
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-400 blur-3xl"></div>
    <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-400 blur-3xl"></div>
  </div>
);

const Whatweoffer = ({ heading, points, image }) => {
  return (
    <section className="relative w-full py-16 sm:py-20 bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#1a365d] text-white font-sans overflow-hidden">
      <BackgroundGlow />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-teal-300 via-teal-500 to-blue-600 bg-clip-text text-transparent">
            {heading}
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-teal-400 via-teal-400 to-blue-500 rounded-full mx-auto my-2" />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
          {/* Left-side Image */}
          <div className="flex items-center justify-center">
            <img
              src={image}
              alt="What we offer"
              className="w-10/12 sm:w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl transform transition-transform hover:scale-105"
            />
          </div>

          {/* Points List */}
          <div className="space-y-6 sm:space-y-8">
            {points.map((point, index) => (
              <PointItem key={index} point={point} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PointItem = ({ point, index }) => {
  const color = COLORS[index % COLORS.length];

  return (
    <div className="flex items-start gap-4 group transition-all duration-300">
      <div
        className={`min-w-12 min-h-12 w-12 h-12 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 transition duration-300`}
      >
        {index + 1}
      </div>
      <p className="text-base sm:text-lg font-medium leading-relaxed hover:text-teal-300 transition duration-300">
        {point}
      </p>
    </div>
  );
};

export default Whatweoffer;
