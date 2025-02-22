import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const EventsGrid = () => {
  const events = [
    {
      id: 1,
      title: "SPARK TANK",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" fill="currentColor"/>
          <path d="M12 6v6l4 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 13V9m0 8v-2m-5-5h2m8 0h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 17.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5z" fill="currentColor"/>
          <path d="M14 9c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v2z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "STARTUP EXPO",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <rect x="4" y="5" width="16" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M12 15c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M12 9v2m0 0h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M4 7h16M4 17h16" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "IDEATHON",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M12 4c-1 2.5-2.5 4-5 5 0 4.5 2 7 5 9 3-2 5-4.5 5-9-2.5-1-4-2.5-5-5z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M12 4v8m-8 0h16" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M7 12c1.5 2.5 3 4 5 5 2-1 3.5-2.5 5-5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "INTERNSHIP FAIR",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <circle cx="12" cy="12" r="3" fill="currentColor"/>
          <circle cx="5" cy="5" r="2" fill="currentColor"/>
          <circle cx="19" cy="5" r="2" fill="currentColor"/>
          <circle cx="5" cy="19" r="2" fill="currentColor"/>
          <circle cx="19" cy="19" r="2" fill="currentColor"/>
          <path d="M12 9V5m-5 2l2 2M5 12h3m2 5v3m5-8h3m-5-5 2-2m3 5 2 2m-5 3 2 2" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      id: 5,
      title: "COMPETITIONS",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <rect x="7" y="12" width="3" height="8" rx="1" fill="currentColor"/>
          <rect x="12" y="8" width="3" height="12" rx="1" fill="currentColor"/>
          <rect x="17" y="10" width="3" height="10" rx="1" fill="currentColor"/>
          <path d="M8.5 8.5l2.5-2.5 2.5 2.5M11 6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M6 9l-1 1 1 1M21 9l1 1-1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 6,
      title: "WORKSHOPS",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path d="M4 14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v8z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M16 4v6m-4-6v3m-4-3v5" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="8" cy="19" r="1" fill="currentColor"/>
          <circle cx="12" cy="19" r="1" fill="currentColor"/>
          <circle cx="16" cy="19" r="1" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 7,
      title: "EXPERT TALK & PANEL DISCUSSION",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path d="M12 2v4m-6 6H2m18 0h-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M13 22h-2c-1.1 0-2-.9-2-2v-2h6v2c0 1.1-.9 2-2 2z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 8,
      title: "I-HACK",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path d="M5 7.8C5 6.8 5.8 6 6.8 6h10.4c1 0 1.8.8 1.8 1.8v10.4c0 1-.8 1.8-1.8 1.8H6.8c-1 0-1.8-.8-1.8-1.8V7.8z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M12 15c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M12 9v2m0 0h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M3 6h18M3 18h18" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      id: 9,
      title: "BUSINESS BAZAR",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path d="M5 7.8C5 6.8 5.8 6 6.8 6h10.4c1 0 1.8.8 1.8 1.8v10.4c0 1-.8 1.8-1.8 1.8H6.8c-1 0-1.8-.8-1.8-1.8V7.8z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M12 15c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M12 9v2m0 0h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M3 6h18M3 18h18" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-black bg-opacity-90 relative">
      {/* Enhanced animated background curves */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-full h-full opacity-1">
          <div className="absolute top-20 left-0 w-full h-96 border-t-2 border-white rounded-t-full transform scale-x-150 animate-pulse"></div>
          <div className="absolute top-40 left-0 w-full h-96 border-t-2 border-white rounded-t-full transform scale-x-125 animate-pulse delay-100"></div>
          <div className="absolute top-60 left-0 w-full h-96 border-t-2 border-white rounded-t-full transform scale-x-100 animate-pulse delay-200"></div>
        </div>
      </div>

      {/* Main content container */}
      <div className="relative container mx-auto px-4 py-16">
        {/* Enhanced title with gradient and animation */}
        <h1 className="text-8xl font-bold mb-20 text-center bg-gradient-to-r from-red-500 via-white to-red-500 bg-clip-text text-transparent">
          EVENTS
        </h1>

        {/* Enhanced grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(event => (
            <div
              key={event.id}
              className="bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-2xl p-8
                       transition-all duration-500 hover:shadow-xl hover:shadow-green-400/30
                       hover:-translate-y-2 group border border-gray-800 hover:border-green-400/30"
            >
              <div className="flex justify-between items-start mb-8">
                <h2 className="text-red-500 font-bold text-2xl tracking-wider">
                  {event.title}
                </h2>
                <ArrowUpRight
                  className="text-red-500 h-6 w-6 transition-all duration-500
                           group-hover:translate-x-1 group-hover:-translate-y-1
                           group-hover:scale-110 group-hover:text-green-400"
                />
              </div>
              <div className="w-40 h-40 mx-auto text-red-500 transition-all duration-500
                            group-hover:text-green-400 group-hover:scale-110 transform">
                {event.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsGrid;