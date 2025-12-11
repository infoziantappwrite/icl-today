import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import InquiryFormSerivies from "../../Services/InquiryFormSerivies";

const Banner = ({
  badgeText,
  title,
  description,
  primaryBtnText,
  primaryBtnLink,
  secondaryBtnText,
  secondaryBtnLink,
  image,
  subtitle
}) => {
  const [isGifVisible, setIsGifVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsGifVisible(true);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setIsGifVisible(false);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative px-6 min-h-[80vh] w-full overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white text-gray-900 flex items-center"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 15, -15, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute top-[-60px] left-[-60px] w-72 h-72 bg-blue-300 rounded-full opacity-30 blur-3xl"
        ></motion.div>

        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 10, -10, 0], y: [0, -10, 10, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute bottom-[-80px] right-[-60px] w-80 h-80 bg-blue-400 rounded-full opacity-30 blur-2xl mix-blend-multiply"
        ></motion.div>

        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 opacity-20"
          width="500"
          height="500"
          viewBox="0 0 500 500"
          fill="none"
        >
          <circle
            cx="250"
            cy="250"
            r="200"
            stroke="url(#grad2)"
            strokeWidth="1.5"
            strokeDasharray="8 6"
          />
          <defs>
            <linearGradient id="grad2" x1="0" y1="0" x2="500" y2="500">
              <stop stopColor="#3B82F6" />
              <stop offset="1" stopColor="#14B8A6" />
            </linearGradient>
          </defs>
        </motion.svg>

        <motion.svg
          animate={{ rotate: [12, 14, 10, 12] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-[-80px] right-[-80px] w-[300px] opacity-20"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M0,100 C50,0 150,200 200,100"
            stroke="url(#grad3)"
            strokeWidth="4"
            fill="none"
          />
          <defs>
            <linearGradient id="grad3" x1="0" y1="0" x2="200" y2="200">
              <stop stopColor="#60A5FA" />
              <stop offset="1" stopColor="#2DD4BF" />
            </linearGradient>
          </defs>
        </motion.svg>

        <div className="absolute bottom-6 left-6 space-y-1">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
              className="w-2 h-2 bg-blue-500 rounded-full opacity-50"
            ></motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="block lg:hidden w-full pt-10 pb-10">
          <div className="w-full text-center space-y-4 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-blue-50 to-teal-50 rounded-full border border-blue-200 text-blue-600 text-sm font-medium">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                {badgeText}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold leading-tight"
            >
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                {title}
              </span>
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-md sm:text-lg font-bold leading-tight"
            >
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                {subtitle}
              </span>
            </motion.h1>
          </div>

          {/* Image Section */}
          <div className="w-full flex justify-center relative mb-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-50 via-teal-50 to-blue-50 rounded-3xl blur-xl opacity-70"></div>

            <AnimatePresence>
              {isInView && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 20 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.2,
                  }}
                  className="relative z-10 w-full flex justify-center p-2"
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-full max-w-sm h-auto object-contain rounded-xl shadow-blue-100/100"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Description Section */}
          <div className="w-full text-center space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-2 sm:pt-4"
            >
              <a
                href={primaryBtnLink}
                className="group w-60 mx-auto flex items-center justify-center px-6 py-3 text-sm bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-full shadow-lg hover:shadow-blue-300/40 transition-all duration-300 text-center"
              >
                {primaryBtnText}
              </a>

              <button
                onClick={() => setShowForm(true)}
                className="w-60 sm:w-auto mx-auto px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-gray-800 font-semibold rounded-full hover:bg-white/20 transition-all duration-300 text-center"
              >
                <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                  {secondaryBtnText}
                </span>
              </button>

            </motion.div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:flex-row items-center justify-between w-full">
          {/* Text Section */}
          <div className="w-1/2 text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-blue-50 to-teal-50 rounded-full border border-blue-200 text-blue-600 text-sm font-medium">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                {badgeText}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                {title}
              </span>
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg lg:text-xl font-bold leading-tight"
            >
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                {subtitle}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg max-w-xl leading-relaxed"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-3 justify-start pt-4"
            >
              <a
                href={primaryBtnLink}
                className="group px-8 py-3 text-base bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-full shadow-lg hover:shadow-blue-300/40 transition-all duration-300 text-center"
              >
                <span className="relative z-10">{primaryBtnText}</span>
              </a>
              <button
                onClick={() => setShowForm(true)}
                className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-gray-800 font-semibold rounded-full hover:bg-white/20 transition-all duration-300 text-center"
              >
                <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                  {secondaryBtnText}
                </span>
              </button>
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="w-[48%] flex justify-center relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-50 via-teal-50 to-blue-50 rounded-3xl blur-xl opacity-70"></div>

            <AnimatePresence>
              {isInView && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 20 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.2,
                  }}
                  className="relative z-10 w-full flex justify-center p-2"
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-full max-w-lg h-auto object-contain rounded-xl shadow-blue-100/100"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Inquiry Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
          <InquiryFormSerivies closeModal={() => setShowForm(false)} />
        </div>
      )}
    </section>
  );
};

export default Banner;
