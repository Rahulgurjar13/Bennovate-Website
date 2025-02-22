import { useEffect, useRef, useState } from 'react';

const KeyFeatures = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [hovered, setHovered] = useState(null);
  const sectionRef = useRef(null);

  const features = [
    { 
      number: 10, 
      suffix: 'K+', 
      label: 'Attendees',
      icon: '👥',
      description: 'Industry professionals from across the globe'
    },
    { 
      number: 20, 
      suffix: '+', 
      label: 'Startups',
      icon: '🚀',
      description: 'Innovative companies showcasing cutting-edge technology'
    },
    { 
      number: 50, 
      suffix: '+', 
      label: 'Events',
      icon: '📅',
      description: 'Keynotes, workshops, and networking opportunities'
    },
  ];

  // Animation trigger on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartAnimation(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Custom counter animation
  const AnimatedCounter = ({ end, duration }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    
    useEffect(() => {
      if (!startAnimation) return;
      
      let startTime;
      let animationFrame;
      
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const currentCount = Math.floor(progress * end);
        
        setCount(currentCount);
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      
      animationFrame = requestAnimationFrame(animate);
      
      return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, startAnimation]);
    
    return count;
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-16 bg-gradient-to-br "
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-16 text-white relative left-[300px] transition-all duration-1000 bg-purple-700 rounded-3xl p-2 w-[600px] ${
          startAnimation ? 'opacity-100' : 'opacity-0'
        }`}>
          Our <span className="text-green-400">Impact</span> in Numbers
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.label}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className={`relative overflow-hidden rounded-xl p-6 transition-all duration-700 ease-out ${
                  startAnimation
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                } ${
                  hovered === index 
                    ? 'bg-gradient-to-r from-blue-700 to-purple-700 shadow-lg shadow-blue-500/20 scale-105' 
                    : 'bg-gray-800'
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Animated background particles */}
                {hovered === index && (
                  <>
                    <div className="absolute w-12 h-12 rounded-full bg-white/10 -top-6 -right-6 animate-pulse"></div>
                    <div className="absolute w-8 h-8 rounded-full bg-white/5 bottom-12 -left-4 animate-ping" 
                         style={{animationDuration: '3s'}}></div>
                    <div className="absolute w-16 h-16 rounded-full bg-blue-500/10 -bottom-8 -right-8 animate-pulse"
                         style={{animationDuration: '4s'}}></div>
                  </>
                )}
                
                {/* Icon with animated ring */}
                <div className="relative mx-auto w-20 h-20 mb-6 flex items-center justify-center">
                  <div className={`absolute inset-0 rounded-full ${
                    hovered === index ? 'bg-blue-500/20' : 'bg-blue-500/10'
                  } transition-all duration-300`}></div>
                  <div className={`absolute inset-2 rounded-full ${
                    hovered === index ? 'bg-blue-500/30' : 'bg-blue-500/15'
                  } transition-all duration-500`}></div>
                  <span className="text-4xl relative z-10">{feature.icon}</span>
                </div>
                
                {/* Number counter with floating suffix */}
                <div className="text-center mb-4">
                  <div className="relative inline-flex items-center">
                    <span className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                      {startAnimation ? (
                        <AnimatedCounter end={feature.number} duration={2.5} />
                      ) : (
                        0
                      )}
                    </span>
                    <span className={`text-3xl ml-1 font-bold text-red-400 transition-all duration-300 ${
                      hovered === index ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-80'
                    }`}>
                      {feature.suffix}
                    </span>
                  </div>
                </div>
                
                {/* Label with underline animation */}
                <h3 className="text-xl text-center font-medium mb-3 text-white relative">
                  {feature.label}
                  <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-500 transition-all duration-500 ${
                    hovered === index ? 'w-3/4' : 'w-0'
                  }`}></span>
                </h3>
                
                {/* Description with fade-in */}
                <p className={`text-sm text-center transition-all duration-500 ${
                  hovered === index ? 'opacity-100 text-gray-100' : 'opacity-60 text-gray-400'
                }`}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;