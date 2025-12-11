import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CheckCircle, Briefcase, Users, Clock, ThumbsUp } from "lucide-react";
import imageabout from "../../../assests/Images/Ourservice/about.png";

const stats = [
  {
    number: 57,
    suffix: "+",
    title: "Successful Projects",
    color: "from-purple-500 to-pink-500",
    icon: Briefcase,
  },
  {
    number: 34,
    suffix: "+",
    title: "Clients Across Industries",
    color: "from-yellow-400 to-orange-500",
    icon: Users,
  },
  {
    number: 16,
    suffix: "+",
    title: "Years of Experience",
    color: "from-green-400 to-emerald-600",
    icon: Clock,
  },
  {
    number: 99,
    suffix: "%",
    title: "Client Satisfaction Rate",
    color: "from-indigo-500 to-fuchsia-400",
    icon: ThumbsUp,
  },
];

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

export default function AboutUsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (inView) {
      const intervals = stats.map((stat, i) => {
        return setInterval(() => {
          setCounts((prev) => {
            const newCounts = [...prev];
            if (newCounts[i] < stat.number) {
              newCounts[i] += 1;
            } else {
              clearInterval(intervals[i]);
            }
            return newCounts;
          });
        }, 30);
      });

      return () => intervals.forEach(clearInterval);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-white overflow-x-hidden"
    >
      <motion.div
        animate={inView ? "visible" : "hidden"}
        initial="hidden"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12"
      >
        {/* Image Area */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/3 flex justify-center"
        >
          <img
            src={imageabout}
            alt="App Preview"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto rounded-3xl object-contain"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-2/3"
        >
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
            className="text-sm font-bold tracking-wide text-gray-100 text-center bg-gradient-to-r from-[#15f5ba] to-[#06f] w-fit px-3 py-1 rounded-md mb-4 uppercase"
          >
            About Us
          </motion.h2>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
            className="text-2xl md:text-3xl font-extrabold mb-6 text-gray-800"
          >
            What We Does for Web Development
          </motion.h2>

          <motion.ul
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={2}
            className="text-gray-600 text-md mb-8 space-y-4 list-none"
          >
            {[
              "At Infoziant, we specialize in developing innovative web and mobile applications that drive business growth.",
              "Our expertise spans custom web solutions, e-commerce platforms, enterprise applications, and mobile-friendly websites.",
              "We ensure every project meets the highest standards of security, performance, and user experience.",
              "From startups to large enterprises, we deliver solutions that enhance digital presence and operational efficiency.",
              "With a team of experienced developers, we ensure quality, security, and performance standards are met to drive success.",
            ].map((text, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="text-teal-500 mt-1" size={20} />
                {text}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={3}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center md:items-start"
              >
                <div className="flex items-center gap-2">
                  <stat.icon
                    className={`text-2xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  />
                  <h3
                    className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  >
                    {counts[index]}
                    {stat.suffix}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mt-1 text-center md:text-left">
                  {stat.title}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
