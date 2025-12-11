import React, { useEffect, useState, useRef } from "react";
import { Briefcase, Smile, Users, Building2 } from "lucide-react"; 
import "./CounterSection.css";

const CounterSection = () => {
  const counters = [
    { id: 1, target: 500, text: "Projects Completed", icon: <Briefcase size={40} color="#15f5ba" /> },
    { id: 2, target: 1200, text: "Happy Clients", icon: <Smile size={40} color="#15f5ba" /> },
    { id: 3, target: 300, text: "Team Members", icon: <Users size={40} color="#15f5ba" /> },
    { id: 4, target: 100, text: "Industry Partners", icon: <Building2 size={40} color="#15f5ba" /> },
  ];

  const [counts, setCounts] = useState(counters.map(() => 0));
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          startCounting();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const startCounting = () => {
    const duration = 2000; // 2 seconds
    const steps = 100;
    const interval = duration / steps;

    let stepCounts = [...counts];

    let i = 0;
    const timer = setInterval(() => {
      if (i >= steps) {
        clearInterval(timer);
      } else {
        stepCounts = counters.map((counter, index) =>
          Math.min(counter.target, Math.ceil((i / steps) * counter.target))
        );
        setCounts([...stepCounts]);
        i++;
      }
    }, interval);
  };

  return (
    <section ref={sectionRef} className="counter-section">
      <div className="counter-container">
        {counters.map((counter, index) => (
          <div key={counter.id} className="counter-box">
            <div className="icon">{counter.icon}</div>
            <h2 className="counter">{counts[index]}+</h2>
            <p>{counter.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CounterSection;
