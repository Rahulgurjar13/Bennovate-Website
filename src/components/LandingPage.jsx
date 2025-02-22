import React, { useState, useEffect } from "react";
import Button from "./Button";
import ProfileGrid from "./ProfileGrid";
import EventsGrid from "./EventsGrid";
import SponsorMarquee from "./SponsorMarquee ";
import Footer from "./Footer";
import KeyFeatures from "./KeyFeatures";
import AboutGES from "./aboutGes";
import HubVisionaries from "./HubVisionaries";
import AboutGES2 from "./AboutGES2";
import EventCard from "./EventCard ";
import RegistrationForm from "./RegistrationForm";
import AgendaSection from "./AgendaSection";


const Navbar = ({ setShowRegisterForm }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  const navItems = [
    { id: "home", label: "Home" },
    { id: "events", label: "Events" },
    ,
    { id: "agenda", label: "Agenda" },
    { id: "speakers", label: "Speakers" },
    { id: "workshops", label: "Workshops" },
    { id: "partners", label: "Partners" },
    { id: "sponsors", label: "Sponsors" },
    { id: "tickets", label: "Tickets" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsMenuOpen(false);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      })).filter(section => section.element);
      
      if (sections.length) {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
          setActiveSection(sections[sections.length - 1].id);
          return;
        }
        
        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          const nextSection = sections[i + 1];
          
          if (!nextSection) {
            if (scrollPosition >= section.element.offsetTop) {
              setActiveSection(section.id);
            }
          } else if (
            scrollPosition >= section.element.offsetTop &&
            scrollPosition < nextSection.element.offsetTop
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItems]);

  return (
    <nav className="w-full py-4 px-4 sm:px-6 flex justify-between items-center bg-black/50 backdrop-blur-sm fixed top-0 z-50">
      <div className="flex items-center">
        <img
          src="src/components/Spark-Cell-1-removebg-preview.png"
          alt="Logo"
          className="w-16 sm:w-20 h-12 sm:h-15 cursor-pointer"
          onClick={() => scrollToSection("home")}
        />
      </div>

      <div className="hidden md:flex space-x-4 lg:space-x-6">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`text-sm lg:text-base transition-colors ${
              activeSection === item.id 
                ? "text-blue-400 font-medium" 
                : "text-white hover:text-blue-400"
            }`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.id);
            }}
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="md:hidden relative">
        <button 
          className="text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen 
                ? "M6 18L18 6M6 6l12 12"
                : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-black/90 rounded-lg shadow-xl py-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block px-4 py-2 hover:bg-blue-400/20 ${
                  activeSection === item.id 
                    ? "text-blue-400 font-medium" 
                    : "text-white"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>

      <Button
        variant="outline"
        className="hidden sm:block text-white border-white hover:bg-white hover:text-black ml-4"
        onClick={() => setShowRegisterForm(true)}
      >
        Register
      </Button>
    </nav>
  );
};

const HeroHeader = () => {
  return (
    <>
      <div className="flex justify-center mt-20 mb-4 sm:mb-6">
        <div className="rounded-lg p-2 flex items-center gap-12">
          <img
            src="src/components/4.0.png"
            alt="Startup Hub"
            className="w-full max-w-[280px] sm:max-w-[400px] h-auto"
          />
          <img
            src="https://www.bennett.edu.in/wp-content/uploads/2019/10/Bennett-University-logo1-.png"
            alt="Startup Hub"
            className="w-full max-w-[260px] sm:max-w-[260px] h-auto"
          />
        </div>
      </div>
      <p className="text-white mb-2 text-sm sm:text-base">Presents Bennett University</p>
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-3 sm:mb-4">
        E-SUMMIT'25
      </h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white mb-6 sm:mb-8 font-light tracking-wider">
        Innovation Meets Opportunity
      </h2>
      <p className="text-white mb-6 sm:mb-8 text-sm sm:text-base">21st November - 23rd November</p>
    </>
  );
};

const HeroButtons = ({ setShowRegisterForm }) => {
  const scrollToTickets = () => {
    const element = document.getElementById("tickets");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center space-x-3 sm:space-x-4">
      <Button 
        className="text-sm sm:text-base text-white border-white hover:bg-white hover:text-black"
        onClick={scrollToTickets}
      >
        Buy Tickets
      </Button>
      <Button
        variant="outline"
        className="text-sm sm:text-base text-white border-white hover:bg-white hover:text-black"
        onClick={() => setShowRegisterForm(true)}
      >
        Register Now
      </Button>
    </div>
  );
};

