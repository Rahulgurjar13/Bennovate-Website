import React, { useState, useEffect } from 'react';

const ProfileGrid = () => {
  const [profiles] = useState([
    {
      id: 1,
      name: "Ganesh Prasad",
      position: "Co-Founder at Think School",
      imageUrl: "https://miro.medium.com/v2/resize:fit:2400/1*Nyvf6rw1dOBP3tL4CkecOg.jpeg"
    },
    {
      id: 2,
      name: "Shireesh Joshi",
      position: "Chief Business Officer, ONDC",
      imageUrl: "https://etedge-insights.com/wp-content/uploads/2023/07/S-JOSHI-PIC.jpg"
    },
    {
      id: 3,
      name: "Dinesh Agrawal",
      position: "CEO, IndiaMART",
      imageUrl: "https://images.unsplash.com/photo-1714023498720-ccb2fdaa6a7d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      name: "Amit Kumar Agarwal",
      position: "Founder and CEO, Nobroker.com",
      imageUrl: "https://images.unsplash.com/photo-1714023498720-ccb2fdaa6a7d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      name: "Ankur Warikoo",
      position: "Entrepreneur | Author",
      imageUrl: "https://images.unsplash.com/photo-1714023498720-ccb2fdaa6a7d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 6,
      name: "Nikhil Choudhary",
      position: "Partner, Nirman Ventures",
      imageUrl: "https://images.unsplash.com/photo-1714023498720-ccb2fdaa6a7d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 7,
      name: "Kunal Bahl",
      position: "Co-Founder, Snapdeal",
      imageUrl: "https://images.unsplash.com/photo-1714023498720-ccb2fdaa6a7d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 8,
      name: "Sanjeev Bikhchandani",
      position: "Founder, InfoEdge",
      imageUrl: "https://images.unsplash.com/photo-1714023498720-ccb2fdaa6a7d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]);

  const [animateTitle, setAnimateTitle] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mount
    setAnimateTitle(true);
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-4 bg-black">
      {/* Modern Title Section */}
      <div className="mb-12 text-center">
        <h1 className="text-7xl md:text-7xl font-bold tracking-wider text-white relative inline-block">
          PAST SPEAKERS
          <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-green-400 to-blue-500 transition-all duration-1000 ease-out ${animateTitle ? 'w-full' : 'w-0'}`}></div>
        </h1>
        
        {/* Decorative accent element */}
        <div className={`mt-4 mx-auto h-6 w-6 rounded-full bg-blue-500 relative overflow-hidden transition-all duration-700 ${animateTitle ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
          <div className="absolute inset-1 rounded-full bg-black"></div>
          <div className={`absolute inset-2 rounded-full bg-green-400 transition-opacity duration-1000 ${animateTitle ? 'opacity-100' : 'opacity-0'}`}></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            position={profile.position}
            imageUrl={profile.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

const ProfileCard = ({ name, position, imageUrl }) => {
  return (
    <div className="relative rounded-lg overflow-hidden bg-blue-500 transition-all duration-200 hover:shadow-lg hover:shadow-green-400 group cursor-pointer transform hover:-translate-y-1">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-4 text-center">
        <h2 className="text-1xl font-bold text-white transform transition-transform duration-300 group-hover:translate-y-0 group-hover:scale-105">{name}</h2>
        <p className="text-sm text-white/90 transform transition-all duration-300 opacity-80 group-hover:opacity-100">{position}</p>
        <div className="h-0.5 w-0 bg-green-400 mx-auto mt-2 transition-all duration-300 group-hover:w-3/4"></div>
      </div>
      <div className="absolute inset-0 bg-pink-400 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
    </div>
  );
};

export default ProfileGrid;