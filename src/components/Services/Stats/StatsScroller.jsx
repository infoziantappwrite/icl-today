import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    number: 50,
    suffix: "+",
    title: "Successful Projects",
    description: "Delivering excellence in web & app development.",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: 30,
    suffix: "+",
    title: "Clients Across Industries",
    description: "Trusted by startups and enterprises.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    number: 10,
    suffix: "+",
    title: "Years of Experience",
    description: "Expertise in modern web technologies.",
    color: "from-green-400 to-emerald-600",
  },
  {
    number: 99,
    suffix: "%",
    title: "Client Satisfaction Rate",
    description: "Commitment to quality & innovation.",
    color: "from-indigo-500 to-fuchsia-400",
  },
];

const StatCard = ({ number, suffix, title, description, color, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = number;
    const duration = 1500;
    const step = Math.ceil(end / (duration / 20));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 20);

    return () => clearInterval(timer);
  }, [inView, number]);

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300">
      <h3
        className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${color} mb-2`}
      >
        {count}
        {suffix}
      </h3>
      <p className="text-lg font-medium text-gray-800">{title}</p>
      <p className="text-sm text-gray-500 mt-2">{description}</p>
    </div>
  );
};

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref} className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center mx-auto">
        <span className="bg-gradient-to-r from-[#15f5ba] to-[#06f] bg-clip-text text-transparent inline-block leading-[1.3] pb-1">
          Let Us Build Something Great Together!
        </span>
      </h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} inView={inView} />
          ))}
        </div>
        <p className="text-lg text-gray-600 mt-12">
          Contact us to kickstart your project today!
        </p>
      </div>
    </section>
  );
};

export default StatsSection;
