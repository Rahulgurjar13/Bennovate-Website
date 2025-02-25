import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const CountdownTimer = () => {
  const [daysRemaining, setDaysRemaining] = useState(24);
  
  useEffect(() => {
    const targetDate = new Date('2025-11-20T00:00:00');
    
    const updateCountdown = () => {
      const currentDate = new Date();
      const timeRemaining = targetDate - currentDate;
      const days = Math.ceil(timeRemaining / (1000 * 60 * 60 * 24));
      setDaysRemaining(days > 0 ? days : 0);
    };
    
    // Update immediately on component mount
    updateCountdown();
    
    // For testing/demo purposes: update every 5 seconds to see changes
    // In production, you would use a daily update (86400000 ms)
    const interval = setInterval(updateCountdown, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex items-center p-8 bg-purple-900 bg-opacity-20 rounded-lg border border-red-400  hover:bg-purple-800 hover:border-white text-white transition-all duration-300">
      <div className="flex items-center justify-center w-20 h-20 bg-purple-600 
      rounded-full mr-4 text-white font-extrabold text-3xl ">
        {daysRemaining}
      </div>
      <div>
        <div className="text-gray-300 text-sm">Countdown to E-Summit</div>
        <div className="text-white font-medium text-2xl">Days Remaining</div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [hoveredEmail, setHoveredEmail] = useState(null);
  
  const contactItems = [
    { label: 'For Queries', email: 'bennovate@bennett.edu.in', icon: FaEnvelope },
    { label: 'For Sponsorship', email: 'bennovate@bennett.edu.in', icon: FaEnvelope },
    { label: 'For Speaking', email: 'bennovate@bennett.edu.in', icon: FaEnvelope },
    { label: 'For Association', email: 'bennovate@bennett.edu.in', icon: FaEnvelope },
  ];
  
  const socialLinks = [
    { Icon: FaFacebook, href: '#', color: '#4267B2' },
    { Icon: FaTwitter, href: '#', color: '#1DA1F2' },
    { Icon: FaInstagram, href: '#', color: '#C13584' },
    { Icon: FaLinkedin, href: '#', color: '#0A66C2' },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white px-6 md:px-12 py-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.15),transparent_70%)]"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-green-400 to-purple-600"></div>
      
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-purple-500"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `float ${Math.random() * 10 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Social Networks Section with Hover Animations */}
      <div className="max-w-7xl mx-auto mb-16 text-center relative z-10">
        <h3 className="text-xl md:text-2xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-green-300 bg-clip-text text-white">
          Connect with us on social networks
        </h3>
        <div className="flex justify-center gap-8">
          {socialLinks.map(({ Icon, href, color }, index) => (
            <a
              key={index}
              href={href}
              className="group relative p-4 rounded-full bg-gray-800 bg-opacity-50 hover:bg-opacity-90 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon 
                size={28} 
                className="text-gray-300 group-hover:text-white transition-colors duration-300" 
                style={{ 
                  filter: 'drop-shadow(0 0 8px rgba(147, 51, 234, 0.5))',
                  transform: 'translateY(0)',
                  transition: 'transform 0.3s ease'
                }}
              />
              <span 
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                style={{ backgroundColor: color }}
              ></span>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm font-medium text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-300">
                {Icon.name.replace('Fa', '')}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Animated Divider */}
      <div className="max-w-7xl mx-auto relative">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-16"></div>
        <div 
          className="absolute w-16 h-16 -mt-8 left-1/2 transform -translate-x-1/2 bg-black rounded-full border-4 border-purple-500 flex items-center justify-center"
        >
          <span className="animate-pulse text-2xl">✦</span>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 relative z-10">
        {/* Logo and Description Section */}
        <div className="space-y-8">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-green-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex items-center space-x-4 bg-gray-900 p-4 rounded-lg">
              <img
                src="/images/4.0.png"
                className="w-20 h-16 object-contain transition-transform hover:scale-110 duration-300"
                alt="E-Cell Logo"
              />
              <div className="text-lg font-semibold uppercase tracking-wide">
                <div className="text-gray-100">The Entrepreneurship Cell</div>
                <div className="text-purple-400">Bennett University</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 bg-opacity-40 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors duration-300">
            <p className="text-gray-200 leading-relaxed">
              "Bennovate 4.0" – A Prestigious Entrepreneurship Summit
            </p>
            <p className="text-2xl font-bold mt-2 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
              21th - 22rd November 2024
            </p>
            
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-purple-400 font-bold text-xl tracking-wider uppercase relative inline-block">
                <span className="animate-pulse-slow">5 Years of Creating Job Creators</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-green-400"></span>
              </p>
            </div>
          </div>
          
          
          
        </div>

        {/* Contact Section */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold mt-10 mb-6 bg-gradient-to-r from-purple-500 to-green-400 bg-clip-text text-transparent inline-block">
            Contact Us
          </h3>
          
          <div className="flex items-start space-x-4 group p-4 rounded-lg hover:bg-gray-800 transition-colors duration-300">
            <div className="mt-1 bg-purple-500 bg-opacity-20 p-3 rounded-full group-hover:bg-opacity-50 transition-all duration-300">
              <FaMapMarkerAlt className="text-purple-400 group-hover:text-purple-300 transition-all duration-300" />
            </div>
            <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
              Plot Nos 8, 11, TechZone 2,<br />
              Greater Noida, Uttar Pradesh 201310
            </p>
          </div>

          <div className="space-y-4">
            {contactItems.map(({ label, email, icon: Icon }, index) => (
              <div 
                key={index} 
                className="group bg-gray-800 bg-opacity-30 p-4 rounded-lg hover:bg-opacity-50 transition-all duration-300 border-l-4 border-transparent hover:border-purple-500"
                onMouseEnter={() => setHoveredEmail(email)}
                onMouseLeave={() => setHoveredEmail(null)}
              >
                <div className="flex items-center">
                  <div className="text-purple-400 font-medium uppercase text-sm mr-2">{label}</div>
                  <div className={`h-px flex-grow bg-gray-700 ${hoveredEmail === email ? 'bg-purple-500' : ''} transition-colors duration-300`}></div>
                </div>
                <a
                  href={`mailto:${email}`}
                  className="mt-2 flex items-center text-gray-300 hover:text-white transition-colors duration-300 group-hover:translate-x-2 transform transition-transform duration-300"
                >
                  <Icon className="mr-2 text-purple-400" />
                  <span className={hoveredEmail === email ? 'underline underline-offset-4' : ''}>{email}</span>
                  <span className={`ml-2 opacity-0 ${hoveredEmail === email ? 'opacity-100 transform translate-x-1' : ''} transition-all duration-300`}>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section (New) */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent inline-block">
            Stay Updated
          </h3>
          
          <div className="bg-gray-800 bg-opacity-30 p-6 rounded-xl border border-gray-700">
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for updates on upcoming events and opportunities.</p>
            
            <form className="space-y-4">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-gray-900 border border-gray-700 text-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 h-full px-4 bg-gradient-to-r from-purple-600 to-purple-800 rounded-r-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-300 flex items-center"
                >
                  <span className="hidden md:inline">Subscribe</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </form>
            
            <div className="mt-6 pt-4 border-t border-gray-700 flex items-center justify-between">
              <div className="text-sm text-gray-400">No spam, only summit updates</div>
              <div className="flex space-x-1">
                {[1, 2, 3].map(n => (
                  <div key={n} className="w-2 h-5 rounded-full bg-red-500 animate-pulse" style={{animationDelay: `${n * 0.3}s`}}></div>
                ))}
              </div>
            </div>
            
          </div>
          <CountdownTimer />
        
          
        </div>
      </div>

      <div className="relative mt-16 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm z-10">
        <div className="absolute top-0 left-0 w-full overflow-hidden h-1">
          <div className="w-full h-full bg-gradient-to-r from-purple-600 via-green-400 to-purple-600 animate-gradient-x"></div>
        </div>
        <p className="flex items-center justify-center gap-2">
          © {new Date().getFullYear()} 
          <span className="text-red-400 font-medium">Spark E-Cell Bennett University</span>
          <span>•</span>
          <span>All rights reserved</span>
        </p>
        <p className="mt-2 text-sm text-white">Designed with 💜 by Rahul gujjar</p>
      </div>

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient-x {
          background-size: 200% 100%;
          animation: gradient-x 15s ease infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;