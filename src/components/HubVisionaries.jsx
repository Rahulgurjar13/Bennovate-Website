import React from 'react';

const HubVisionaries = () => {
  return (
    <div className="min-h-screen bg-black/95 flex items-center justify-center w-full px-4 py-12 sm:py-16">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col space-y-4">
          <p className="text-purple-400 text-sm sm:text-base md:text-lg">
            Connecting Leaders
          </p>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            A Hub for Visionaries
          </h2>
          
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Bennovate Brings together academicians, innovative entrepreneurs, industry leaders,
            venture capitalists, and ambitious students. It's a space for sharing ideas,
            showcasing entrepreneurial journeys, and building connections that inspire growth.
          </p>
        </div>

        {/* Image Container */}
        <div className="w-full md:w-1/2 relative rounded-lg">
          <div className="w-full pt-[75%] relative overflow-visible"> {/* Changed to overflow-visible */}
            <img
              src="https://pbs.twimg.com/media/GdD5opGagAUXpOW?format=jpg&name=large"
              alt="bennovate"
              className="absolute top-0 left-0 w-full h-full object-cover hover:scale-90 rounded-2xl transition-transform duration-300 z-10"
              sizes="(max-width: 420px) 80vw, (max-width: 720px) 80vw, (max-width: 991px) 48vw, (max-width: 1279px) 38vw, 43vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-20 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HubVisionaries;