import React, { useState, useEffect, useRef } from "react";

// TestimonialCard Component to handle individual testimonials
const TestimonialCard = ({ name, role, quote, image, color }) => {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-xl p-4 sm:p-6 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${color} flex items-center justify-center mb-4 sm:mb-6`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </div>

      <div className="mb-4 sm:mb-6">
        <p className="text-gray-600 italic text-sm sm:text-base mb-4">{quote}</p>
        <div className={`w-10 sm:w-12 h-1 bg-gradient-to-r ${color}`}></div>
      </div>

      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white shadow-md object-cover"
        />
        <div className="ml-3 sm:ml-4">
          <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{name}</h4>
          <p className="text-xs sm:text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

// Main TestimonialSection component
const TestimonialSection = ({ heading, description, testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const maxIndex = testimonials.length - 2;
  const intervalRef = useRef(null);

  const nextTestimonial = () => {
    setActiveIndex(prevIndex =>
      prevIndex >= maxIndex ? 0 : prevIndex + 2
    );
  };

  const prevTestimonial = () => {
    setActiveIndex(prevIndex =>
      prevIndex <= 0 ? maxIndex : prevIndex - 2
    );
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        nextTestimonial();
      }, 2000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused, activeIndex]);

  const pauseAutoplay = () => setIsPaused(true);
  const resumeAutoplay = () => setIsPaused(false);

  const visibleTestimonials = testimonials.slice(activeIndex, activeIndex + 2);

  return (
    <section className="py-12 sm:py-24 px-4 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full opacity-30 filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-30 filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="lg:flex items-start gap-16 relative z-10">
          {/* Header */}
          <div className="lg:w-2/5 mb-12 lg:mb-0 lg:sticky lg:top-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              {heading}
            </h2>

            <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg">
              {description}
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={prevTestimonial}
                onMouseEnter={pauseAutoplay}
                onMouseLeave={resumeAutoplay}
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              <button
                onClick={nextTestimonial}
                onMouseEnter={pauseAutoplay}
                onMouseLeave={resumeAutoplay}
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>

            <div className="flex gap-2 mt-6">
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index * 2)}
                  onMouseEnter={pauseAutoplay}
                  onMouseLeave={resumeAutoplay}
                  className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index * 2 ? "w-8 bg-blue-500" : "w-2 bg-gray-300"
                    }`}
                  aria-label={`Go to testimonial set ${index + 1}`}
                />
              ))}
            </div>

          </div>

          {/* Testimonial Cards */}
          <div className="lg:w-3/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {visibleTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  name={testimonial.name}
                  role={testimonial.role}
                  quote={testimonial.quote}
                  image={testimonial.image}
                  color={testimonial.color}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;
