import React from 'react'
import Banner from './Banner/Banner';
import Ourservices from './Ourservices/Ourservices';
import AboutUsSection from './AboutSection/AboutUsSection';
import ServicesSection from './Services1/ServicesSection';
import InnovativeTech from './Services1/InnovativeTech';
import TestimonialSection from './StudentTestimonials/Testimonials';
import StatsScroller from './Stats/StatsScroller';
import CollegeClients from './Clients/CollegeClients';
import collaborationImage from "../../assests/Images/Banner/WebDev.jpg";
import itsolutionImage from "../../assests/Images/Banner/WebDev2.png";
import ConsultationForm from '../Pages/ConsultationForm';
const slides = [
  {
    heading: "Strong & Business-Focused",
    text: "Transforming Ideas into Powerful Digital Solutions.",
    image: collaborationImage,
  },
  {
    heading: "Enterprise-Grade Web Solutions",
    text: "Build Scalable, Secure & High-Performance Web App Solutions with Our Expert Team.",
    image: itsolutionImage,
  },
];

const WebandApp = () => {
  return (
    <>
      <Banner slides={slides} />
      <AboutUsSection />

      {/* <CounterSection /> */}
      {/* <Testimonials /> */}
      {/* <BlogSection /> */}
      {/* <ContactSection /> */}
      <div id="get-started">
        <Ourservices />
      </div>
      <ServicesSection />
      <InnovativeTech />


      {/* <TestimonialSection /> */}
      <ConsultationForm />
      {/* <ContactSection /> */}
      {/* <Footer /> */}


    </>
  )
}

export default WebandApp;
