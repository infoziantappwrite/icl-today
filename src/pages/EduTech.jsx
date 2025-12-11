import React from "react";
import Whatweoffer from "../components/c2cservices/Whatweoffer/Whatweoffer";
import WhatweImage from "../assets/Images/edutech/whatWedo.jpg";
import { motion } from "framer-motion";
import InfoziantJourney from "../components/c2cservices/InfoziantJourney/InfoziantJourney";
import WhatImage from "../assets/Images/Banner/offer6.png";
import ConsultationFormForCo from "../pages/ConsultationFormForCo";
import { FaUniversity, FaUserGraduate, FaHandshake } from "react-icons/fa";
import CombinedSection from "../components/c2cservices/CombinedSection/CombinedSection";
import BannerCarousel from "../components/Banner/BannerCarousel";

const Edutech_Platform = () => {
  const offerHeading = "What We Offer";
  const offerPoints = [
    "AI-powered personalized learning journey",
    "Skill-building modules with real-time feedback",
    "Mock tests, coding assessments, and AI interviews",
    "Seamless transition from learning to hiring",
    "Recruiter access to verified candidate pool",
  ];

  return (
    <div>
      <BannerCarousel />

      <Whatweoffer
        heading={offerHeading}
        points={offerPoints}
        image={WhatImage}
      />

      <CombinedSection />

      <div id="get-started">
        <InfoziantJourney />
      </div>

      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left Content with scroll-triggered fade-in */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Who Is It For?
            </h2>

            <div className="space-y-6 text-gray-700 text-lg">
              <div className="flex items-start gap-3">
                <FaUniversity className="text-2xl text-blue-500 mt-1" />
                <p>
                  Colleges & Universities looking to elevate placement outcomes
                </p>
              </div>
              <div className="flex items-start gap-3">
                <FaUserGraduate className="text-2xl text-green-500 mt-1" />
                <p>Students preparing for their next big opportunity</p>
              </div>
              <div className="flex items-start gap-3">
                <FaHandshake className="text-2xl text-purple-500 mt-1" />
                <p>Recruiters seeking verified talent without the noise</p>
              </div>
            </div>
          </motion.div>

          {/* Right GIF Section with scroll-triggered fade-in */}
          <motion.div
            className="bg-white flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              src={WhatweImage}
              alt="Recruiters"
              className="w-full max-w-md h-auto"
            />
          </motion.div>
        </div>
      </section>
      <ConsultationFormForCo />
    </div>
  );
};

export default Edutech_Platform;
