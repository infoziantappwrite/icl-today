import React from "react";
import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaLock,
  FaGraduationCap,
  FaMapSigns,
  FaCertificate,
  FaBriefcase,
  FaHandshake,
} from "react-icons/fa";

const JourneyStep = ({ title, description, icon, reverse, index }) => (
  <motion.div
    initial={{ opacity: 0, x: reverse ? 80 : -80 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    className={`relative mb-12 md:mb-10 flex flex-col md:flex-row items-center ${
      reverse ? "md:justify-end" : "md:justify-start"
    }`}
  >
    {/* Connector Dot */}
    <div className="hidden md:block w-4 h-4 bg-cyan-400 border-4 border-white rounded-full z-10 absolute left-1/2 transform -translate-x-1/2" />

    {/* Card */}
    <div
      className={`w-full md:w-[46%] p-5 rounded-xl bg-[#111827] border border-white/10 shadow-lg hover:border-cyan-500 hover:shadow-cyan-500/20 transition-all duration-300 ${
        reverse ? "md:mr-8" : "md:ml-8"
      }`}
    >
      <div className="flex items-center gap-4 mb-2">
        <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-3 rounded-full shadow-cyan-500/30 shadow-md">
          {React.cloneElement(icon, { className: "text-white text-xl" })}
        </div>
        <h4 className="text-lg font-semibold text-cyan-300">{title}</h4>
      </div>
      <p className="text-gray-400 text-sm leading-snug">{description}</p>
    </div>
  </motion.div>
);

const InfoziantJourney = () => {
  const steps = [
    {
      title: "Step 1: Register & Create Your Profile",
      description:
        "Sign up using your email or college ID and fill in your academic, skill, and career preferences.",
      icon: <FaUserPlus />,
    },
    {
      title: "Step 2: Log In to Your Personalized Dashboard",
      description:
        "Access your learning space, track progress, get recommendations, and explore job feeds.",
      icon: <FaLock />,
    },
    {
      title: "Step 3: Enroll in Courses that Match Your Interests",
      description:
        "Choose from technical, business, communication & placement-focused courses curated by experts.",
      icon: <FaGraduationCap />,
    },
    {
      title: "Step 4: AI-Generated Roadmap Just for You",
      description:
        "Our system creates a custom career roadmap with learning goals, deadlines & activities.",
      icon: <FaMapSigns />,
    },
    {
      title: "Step 5: Learn, Get Certified & Earn Badges",
      description:
        "Complete modules, solve assessments, get industry-recognized certificates & skill badges.",
      icon: <FaCertificate />,
    },
    {
      title: "Step 6: Explore Internships & Jobs",
      description:
        "Apply for verified job/internship openings tailored to your profile. Get placement support too!",
      icon: <FaBriefcase />,
    },
    {
      title: "Step 7: Get Hired, Stay Connected",
      description:
        "Track your applications, attend interviews, and land your dream job — all within the platform.",
      icon: <FaHandshake />,
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-4 sm:px-6 md:px-8 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-t from-[#15f5ba] to-[#06f] mb-12">
        🚀 Your Journey on the Infoziant Platform
      </h2>

      <div className="relative w-full max-w-6xl mx-auto">
        {/* Vertical Line for medium+ screens only */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full origin-top"
        />

        {/* Steps */}
        {steps.map((step, i) => (
          <JourneyStep
            key={i}
            index={i}
            title={step.title}
            description={step.description}
            icon={step.icon}
            reverse={i % 2 === 1}
          />
        ))}
      </div>

      {/* Closing Section */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-t from-[#15f5ba] to-[#06f]">
          🎯 Simple. Streamlined. Skill-first.
        </h3>
        <p className="text-lg text-gray-300 mt-4 px-4 max-w-2xl mx-auto">
          Infoziant helps students go from learning to employment — with
          confidence.
        </p>
      </div>
    </section>
  );
};

export default InfoziantJourney;
