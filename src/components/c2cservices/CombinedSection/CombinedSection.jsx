import { motion } from "framer-motion";
import {
    Megaphone,
    ShieldCheck,
    Filter,
    BarChart3,
    Route,
    BookOpenCheck,
    BadgeCheck,
    Briefcase,
    Users,
    Building2,
    UserRound,
  } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const recruiterFeatures = [
    {
      text: "Post jobs & internships and hire skill-matched candidates",
      icon: Megaphone, // represents announcements/posting
    },
    {
      text: "Access verified talent pools",
      icon: ShieldCheck, // represents verified/secure candidates
    },
    {
      text: "Smart filters for faster and bias-free hiring decisions",
      icon: Filter, // represents filtering
    },
    {
      text: "Track candidate performance & shortlist effortlessly",
      icon: BarChart3, // represents analytics/performance
    }
  ];
  const studentFeatures = [
    {
      text: "Personalized learning paths based on your skills, interests, and goals",
      icon: Route, // represents journey/pathways
    },
    {
      text: "Explore curated courses in tech, business, communication & more",
      icon: BookOpenCheck, // learning focus
    },
    {
      text: "Build verified profiles with real-world projects & certifications",
      icon: BadgeCheck, // credentials and verification
    },
    {
      text: "Discover job and internship opportunities tailored just for you",
      icon: Briefcase, // jobs/internships
    },
    {
      text: "Connect with industry experts and mentors for career guidance",
      icon: Users, // mentorship/community
    }
  ];

const FeatureCard = ({ title, subtitle, icon: TitleIcon, features }) => (
  <motion.div
    className="relative rounded-3xl p-[2px] w-full"
    style={{ background: "linear-gradient(135deg, #06f, #15f5ba)" }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    variants={fadeInUp}
  >
    <div className="bg-white rounded-3xl p-8 h-full shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
      <div className="flex items-center gap-3 mb-4">
        <TitleIcon className="text-blue-500 w-7 h-7" />
        <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">
          {title}
        </h2>
      </div>
      <p className="text-gray-600 mb-6 text-base">{subtitle}</p>
      <div className="space-y-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              className="flex items-start gap-3 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Icon className="text-blue-500 w-5 h-5 mt-1 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-gray-800 group-hover:text-black text-[15px]">
                {feature.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </motion.div>
);

const PremiumRecruiterStudentSection = () => (
  <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
      <FeatureCard
        title="For Recruiters"
        subtitle="Discover and connect with the right candidates using smart, bias-free tools."
        icon={Building2}
        features={recruiterFeatures}
      />
      <FeatureCard
        title="For Students & Job Seekers"
        subtitle="Unlock your potential with tailored guidance and smart tools built just for you."
        icon={UserRound}
        features={studentFeatures}
      />
    </div>
  </section>
);

export default PremiumRecruiterStudentSection;
