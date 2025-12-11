
import React from "react";
import image3 from "../../../assests/Images/Testimonials/Krishna.jpeg";
import image4 from "../../../assests/Images/Testimonials/Meeyal.jpeg";

const testimonials = [
  {
    name: "Krishna",
    role: "AVP | SMI Technology LLC, Dubai",
    quote: "Infoziant has been an exceptional technology partner. Their team brought creativity, technical expertise, and a deep understanding of our brand, delivering a website that’s both visually stunning and functionally robust. The journey from planning to deployment was seamless and professional. Truly impressed by their commitment to quality.",
    image: image3,
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "Mahalakshmi",
    role: "Founder | Meeyal Designer",
    quote:"Working with Infoziant was a game-changer for our boutique brand. They understood our aesthetic and turned it into a beautiful, user-friendly e-commerce site that truly reflects Meeyal Designer’s identity. The team was responsive, creative, and made the whole process smooth from start to finish. We’re thrilled with the outcome!",
    image: image4,
    color: "from-emerald-500 to-teal-400",
  },

];

const TestimonialSection = () => {
  return (
    <section className="py-12 sm:py-24 px-4 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            What Our Clients <br />
            <span className="bg-gradient-to-r from-blue-500 via-teal-500 to-blue-600 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Discover why businesses trust us to deliver exceptional results. Our
            clients' experiences speak for themselves.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-xl p-6 sm:p-8 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center mb-4 sm:mb-6`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>

              <div className="mb-4 sm:mb-6">
                <p className="text-gray-600 italic text-sm sm:text-base mb-4">
                  {testimonial.quote}
                </p>
                <div
                  className={`w-10 sm:w-12 h-1 bg-gradient-to-r ${testimonial.color}`}
                ></div>
              </div>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white shadow-md object-cover"
                />
                <div className="ml-3 sm:ml-4">
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
