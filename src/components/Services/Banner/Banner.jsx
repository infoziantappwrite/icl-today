import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import sampleGif from "../../../assests/Images/Ourservice/banner.png";
import InquiryFormSerivies from "../InquiryFormSerivies"; // Adjust path as needed

const Banner = () => {
  const [isGifVisible, setIsGifVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsGifVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setIsGifVisible(false);
    }
  }, [isInView]);

  return (
    <>
      <section
        ref={ref}
        className="relative px-8 sm:px-8 md:px-12 lg:px-20 lg:py-32 py-12 w-full text-white overflow-hidden"
      >
        {/* Background and content */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-[#0e223f] to-[#102e56]">
          <div className="absolute top-20 left-10 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-blue-500 opacity-10 blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-teal-300 opacity-10 blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full h-full max-w-7xl mx-auto"
        >
          {/* Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 mb-10 lg:mb-0">
            <div className="inline-block px-4 py-1 bg-blue-600/20 rounded-full border border-blue-400/30">
              <span className="text-blue-300 text-sm font-medium">Innovative Tech & Business Services</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
              <span className="block bg-gradient-to-r pb-6 from-teal-300 to-blue-500 bg-clip-text text-transparent">
                Web & App Development
              </span>
            </h1>

            <p className="text-gray-300 text-md max-w-xl mx-auto lg:mx-0">
              Turning Ideas into Impactful Digital Experiences — Our expert team delivers scalable, secure, and high-performance web and app solutions tailored to your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#get-started"
                className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-400 text-white font-semibold rounded-full shadow-lg hover:shadow-blue-500/20 transition-all duration-300 text-center"
              >
                Get Started
              </a>
              <button
                onClick={() => setShowForm(true)}
                className="px-6 sm:px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 text-center"
              >
                Schedule a Call
              </button>
            </div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isGifVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full lg:w-1/3 flex justify-center mx-auto lg:mx-0 lg:justify-center"
          >
            <img
              src={sampleGif}
              alt="Digital Solutions Illustration"
              className="w-full max-w-xs sm:max-w-md md:max-w-lg h-auto"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Inquiry Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
          {showForm && <InquiryFormSerivies closeModal={() => setShowForm(false)} />}

        </div>
      )}
    </>
  );
};

export default Banner;
