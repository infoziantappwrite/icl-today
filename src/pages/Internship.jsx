import InternCarousel from "../components/c2cservices/Company/InternCarousel";
import Whatweoffer from "../components/c2cservices/Whatweoffer/Whatweoffer";
import WhyChoose from "../components/c2cservices/WhyChoose/WhyChoose";
import CollegeCarousel from "../components/c2cservices/CollegeClients/CollegeCarousel";
import TestimonialSection from "../components/c2cservices/Testimonials/Testimonials";
import KeyHighlights from "../components/c2cservices/KeyHighlights/KeyHighlights";
import WhyChooseImage from "../assets/Images/Banner/Choose2.png";
import WhatImage from "../assets/Images/Banner/offer2.png";
import ConsultationFormForCo from "../pages/ConsultationFormForCo";
import noprofile from "../assets/noprofile.png";
import BannerCarousel from "../components/Banner/BannerCarousel";

const Intership_Programs = () => {
  const offerHeading = "What We Offer";
  const offerPoints = [
    "Internship facilitation with top-tier & partner companies",
    "Access to domain-specific internships (IT, ECE, Mech, MBA, etc.)",
    "Industry-coordinated drives with structured timelines",
    "Certification & experience letters from host companies",
    "Support with internship readiness",
  ];

  const highlights = "Key Highlights";
  const points = [
    "Internships with startups, MNCs, and product-based firms",
    "Flexible models: On-site, Remote, Hybrid",
    "Integrated with college calendar",
    "Pathway to pre-placement offers (PPOs)",
  ];

  return (
    <div>
      <BannerCarousel />
      <div id="get-started">
        <Whatweoffer
          heading={offerHeading}
          points={offerPoints}
          image={WhatImage}
        />
      </div>

      <WhyChoose
        heading="Why Choose Infoziant"
        description="Internship Programs are a crucial part of a student's academic journey. We ensure that students gain practical experience and exposure to the industry, enhancing their employability and skill set."
        points={[
          "Pan-India partner company network",
          "Centralized internship management & coordination",
          "Internships aligned with student skillsets and academic backgrounds",
          "Track record of facilitating 6800+ internships across sectors",
          "Pre-Internship training (if needed) to ensure success",
        ]}
        image={WhyChooseImage}
      />

      <KeyHighlights heading={highlights} points={points} />

      <InternCarousel
        heading="Our Engaged Companies"
        description="We collaborate with a wide range of top-tier companies across various industries."
      />

      <CollegeCarousel
        heading="Our Educational Partners"
        description="We're proud to collaborate with leading educational institutions that trust our services to empower their digital presence."
      />

      <TestimonialSection
        heading="What Our Clients Say About Us"
        description="Discover why businesses trust us to deliver exceptional results. Our clients' experiences speak for themselves."
        testimonials={[
          {
            name: "Keerthana M., CSE - Final Year",
            role: "Karpagam College of Engineering",
            quote:
              "My internship through Infoziant gave me real-time exposure to the IT industry. I got to work on practical projects that enhanced both my technical and problem-solving skills.",
            image: noprofile,
            color: "from-rose-500 to-pink-400",
          },
          {
            name: "Sathish R., ECE - III Year",
            role: "Sri Shanmuga College of Engineering",
            quote:
              "I never expected to get an internship opportunity with a reputed company so early. Thanks to Infoziant, I was able to build confidence and gain hands-on experience before even graduating!",
            image: noprofile,
            color: "from-violet-500 to-fuchsia-400",
          },
          {
            name: "Boopathi R., AI & DS - II Year",
            role: "RP Sarathy Institute of Technology",
            quote:
              "The internship I did through Infoziant helped me understand how things work in a real corporate environment. It was a great bridge between college learning and industry expectations",
            image: noprofile,
            color: "from-teal-500 to-teal-400",
          },

          {
            name: "Priyanka S., UI/UX Intern – II Year, B.Tech",
            role: "AVS Engineering College",
            quote:
              "Being part of the internship program through Infoziant was a turning point. It helped me explore my skills and also made my resume stand out during placement interviews",
            image: noprofile,
            color: "from-blue-500 to-blue-400",
          },
        ]}
      />

      <ConsultationFormForCo />
    </div>
  );
};

export default Intership_Programs;
