import React from 'react';
import Whatweoffer from '../components/c2cservices/Whatweoffer/Whatweoffer';
import WhyChoose from '../components/c2cservices/WhyChoose/WhyChoose';
import WhyChooseImage from "../assets/Images/Banner/whycoe3.png"
import WhatImage from "../assets/Images/Banner/empowering3.png";
import carrerempowerment from "../assets/Images/Banner/team-leader-teamwork-concept.png";
import KeyHighlights from '../components/c2cservices/KeyHighlights/KeyHighlights';
import ConsultationFormForCo from '../pages/ConsultationFormForCo';
import WhatIsCodeChef from '../components/c2cservices/WhatIs/WhatIs';
import Achievements from "../components/c2cservices/WhatWeCOE/WhatWeCOE";
import achievementImg from "../components/c2cservices/WhatWeCOE/broadcast_gif2.gif"; 
import JoinCoEMovement from "../components/c2cservices/JoinCoe/JoinCoe";

import {
  FaLaptopCode,
  FaChalkboardTeacher,
  FaProjectDiagram,
  FaCertificate,
  FaTools,
} from "react-icons/fa";
import BannerCarousel from '../components/Banner/BannerCarousel';


const COE = () => {
    const offerHeading = "What We Do";
    const offerPoints = [
      "Set up CoEs with industry-standard tools & infra",
      "Curriculum design in sync with job roles",
      "Training by real-world practitioners",
      "Hands-on use cases & labs",
      "Global certifications & internship pathway",
    ];

    const highlights = "Key Highlights";
    const points = [
        "240+ Hours of expert-led training (Cybersecurity / AI)",
        "Real-world projects and industry case studies",
        "Certification, Badges, and international visits (optional)",
        "Access to exclusive Hackathons & Challenges",
        "Faculty Enablement Workshops",
    ];

    const codechefData = {
      heading: "Empowering Campuses. Enabling Careers",
      description: `At Infoziant, our Centre of Excellence (CoE) program transforms academic institutions into innovation hubs by bridging the gap between industry and academia.
              We equip colleges with the skills, tools, and expert training needed to build futureready
              professionals in Cybersecurity and Artificial Intelligence.`,
    };

    const achievementData = [
      {
        title: "Turnkey CoE Setup",
        desc: "Industry-grade infrastructure, labs, and licensed tools tailored to Cybersecurity and AI.",
        icon: <FaTools />,
        color: "from-pink-500 to-pink-700",
      },
      {
        title: "Job-Oriented Curriculum",
        desc: "Aligned with current and emerging industry roles and mapped to global standards.",
        icon: <FaLaptopCode />,
        color: "from-blue-400 to-blue-600",
      },
      {
        title: "Expert-Led Training",
        desc: "Courses delivered by seasoned professionals with real-world experience.",
        icon: <FaChalkboardTeacher />,
        color: "from-green-400 to-green-600",
      },
      {
        title: "Project-Based Learning",
        desc: "Practical labs, real-time use cases, and hands-on problem-solving scenarios.",
        icon: <FaProjectDiagram />,
        color: "from-yellow-400 to-yellow-600",
      },
      {
        title: "Global Certification Pathway",
        desc: "Internationally recognized certifications and internship opportunities.",
        icon: <FaCertificate />,
        color: "from-indigo-400 to-indigo-600",
      },
    ];


  return (
    <div>
      <BannerCarousel />    
   

      <div id="get-started">
      <WhatIsCodeChef 
        heading={codechefData.heading}
        subheading={codechefData.subheading}
        description={codechefData.description}
        image={carrerempowerment}
        ctaText={codechefData.ctaText}
        ctaLink={codechefData.ctaLink}
      />
      </div>
     



       <WhyChoose
          heading="Why Infoziant CoEs?"
          description="We are committed to building a self-sustained CoE that not only meets the immediate needs of students but also prepares them for future challenges. Our approach is designed to ensure that your institution remains at the forefront of technological advancements."
          points={[
            "Designed by domain experts (Ex-Symantec, EMC, McAfee)",
            "Industry-mapped curriculum and tools",
            "Long-term academic partnership model",
            "Customizable delivery (hybrid/fully offline)",
            "Proven success across 30+ institutions",
          ]}
          image = {WhyChooseImage} 
        />
        
       <Whatweoffer heading={offerHeading} points={offerPoints} image={WhatImage} />

        <Achievements
          title="What Makes Our CoE Unique"
          subtitle="Empowering talent with industry-driven excellence"
          image={achievementImg}
          achievements={achievementData}
        />

            <KeyHighlights heading={highlights} points={points}/>


          <JoinCoEMovement />

          <ConsultationFormForCo />
    </div>
  );
};

export default COE;
