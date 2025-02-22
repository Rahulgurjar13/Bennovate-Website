import React from 'react';

const AboutGES = () => {
  return (
    <div className="min-h-screen bg-black/95 flex items-center justify-center px-4 md:px-8 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Image Section */}
        <div className="w-full rounded-2xl overflow-hidden">
          <img
            src="https://media.licdn.com/dms/image/v2/D5622AQFiTLXz_cdjUQ/feedshare-shrink_800/feedshare-shrink_800/0/1732355828136?e=2147483647&v=beta&t=DOw44X2Jjpxh7evr1XHsYBYKUttu7QTMA1pbNw7PLBs"
            alt=" Conference Hall"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <div>
            <p className="text-purple-400 text-lg mb-2">Fueling Ideas</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
           About Bennovate ?

            </h2>
          </div>
          
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Bennett Hatchery, under the Centre for Innovation and Entrepreneurship, Bennett University, proudly presents "Bennovate 3.0" – a prestigious Entrepreneurship Summit on 22nd and 23rd November 2024. Supported by StartinUP (UP Government) and WASME (World Association of Small and Medium Enterprises), the summit will feature a range of dynamic events tailored for young startups, school innovators, aspiring entrepreneurs, government officials, corporate leaders, investors, and academia.

Join us for a celebration of innovation and entrepreneurship at its finest!
          </p>

          {/* Optional: Add a CTA button */}
          <button className="mt-8 px-8 py-3 bg-purple-600 text-white rounded-lg 
            hover:bg-purple-700 transition-colors duration-300 text-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutGES;