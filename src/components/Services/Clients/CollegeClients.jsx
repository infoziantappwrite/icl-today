import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CollegeClients = () => {
  const clients = [
    { id: 1, src: "https://th.bing.com/th/id/OIP.qd-fUr4ZzNMyrkpVINGFIAHaHa?rs=1&pid=ImgDetMain", name: "College A" },
    { id: 2, src: "https://th.bing.com/th/id/OIP.qd-fUr4ZzNMyrkpVINGFIAHaHa?rs=1&pid=ImgDetMain", name: "College B" },
    { id: 3, src: "https://th.bing.com/th/id/OIP.qd-fUr4ZzNMyrkpVINGFIAHaHa?rs=1&pid=ImgDetMain", name: "College C" },
    { id: 4, src: "https://th.bing.com/th/id/OIP.qd-fUr4ZzNMyrkpVINGFIAHaHa?rs=1&pid=ImgDetMain", name: "College D" },
    { id: 5, src: "https://th.bing.com/th/id/OIP.qd-fUr4ZzNMyrkpVINGFIAHaHa?rs=1&pid=ImgDetMain", name: "College E" },
  ];

  const [centerIndex, setCenterIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 600,             
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,   
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    cssEase: "ease-in-out",
    beforeChange: (current, next) => setCenterIndex(next % clients.length),
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      }
    ]
  };

  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-[#0a192f] via-[#112240] to-[#1a365d]">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500 opacity-5"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-teal-400 opacity-5"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-purple-500 opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-[0.03]"
          style={{
            backgroundSize: "20px 20px",
            backgroundImage:
              "linear-gradient(to right, gray 1px, transparent 1px), linear-gradient(to bottom, gray 1px, transparent 1px)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-900/30 text-blue-400 text-sm font-medium mb-4">
            Trusted By
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
            Our Educational Partners
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto"></div>
          <p className="mt-6 text-blue-100/80 max-w-2xl mx-auto">
            We're proud to collaborate with leading educational institutions that trust our services to empower their digital presence.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Slider */}
          <Slider ref={sliderRef} {...settings} className="client-slider px-6">
            {clients.map((client, index) => (
              <div key={client.id} className="px-4 py-6">
                <div className={`
                  relative overflow-hidden rounded-xl transition-all duration-700
                  ${index === centerIndex ? 
                    'bg-gradient-to-b from-blue-800/30 to-teal-800/20 shadow-lg shadow-teal-900/20 transform scale-105' : 
                    'bg-blue-900/20 transform scale-95'}
                `}>
                  <div className={`
                    p-5 flex flex-col items-center transition-all duration-700
                    ${index === centerIndex ? 'scale-100 opacity-100' : 'scale-90 opacity-70'}
                  `}>
                    <div className="h-24 w-24 mb-4 relative rounded-full overflow-hidden bg-gradient-to-br from-blue-800/50 to-teal-700/30 p-[2px]">
                      <div className="rounded-full overflow-hidden w-full h-full flex items-center justify-center bg-blue-950">
                        <img
                          src={client.src}
                          alt={client.name}
                          className={`h-20 w-20 object-contain transition-all duration-700 ${
                            index === centerIndex ? 'scale-110' : 'scale-100'
                          }`}
                        />
                      </div>
                    </div>
                    <h3 className={`
                      text-center font-medium transition-all duration-700
                      ${index === centerIndex ? 'text-xl text-teal-300' : 'text-lg text-blue-300/70'}
                    `}>
                      {client.name}
                    </h3>

                    {/* {index === centerIndex && (
                      <div className="mt-3 flex items-center opacity-0 animate-fadeIn" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                        <span className="inline-block w-2 h-2 rounded-full bg-teal-400 animate-pulse mr-2"></span>
                        <span className="text-teal-300/90 text-sm">Active Partner</span>
                      </div>
                    )} */}
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Dots */}
          <div className="flex justify-center mt-8 gap-1.5">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === centerIndex ? 
                  'bg-teal-400 w-6' : 
                  'bg-blue-600/40 hover:bg-blue-500/60 w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fade-in Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default CollegeClients;
