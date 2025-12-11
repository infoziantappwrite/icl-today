import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import InquiryFormSerivies from "../../Services/InquiryFormSerivies";

const HowItWorks = ({ steps }) => {
  const iconColors = [
    "from-pink-400 to-red-500",
    "from-yellow-400 to-orange-500",
    "from-green-400 to-emerald-500",
    "from-sky-400 to-blue-500",
    "from-fuchsia-400 to-pink-500",
    "from-teal-400 to-cyan-500",
    "from-purple-400 to-indigo-500"
  ];

  const [showForm, setShowForm] = useState(false);


  return (
    <section className="w-full pt-24 bg-gradient-to-b from-gray-100 to-gray-200 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-white text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent mb-4">
            How It Works
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Follow these simple steps to get started with our service
          </p>
        </div>

        {/* Step Cards */}
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 -z-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {steps.map((step, index) => {
              const colorClass = iconColors[index % iconColors.length];
              const textColorClass = {
                "from-pink-400 to-red-500": "text-red-500",
                "from-yellow-400 to-orange-500": "text-orange-500",
                "from-green-400 to-emerald-500": "text-emerald-500",
                "from-sky-400 to-blue-500": "text-blue-500",
                "from-fuchsia-400 to-pink-500": "text-pink-500",
                "from-teal-400 to-cyan-500": "text-cyan-500",
                "from-purple-400 to-indigo-500": "text-indigo-500"
              }[colorClass];

              const bgColorClass = {
                "from-pink-400 to-red-500": "bg-red-50",
                "from-yellow-400 to-orange-500": "bg-orange-50",
                "from-green-400 to-emerald-500": "bg-emerald-50",
                "from-sky-400 to-blue-500": "bg-sky-50",
                "from-fuchsia-400 to-pink-500": "bg-pink-50",
                "from-teal-400 to-cyan-500": "bg-cyan-50",
                "from-purple-400 to-indigo-500": "bg-indigo-50"
              }[colorClass];

              const hoverBgColorClass = {
                "from-pink-400 to-red-500": "group-hover:bg-red-100",
                "from-yellow-400 to-orange-500": "group-hover:bg-orange-100",
                "from-green-400 to-emerald-500": "group-hover:bg-emerald-100",
                "from-sky-400 to-blue-500": "group-hover:bg-sky-100",
                "from-fuchsia-400 to-pink-500": "group-hover:bg-pink-100",
                "from-teal-400 to-cyan-500": "group-hover:bg-cyan-100",
                "from-purple-400 to-indigo-500": "group-hover:bg-indigo-100"
              }[colorClass];

              return (
                <motion.div
                  key={index}
                  className="relative flex flex-col h-full border border-gray-200 rounded-xl bg-white shadow-lg group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${colorClass} text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border shadow-lg z-10`}>
                    {index + 1}
                  </div>

                  <div className={`flex flex-col h-full items-center rounded-xl shadow-lg p-6 pt-8 border border-transparent hover:shadow-xl transition-all duration-300 text-center group`}>
                    <div className={`p-4 rounded-full ${bgColorClass} ${hoverBgColorClass} mb-6 transition-colors duration-300`}>
                      <div className={`text-4xl ${textColorClass}`}>
                        {step.icon}
                      </div>
                    </div>

                    <h3 className={`text-xl font-bold ${textColorClass} mb-3`}>
                      {step.title}
                    </h3>

                    <p className="text-gray-600 mb-4 flex-grow">
                      {step.description}
                    </p>

                    {step.learnMoreUrl && (
                      <a href={step.learnMoreUrl} className={`inline-flex items-center ${textColorClass} font-medium mt-2 hover:opacity-80`}>
                        Learn more <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {index < steps.length - 1 && (
                    <motion.div
                      className="hidden lg:flex absolute top-1/2 -right-4 transform translate-y-1/2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight
                        className="w-6 h-6 text-blue-800"
                        style={{ filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.7))" }}
                      />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        
      </div>
      <div className="mt-20  text-center bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#1a365d] py-16">
          <h3 className="text-3xl font-semibold text-gray-100 mb-4">
            Ready to Make Your Students Placement-Ready?
          </h3>
          <p className="text-xl text-gray-400 mb-6">
            Start from scratch. Build expertise. Win careers.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="px-8 py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-medium rounded-lg shadow-md hover:opacity-90 hover:shadow-lg transition-all duration-300"
          >
            Start Learning Today
          </button>
      </div>


      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
          <div className="relative bg-white rounded-xl shadow-lg max-w-lg w-full">
            {/* Close button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              ✕
            </button>
            <InquiryFormSerivies closeModal={() => setShowForm(false)} />
          </div>
        </div>
      )}
    </section>
  );
};

export default HowItWorks;
