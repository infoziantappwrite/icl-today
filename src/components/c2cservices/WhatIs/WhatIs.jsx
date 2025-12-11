import React, { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import InquiryFormSerivies from "../../Services/InquiryFormSerivies";

const BackgroundGlow = () => (
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-400 blur-3xl"></div>
    <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-400 blur-3xl"></div>
  </div>
);

const WhatIsCodeChef = ({ heading, subheading, description, image, ctaText }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#1a365d] text-white font-sans overflow-hidden">
      <BackgroundGlow />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-teal-300 via-teal-500 to-blue-500 bg-clip-text text-transparent mb-4">
            {heading}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 via-blue-400 to-blue-500 rounded-full mx-auto my-2"></div>
          <p className="text-xl sm:text-2xl font-medium text-gray-100">
            {subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src={image}
              alt="CodeChef"
              className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-xl transform transition-transform hover:scale-105"
            />
          </div>

          <div>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8">
              {description}
            </p>
            {ctaText && (
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-medium rounded-lg shadow-md hover:opacity-90 hover:shadow-lg transition-all duration-300"
              >
                {ctaText} <ArrowRight className="ml-1 w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Modal Inside the Same Component */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
          <div className="relative bg-white rounded-xl shadow-lg max-w-lg w-full">
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Actual Form */}
            <InquiryFormSerivies closeModal={() => setShowForm(false)} />
          </div>
        </div>
      )}
    </section>
  );
};

export default WhatIsCodeChef;
