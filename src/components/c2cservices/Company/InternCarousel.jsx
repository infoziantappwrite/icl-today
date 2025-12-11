import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import EY from "../../../assets/CompanyImages/EYglobal.png";
import Flipkart from "../../../assets/companyimages/Flipkart.png";
import Intel from "../../../assets/companyimages/Intel.png";
import Uber from "../../../assets/companyimages/Uber.png";
import Walmart from "../../../assets/companyimages/Walmart.jpg";
import Atlassian from "../../../assets/companyimages/Atlassian.png";
import BNYMelon from "../../../assets/companyimages/BNY Melon.jpg";
import TexasInstruments from "../../../assets/companyimages/Texas Instruments.jpg";
import TechMahindra from "../../../assets/companyimages/Tech mahindra.png";
import BirlaSoft from "../../../assets/companyimages/Birla soft.jpeg";
import FirstSource from "../../../assets/companyimages/First source.png";
import Spinny from "../../../assets/companyimages/Spinny.jpg";
import Synopsys from "../../../assets/companyimages/Synopsys.png";
import Milliman from "../../../assets/companyimages/Milliman.jpg";
import Juspay from "../../../assets/companyimages/Jus pay.png";
import Hackerearth from "../../../assets/companyimages/Hackerearth.png";
import Unstop from "../../../assets/companyimages/Unstop.png";
import Guidewire from "../../../assets/companyimages/Guidewire.png";
import TEMSTech from "../../../assets/companyimages/TEMS Tech.jpeg";
import Recynergy from "../../../assets/companyimages/Recynergy.jpeg";

const images = [
  EY,
  Flipkart,
  Intel,
  Uber,
  Walmart,
  Atlassian,
  BNYMelon,
  TexasInstruments,
  TechMahindra,
  BirlaSoft,
  FirstSource,
  Spinny,
  Synopsys,
  Milliman,
  Juspay,
  Hackerearth,
  Unstop,
  Guidewire,
  TEMSTech,
  Recynergy,
];

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const logoChunks = chunkArray(images, 4); // 2x2 grid per card

const AUTOPLAY_DELAY = 2000;

const InternCarousel = ({ heading, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const checkIsMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768);
      }
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const totalSlides = logoChunks.length;

  const goToSlide = (index) => {
    setCurrentIndex((index + totalSlides) % totalSlides);
  };

  // Autoplay logic
  useEffect(() => {
    if (isPaused || totalSlides === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, AUTOPLAY_DELAY);

    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  // Which slides to show at once
  const getVisibleSlides = () => {
    if (totalSlides === 0) return [];
    if (isMobile) {
      return [currentIndex];
    }
    const secondIndex = (currentIndex + 1) % totalSlides;
    return [currentIndex, secondIndex];
  };

  const visibleSlides = getVisibleSlides();

  const cardVariants = {
    initial: { opacity: 0, y: 30, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.98 },
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Circle with Blinking Effect (unchanged) */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-200 opacity-20 animate-blink"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-gray-200 text-gray-700 text-xs sm:text-sm font-medium mb-4">
            Trusted By
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {heading}
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Slider wrapper */}
        <div
          ref={sliderRef}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex justify-center gap-4 sm:gap-6">
            <AnimatePresence mode="popLayout">
              {visibleSlides.map((slideIndex, slot) => (
                <motion.div
                  key={`${slideIndex}-${slot}-${isMobile ? "m" : "d"}`}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className={`p-2 sm:p-4 flex justify-center ${
                    isMobile ? "w-full" : "w-1/2"
                  }`}
                >
                  <div className="bg-gray-100 rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 w-full max-w-sm sm:max-w-md min-h-[300px] sm:min-h-[350px]">
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6">
                      {logoChunks[slideIndex].map((src, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-center bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow"
                        >
                          <img
                            src={src}
                            alt={`Partner ${slideIndex * 4 + index + 1}`}
                            className="h-20 sm:h-28 max-w-full object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Dots (similar to react-slick dots) */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalSlides }).map((_, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    isActive
                      ? "bg-blue-500 w-4"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternCarousel;
