import React, { useState } from "react";
import Button from "./button";

const AgendaSection = () => {
  const [activeDay, setActiveDay] = useState(1);
  const [expandedSession, setExpandedSession] = useState(null);

  const days = [
    { id: 1, date: "21st November", day: "Day 1" },
    { id: 2, date: "22nd November", day: "Day 2" },
  ];

  const agenda = {
    1: [
      {
        id: "d1s1",
        time: "09:00 AM - 10:30 AM",
        title: "Opening Ceremony",
        location: "Main Auditorium",
        speaker: "Dr. Prabhu Kumar",
        description: "Welcome address and introduction to E-Summit'25 with insights into the entrepreneurial ecosystem in India.",
        highlights: ["Lighting the lamp ceremony", "Welcome address by University President", "Introduction to E-Summit theme"]
      },
      {
        id: "d1s2",
        time: "11:00 AM - 12:30 PM",
        title: "Keynote Session: Future of Innovation",
        location: "Main Auditorium",
        speaker: "Kunal Shah, Founder - CRED",
        description: "An insightful discussion on how innovation is shaping industries and creating new opportunities for entrepreneurs.",
        highlights: ["Disruption in fintech", "Building for India's unique market", "Scaling startups in competitive environments"]
      },
      {
        id: "d1s3",
        time: "01:30 PM - 02:30 PM",
        title: "Panel Discussion: Funding Landscape 2025",
        location: "Conference Hall B",
        speaker: "Venture Capital Panel",
        description: "Leading VCs discuss current investment trends, what they look for in startups, and predictions for the coming year.",
        highlights: ["Early-stage funding strategies", "VC expectations in 2025", "Preparing for investor meetings"]
      },
      {
        id: "d1s4", 
        time: "03:00 PM - 05:00 PM",
        title: "Startup Pitch Competition - Finals",
        location: "Innovation Hub",
        speaker: "Selected Startups",
        description: "Selected startups present their business ideas to a panel of judges for feedback and prizes.",
        highlights: ["5-minute detailed pitches", "Q&A with judges", "Prize distribution"]
      }
    ],
    2: [
      {
        id: "d2s1",
        time: "09:30 AM - 11:00 AM",
        title: "Masterclass: Building Sustainable Businesses",
        location: "Lecture Hall 1",
        speaker: "Nithin Kamath, Founder - Zerodha",
        description: "Learn how to build businesses that are not just profitable but also sustainable in the long run.",
        highlights: ["Bootstrapping vs VC funding", "Sustainable growth metrics", "Building with purpose"]
      },
      {
        id: "d2s2",
        time: "11:30 AM - 01:00 PM",
        title: "Workshop: Product-Market Fit",
        location: "Innovation Lab",
        speaker: "Shashank Kumar, Founder - Razorpay",
        description: "Interactive workshop on finding and validating product-market fit for early-stage startups.",
        highlights: ["Customer development techniques", "MVP testing frameworks", "Iterative development processes"]
      },
      {
        id: "d2s3",
        time: "02:00 PM - 03:30 PM",
        title: "Fireside Chat: Journey from College to Unicorn",
        location: "Main Auditorium",
        speaker: "Ankush Sachdeva, Founder - ShareChat",
        description: "Inspiring conversation about building a unicorn startup from a college dorm room to international markets.",
        highlights: ["Early challenges", "Pivoting strategies", "Scaling culture and teams"]
      },
      {
        id: "d2s4",
        time: "04:00 PM - 05:30 PM",
        title: "Closing Ceremony & Networking",
        location: "Main Auditorium",
        speaker: "Organizing Committee & Guests",
        description: "Wrapping up E-Summit'25 with awards and a networking session with refreshments.",
        highlights: ["Best startup awards", "Closing remarks", "Networking opportunities"]
      }
    ]
  };

  const toggleSessionDetails = (sessionId) => {
    if (expandedSession === sessionId) {
      setExpandedSession(null);
    } else {
      setExpandedSession(sessionId);
    }
  };

  return (
    <section id="agenda" className="pt-24 mt-16">
      <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 text-center">
        EVENT <span className="text-blue-400">AGENDA</span>
      </h2>
      
      <div className="max-w-6xl mx-auto mb-8">
        <p className="text-gray-300 text-center max-w-3xl mx-auto">
          Two action-packed days of knowledge, networking, and opportunities to boost your entrepreneurial journey.
        </p>
      </div>
      
      <div className="flex justify-center mb-8 space-x-3 sm:space-x-4">
        {days.map((day) => (
          <Button
            key={day.id}
            variant={activeDay === day.id ? "default" : "outline"}
            className={`px-4 py-2 sm:px-6 ${
              activeDay === day.id
                ? "bg-blue-500 text-white"
                : "text-white border-white hover:bg-white hover:text-black"
            }`}
            onClick={() => setActiveDay(day.id)}
          >
            <div className="flex flex-col items-center">
              <span className="text-sm sm:text-base font-medium">{day.day}</span>
              <span className="text-xs opacity-80">{day.date}</span>
            </div>
          </Button>
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto">
        {agenda[activeDay].map((session) => (
          <div
            key={session.id}
            className="mb-4 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 border border-gray-800 hover:border-blue-400/30"
          >
            <div
              className="p-4 sm:p-6 cursor-pointer"
              onClick={() => toggleSessionDetails(session.id)}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div className="mb-2 sm:mb-0">
                  <span className="text-blue-400 text-sm font-medium block sm:inline-block sm:mr-3">
                    {session.time}
                  </span>
                  <span className="text-gray-500 text-xs hidden sm:inline-block">
                    | {session.location}
                  </span>
                </div>
                <div className="flex items-center ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 text-blue-400 transition-transform duration-300 ${
                      expandedSession === session.id ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-white text-lg sm:text-xl font-semibold mt-1">
                {session.title}
              </h3>
              
              <p className="text-gray-400 text-sm mt-1">
                <span className="sm:hidden block text-xs mb-1">{session.location}</span>
                Speaker: {session.speaker}
              </p>
            </div>
            
            {expandedSession === session.id && (
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0 bg-gradient-to-b from-transparent to-gray-900/40 border-t border-gray-700/30">
                <p className="text-gray-300 mb-4 text-sm">
                  {session.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-blue-400 text-sm font-medium">Session Highlights:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {session.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-4 flex space-x-3">
                  <Button
                    variant="outline"
                    className="text-xs sm:text-sm text-white border-white hover:bg-white hover:text-black"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Add to Calendar
                  </Button>
                  <Button
                    variant="outline"
                    className="text-xs sm:text-sm text-white border-white hover:bg-white hover:text-black"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    View Location
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AgendaSection;