const HeroPartners = () => {
  return (
    <div className="mt-6 sm:mt-8 flex justify-center items-center space-x-2">
      <span className="text-white text-xs sm:text-sm">In Association with</span>
      <img
        src="https://brandlogos.net/wp-content/uploads/2021/10/coca-cola-logo.png"
        alt="Partner Logo"
        className="w-16 sm:w-20 h-12 sm:h-15 rounded-full"
      />
    </div>
  );
};

const Founder = () => {
  return (
    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4">
      PAST SPEAKERS
    </h1>
  );
};

const HeroSection = ({ setShowRegisterForm }) => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 transition-transform duration-300 ease-in-out hover:translate-x-0 translate-x-[calc(100%-2.5rem)] group">
        <div className="flex items-center">
          <div
            className="bg-[#B8860B] text-white rounded-l-lg p-4 sm:p-6 shadow-lg flex items-center justify-center"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            <span className="text-base sm:text-lg font-semibold tracking-wide">PASSES</span>
          </div>
          <div className="bg-[#B8860B] text-white p-4 sm:p-6 shadow-lg transition-all duration-300 w-64 sm:w-72 rounded-l-lg">
            <h3 className="font-bold text-lg sm:text-xl mb-4">Available Passes</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex justify-between items-center">
                <span>Early Bird</span>
                <span>₹999</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Regular</span>
                <span>₹1499</span>
              </li>
              <li className="flex justify-between items-center">
                <span>VIP</span>
                <span>₹2999</span>
              </li>
            </ul>
            <Button 
              className="mt-4 sm:mt-6 w-full bg-blue-400 text-[#B8860B] hover:bg-blue-300 font-semibold"
              onClick={() => {
                const element = document.getElementById("tickets");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 mt-[90px] sm:mt-[90px] w-full max-w-7xl mx-auto">
        <section id="home" className="min-h-screen flex flex-col justify-center m">
          <HeroHeader />
          <HeroButtons setShowRegisterForm={setShowRegisterForm} />
          <HeroPartners />
         
        </section>
        
        <div className="">
          <AboutGES />
        </div>
        
        <div className="mt-[-100px]">
          <HubVisionaries />
        </div>
        
        <div className="mt-[-100px]">
          <AboutGES2 />
        </div>
        
        <section id="" className="pt-24 mt-[-90px]">
          <EventCard/>
        </section>
        <section id="events" className="pt-24 mt-8">
          <EventsGrid />
        </section>
        <AgendaSection/>
        
        <section id="speakers" className="pt-24 mt-16">
          {/* <Founder /> */}
          <ProfileGrid />
        </section>
        
        <section id="workshops" className="pt-24 mt-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Featured Workshops</h2>
          <div className="mt-8">
            <KeyFeatures />
          </div>
        </section>
        
        <section id="partners" className="pt-24 mt-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
            Our <span className="text-blue-400">Partners</span>
          </h2>
          
          <div className="max-w-6xl mx-auto mb-8">
            <p className="text-gray-300 text-center max-w-3xl mx-auto">
              Proudly supported by industry leaders who share our vision for innovation and excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="p-6 flex flex-col items-center h-full">
                <div className="w-full h-24 mb-4 overflow-hidden flex items-center justify-center">
                  <img 
                    src="https://mcmscache.epapr.in/post_images/website_350/post_28927036/full.jpg" 
                    alt="Partner 1" 
                    className="object-contain max-h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="mt-3 overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
                  <p className="text-gray-400 text-sm text-center">Shaping India's future with trusted news and insights.</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-6 flex flex-col items-center h-full">
                <div className="w-full h-24 mb-4 overflow-hidden flex items-center justify-center">
                  <img 
                    src="https://miro.medium.com/v2/resize:fit:768/1*k_wNq_cl2EJixZO9dSesew.jpeg" 
                    alt="Partner 2" 
                    className="object-contain max-h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="mt-3 overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
                  <p className="text-gray-400 text-sm text-center">Unlimited music, anytime, anywhere – feel the beat!</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-6 flex flex-col items-center h-full">
                <div className="w-full h-24 mb-4 overflow-hidden flex items-center justify-center">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/1/17/Times-now-navbharat.png" 
                    alt="Partner 3" 
                    className="object-contain max-h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="mt-3 overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
                  <p className="text-gray-400 text-sm text-center">Fearless journalism, unbiased news – Times Now Navbharat!</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-6 flex flex-col items-center h-full">
                <div className="w-full h-24 mb-4 overflow-hidden flex items-center justify-center">
                  <img 
                    src="https://yt3.googleusercontent.com/ytc/AIdro_lZEnCMQZz6FfEgDysuhVObO6O972OlqzBOaGwninMVpWk=s900-c-k-c0x00ffffff-no-rj" 
                    alt="Partner 4" 
                    className="object-contain max-h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="mt-3 overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
                  <p className="text-gray-400 text-sm text-center">Bollywood, entertainment, and trends – Stay tuned with Zoom!</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-yellow-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-6 flex flex-col items-center h-full">
                <div className="w-full h-24 mb-4 overflow-hidden flex items-center justify-center">
                  <img 
                    src="https://static.businessworld.in/Untitled%20design%20(15)_20240516212640original_image_18.webp" 
                    alt="Partner 5" 
                    className="object-contain max-h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="mt-3 overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
                  <p className="text-gray-400 text-sm text-center">Celebrating cinema, honoring excellence – Filmfare Awards & beyond!</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-6 flex flex-col items-center h-full">
                <div className="w-full h-24 mb-4 overflow-hidden flex items-center justify-center">
                  <img 
                    src="https://5.imimg.com/data5/SELLER/Default/2024/7/432704925/EU/NP/YN/184162459/afaqs-2020-11-897aa17c-6d41-4951-a73a-c383421cd793-femina-brand-logo-500x500.webp" 
                    alt="Partner 6" 
                    className="object-contain max-h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="mt-3 overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
                  <p className="text-gray-400 text-sm text-center">Empowering women with style, success, and inspiration – Femina!</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-6 flex flex-col items-center h-full">
                <div className="w-full h-24 mb-4 overflow-hidden flex items-center justify-center">
                  <img 
                    src="https://exchange4media.gumlet.io/news-photo/93540-moviemain.jpg" 
                    alt="Partner 7" 
                    className="object-contain max-h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="mt-3 overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
                  <p className="text-gray-400 text-sm text-center">Your ultimate destination for movie news and reviews – Movies Now!</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-6 flex flex-col items-center h-full">
                <div className="w-full h-24 mb-4 overflow-hidden flex items-center justify-center">
                  <img 
                    src="https://logowik.com/content/uploads/images/grazia6007.jpg" 
                    alt="Partner 8" 
                    className="object-contain max-h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="mt-3 overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
                  <p className="text-gray-400 text-sm text-center">Where fashion meets style and sophistication – Grazia!</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          </div>
        </section>
        
        <section id="sponsors" className="pt-15 ">
          <div className="mt-8">
            <SponsorMarquee />
          </div>
        </section>
        
        <section id="tickets" className="pt-24 mt-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Get Your Tickets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="group bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-6 flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 border border-transparent hover:border-blue-400/50">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-white mb-2">Early Bird</h3>
                <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">Limited</span>
              </div>
              <p className="text-3xl font-bold text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">₹999</p>
              <ul className="text-white text-left mb-6 space-y-2 flex-grow">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> Access to all sessions
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> Conference materials
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> Coffee breaks
                </li>
              </ul>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 transform transition-all duration-200 hover:translate-y-1 flex items-center justify-center gap-2 relative overflow-hidden group-hover:shadow-md">
                <span className="relative z-10">Buy Now</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </div>

            <div className="group bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-6 flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 border border-transparent hover:border-blue-400/50">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-white mb-2">Regular</h3>
                <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">Popular</span>
              </div>
              <p className="text-3xl font-bold text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">₹1499</p>
              <ul className="text-white text-left mb-6 space-y-2 flex-grow">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> Access to all sessions
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> Conference materials
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> Coffee breaks
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> Networking lunch
                </li>
              </ul>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 transform transition-all duration-200 hover:translate-y-1 flex items-center justify-center gap-2 relative overflow-hidden group-hover:shadow-md">
                <span className="relative z-10">Buy Now</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </div>

            <div className="group bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-6 flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 border border-purple-400/30 hover:border-purple-400/80">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-white mb-2">VIP</h3>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">Premium</span>
              </div>
              <p className="text-3xl font-bold text-purple-400 mb-4 group-hover:text-purple-300 transition-colors">₹2999</p>
              <ul className="text-white text-left mb-6 space-y-2 flex-grow">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> Access to all sessions
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> Conference materials
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> Coffee breaks
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> Networking lunch
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> Exclusive workshop access
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> Speaker dinner invitation
                </li>
              </ul>
              <Button className="w-full bg-purple-500 hover:bg-purple-600 transform transition-all duration-200 hover:translate-y-1 flex items-center justify-center gap-2 relative overflow-hidden group-hover:shadow-md">
                <span className="relative z-10">Buy Now</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </div>
          </div>
        </section>
        
        <div className="mt-20 w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  return (
    <div className="bg-black min-h-screen">
      <Navbar setShowRegisterForm={setShowRegisterForm} />
      <HeroSection setShowRegisterForm={setShowRegisterForm} />
      {showRegisterForm && (
        <RegistrationForm onClose={() => setShowRegisterForm(false)} />
      )}
    </div>
  );
};

export default LandingPage;
