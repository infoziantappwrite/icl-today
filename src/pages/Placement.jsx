import Whatweoffer from "../components/c2cservices/Whatweoffer/Whatweoffer";
import WhyChoose from "../components/c2cservices/WhyChoose/WhyChoose";
import WhyChooseImage from "../assets/Images/Banner/ChooseUsPic.png";
import WhatImage from "../assets/Images/Banner/offer1.png";
import ConsultationFormForCo from "../pages/ConsultationFormForCo";
import BannerCarousel from "../components/Banner/BannerCarousel";
import PlacementCarousel from "../components/c2cservices/Company/PlacementCarousel";
import CollegeCarousel from "../components/c2cservices/CollegeClients/CollegeCarousel";
const Placement = () => {
  const offerHeading = "What We Offer";
  const offerPoints = [
    "End-to-end drive coordination",
    "Company sourcing based on college requirement",
    "Direct HR outreach & scheduling",
    "Opportunities from top-tier, service-based & product-based companies",
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
        description="With our expansive industry network and agile coordination, we bring in companies offering CTCs up to ₹1.02 Cr and align them with your drive schedule. Your students gain access to curated placement opportunities that match their skillsets, while your institution stays ahead with a strong placement track record."
        points={[
          "Partnered with over 37+ leading colleges across the country.",
          "More than 115 reputed companies recruit from each partnered college.",
          "Successfully placed over 7510+ students in top organizations.",
          "CTC packages offered go as high as ₹1.02 Cr from premier companies.",
          "Built an expansive industry network to drive top-tier placements.",
          "Ensured agile coordination with institutions for timely placements.",
          "Curated opportunities that align with each student’s strengths and aspirations.",
        ]}
        image={WhyChooseImage}
      />
      <PlacementCarousel
        heading="Our Engaged Companies"
        description="We collaborate with a wide range of top-tier companies across various industries."
      />
      <CollegeCarousel
        heading="Our Educational Partners"
        description="We're proud to collaborate with leading educational institutions that trust our services to empower their digital presence."
      />
      <ConsultationFormForCo />
    </div>
  );
};

export default Placement;
