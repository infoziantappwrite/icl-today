import { ShieldCheck, Smartphone, Wrench, Server, ChevronDown, Bolt } from "lucide-react";
import SmilingTeam from "../../../assests/Images/Banner/SoftTests.gif";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const benefits = [
  {
    title: "Custom-Built Solutions",
    description:
      "Tailored specifically for your business needs by a team of domain experts. We don’t just build software — we craft scalable, efficient systems using modern architecture principles and industry best practices. Expect faster deployment and better alignment with your operations.",
    icon: Wrench,
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    title: "Scalable & High-Performance",
    description:
      "Built to grow with your business. Our apps leverage cloud-native technologies and performance tuning techniques to handle high traffic with ease. Whether you're onboarding 10 or 10,000 users, your platform will stay lightning-fast and resilient.",
    icon: Server,
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "Secure & Reliable",
    description:
      "Security is baked into every layer of our systems. We implement best-in-class practices like SSL, data encryption, role-based access control, and regular audits. You can operate with peace of mind knowing user data and business operations are safeguarded 24/7.",
    icon: ShieldCheck,
    gradient: "from-pink-500 to-purple-600",
  },
  {
    title: "Mobile-Optimized",
    description:
      "Your customers are on the move — and so are we. Our mobile-first development approach ensures flawless performance on all devices. With PWA support, offline mode, and responsive design, your users get a seamless experience anywhere, anytime.",
    icon: Smartphone,
    gradient: "from-green-400 to-teal-500",
  },
  {
    title: "Fast Loading & Easy Maintenance",
    description:
      "Powered by clean, modular code and modern frameworks, our apps load in milliseconds and are built for easy updates. Plus, we provide complete documentation and DevOps support to ensure hassle-free maintenance and upgrades in the long run.",
    icon: Bolt,
    gradient: "from-gray-700 to-black",
  },
];


export default function WhyChooseUsSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section ref={ref} className="bg-white pt-16 pb-24 px-4 sm:px-6 lg:px-20" id="why-choose-us">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          className="text-sm font-bold tracking-wide text-gray-100 text-center bg-gradient-to-r from-[#15f5ba] to-[#06f] w-fit px-3 py-1 rounded-md mb-4 uppercase"
        >
          Why Choose Us
        </motion.h2>

        <div className="relative inline-block mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 z-10 relative">
            Our Web & App Development Benefits
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-start">
          {/* Left Section */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
            {benefits.map((item, idx) => {
              const Icon = item.icon;
              const isOpen = hoveredIndex === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative transition-all duration-300 ease-in-out"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.4, delay: idx * 0.2 }}
                    className="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r ${item.gradient} text-white`}
                      >
                        <Icon size={20} />
                      </div>
                      <h3 className="font-semibold text-gray-700 text-lg">{item.title}</h3>
                    </div>
                    <ChevronDown
                      size={22}
                      className={`transition-transform duration-300 transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                    />
                  </motion.div>

                  {/* Dropdown Description */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden px-4"
                  >
                    <div className="p-3 bg-gray-50 rounded-b-lg border border-t-0 border-gray-200 text-md text-gray-600 shadow-inner">
                      {item.description}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mt-10 md:mt-0"
          >
            <img
              src={SmilingTeam}
              alt="Smiling team"
              className="rounded-xl w-full h-auto max-h-[600px] object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
