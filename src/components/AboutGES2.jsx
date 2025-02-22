import React from 'react';

const AboutGES2 = () => {
  return (
    <div className="min-h-screen bg-black/95 flex items-center justify-center px-1 md:px-8 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Image Section */}
        <div className="w-full rounded-2xl overflow-hidden">
          <img
            src="https://www.bennett.edu.in/wp-content/uploads/2023/12/1st-Prize-Dentrifice-Pvt-Ltd.jpg"
            alt=" Conference Hall"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        
        <div className="space-y-6">
          <div>
            <p className="text-purple-400 text-lg mb-2">Shaping Tomorrow

</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Empowering the Future

            </h2>
          </div>
          
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Dedicated to driving innovation and nurturing entrepreneurial excellence, Bennovate inspires individuals to dream boldly, collaborate meaningfully, and shape the future of global business and innovation.
          </p>

          
          <button className="mt-8 px-8 py-3 bg-purple-600 text-white rounded-lg 
            hover:bg-purple-700 transition-colors duration-300 text-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutGES2;