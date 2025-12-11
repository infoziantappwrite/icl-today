import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import  healtcare from "../../../assests/Images/Ourservice/webdev/healthcare.png"
import ecommerce from "../../../assests/Images/Ourservice/webdev/ecommerce.png";
import banking from "../../../assests/Images/Ourservice/webdev/banking.png";
import elearn from "../../../assests/Images/Ourservice/webdev/elearn.jpg";
import fitness from "../../../assests/Images/Ourservice/webdev/fitness.jpg";
import Travel from "../../../assests/Images/Ourservice/webdev/travel.jpg";

const industries = [
  {
    title: "Healthcare",
    image: healtcare,
    description:
      "Transformative solutions for patient care and medical management systems.",
  },
  {
    title: "E-Commerce",
    image: ecommerce,
    description:
      "Scalable platforms that drive conversions and enhance customer experience.",
  },
  {
    title: "Finance",
    image: banking,
    description:
      "Secure and innovative fintech solutions for modern banking needs.",
  },
  {
    title: "Education & E-Learning",
    image: elearn,
    description:
      "Interactive platforms that revolutionize the learning experience.",
  },
  {
    title: "Sports & Fitness",
    image: fitness,
    description:
      "Digital tools that enhance performance tracking and engagement.",
  },
  {
    title: "Hospitality & Travel",
    image: Travel,
    description:
      "Seamless booking systems and guest experience enhancement.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const IndustriesWeServe = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-slate-900 to-slate-950 py-20 px-4 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-gray-200 tracking-wider uppercase">
            Expertise Across Sectors
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 bg-gradient-to-r from-blue-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
            Industries We Serve
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-slate-300 mt-8 max-w-2xl mx-auto text-lg">
            We deliver tailored digital solutions that address the unique
            challenges and opportunities in each industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative rounded-xl overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700 h-80"
            >
              <div className="absolute inset-0">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
              </div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end transition-all duration-300">
                <div
                  className={`transition-all duration-500 ${
                    hoveredIndex === index ? "transform -translate-y-4" : ""
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {industry.title}
                  </h3>
                  

                  <div
                    className={`transition-all duration-500 flex items-center text-cyan-400 text-sm font-medium ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span>{industry.description}</span>
                    
                  </div>
                </div>
              </div>

              <div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 ${
                  hoveredIndex === index ? "w-full" : "w-16"
                }`}
              ></div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default IndustriesWeServe;
