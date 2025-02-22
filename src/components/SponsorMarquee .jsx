import React from 'react';

const SponsorMarquee = () => {
  const sponsors = [
    {
      name: "Bank of Baroda",
      alt: "Bank of Baroda logo",
      img:"https://www.designrush.com/uploads/users/customer-12/image_1532370597_fxvyDE7rRXPffHwfK04VsV3Fxr8YGOlSNmmfQ7mH.png"
    },
    {
      name: "Department of Sciences & Technology",
      alt: "Department of Sciences & Technology logo",
      img:"https://diginsights.com/wp-content/uploads/2024/03/amazz.png.jpeg"
    },
    {
      name: "Westbridge Capital",
      alt: "Westbridge Capital logo",
      img:"https://diginsights.com/wp-content/uploads/2024/03/coca.png.jpeg"
    },
    {
      name: "NPCI",
      alt: "National Payments Corporation of India logo",
      img:"https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/pepsi-logo.png"
    },
    {
      name: "Deutsche Bank",
      alt: "Deutsche Bank logo",
      img:"https://brandyhq.com/wp-content/uploads/2024/12/H-and-M-Logo-1024x538.jpg"
    },
    {
      name: "Deloitte",
      alt: "Deloitte logo",
      img:"https://diginsights.com/wp-content/uploads/2024/03/starbsloh.png.jpeg"
    }
  ];

  const tripleSponsors = [...sponsors, ...sponsors, ...sponsors];

  return (
    <div className="w-full bg-black py-12 ">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
    Our <span className="text-blue-400">Sponsors</span>
  </h2>
      
      <div className="">
        <div className="flex animate-scroll">
          {tripleSponsors.map((sponsor, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center bg-white p-6 rounded-lg w-48 h-32 mx-4 flex-shrink-0"
            >
              <img
                src={sponsor.img}
                alt={sponsor.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const style = `
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 6));  /* Adjust based on logo width + margin */
    }
  }

  .animate-scroll {
    animation: scroll 20s linear infinite;
  }

  /* Smooth out the animation */
  .animate-scroll:hover {
    animation-play-state: paused;
  }

  /* Ensure smooth animation */
  .animate-scroll {
    will-change: transform;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }
`;

export default () => (
  <>
    <style>{style}</style>
    <SponsorMarquee />
  </>
);