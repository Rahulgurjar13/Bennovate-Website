import React, { useState } from 'react';
import { ArrowRight, Calendar, Users, Trophy } from 'lucide-react';

const EventCard = ({ title, image, description, stats }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative bg-gradient-to-br from-[#0a0a0a] to-[#121212] rounded-xl sm:rounded-2xl p-1 
        transition-all duration-500 ease-out
        hover:scale-[1.02] 
        hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]
        group
        w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-[#080808] p-4 sm:p-6">
        {/* Animated Border */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-[-10px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
        </div>

        {/* Content */}
        <div className="relative">
          {/* Tag */}
          <div className="inline-block px-3 py-1 sm:px-4 sm:py-1 mb-3 sm:mb-4 text-xs font-semibold tracking-wider text-blue-400 bg-blue-400/10 rounded-full">
            ENTREPRENEURSHIP SUMMIT
          </div>

          {/* Title */}
          <h3 className="text-2xl xs:text-3xl sm:text-4xl text-white font-bold mb-3 sm:mb-4 
            tracking-tight transition-colors duration-300
            bg-gradient-to-r from-white to-white 
            group-hover:from-blue-400 group-hover:to-purple-400 
            bg-clip-text group-hover:text-transparent
            line-clamp-2"
          >
            {title}
          </h3>

          {/* Image Container */}
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl h-[180px] xs:h-[200px] sm:h-[250px] lg:h-[280px] mb-4 sm:mb-6
            ring-1 ring-white/10 group-hover:ring-blue-500/30 transition-all duration-500">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700
                group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 
            transition-colors duration-300 group-hover:text-gray-300
            line-clamp-3">
            {description}
          </p>

          {/* Button */}
          <button className="w-full bg-gradient-to-r from-blue-600 to-blue-400 
            hover:from-blue-500 hover:to-purple-500
            text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl
            transition-all duration-300 transform
            flex items-center justify-center gap-2
            text-sm sm:text-base
            group/btn" >
            Learn More
            <ArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" 
              size={16} />
          </button>
          
        </div>
      </div>
    </div>
  );
};

const StartupEvents = () => {
  const events = [
    {
      title: "Bennovate 1.0",
      image: "https://www.bennett.edu.in/wp-content/uploads/2022/12/winners1.jpg",
      description: "Bennett University proudly launched its inaugural entrepreneurship summit, Bennovate 2022, to provide budding entrepreneurs with a platform to showcase their talent. This two-day event brought together industry veterans to share insights, highlight best practices, and promote innovation, fostering a dynamic ecosystem for aspiring entrepreneurs to learn, network, and grow."
    },
    {
      title: "Bennovate 2.0",
      image: "https://www.bennett.edu.in/wp-content/uploads/2023/12/Bennovate-2.0.jpg",
      description: "Bennett University's Hatchery presents Bennovate 2.0, an Entrepreneurship Summit on December 1-2, 2023, supported by StartinUP (UP Government) and WASME. The event unites startups, innovators, corporates, investors, and industry leaders, fostering innovation, collaboration, and business excellence."
    },
    {
      title: "Bennovate 3.0",
      image: "https://thekhaitanschool.org/wp-content/uploads/2024/11/Photo-from-Tanu-1.jpg",
      description: "Bennett Hatchery at Bennett University presents Bennovate 3.0, a premier Entrepreneurship Summit on November 22-23, 2024. Supported by StartinUP (UP Government) and WASME, the summit will host dynamic events for young startups, innovators, aspiring entrepreneurs, industry leaders, investors, and academics."
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
      <div className="text-center mb-8 sm:mb-16">
        <h2 className="inline-block text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent 
          bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text
          mb-3 sm:mb-6">
          Bennovate Archives
        </h2>
        <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto px-4">
          A journey through Bennett University's premier entrepreneurship summits
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            image={event.image}
            description={event.description}
          />
        ))}
      </div>
    </div>
  );
};

export default StartupEvents;