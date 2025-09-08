// import React from 'react';

// const HeroBanner = () => {
//   return (
//     <div className="relative bg-blue-50 py-16 px-6 md:px-20 text-center overflow-hidden">
//       <div className="max-w-3xl mx-auto">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//           Your One-Stop Stationery Shop
//         </h1>
//         <p className="text-lg text-gray-600 mb-6">
//           Find everything from pens to planners at unbeatable prices!
//         </p>
//         <a
//           href="/shop"
//           className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
//         >
//           Shop Now
//         </a>
//       </div>

//       <div
//         className="absolute top-0 left-0 w-full h-full opacity-10 bg-cover bg-center pointer-events-none"
//         style={{ backgroundImage: "url('/hero-bg.png')" }}
//       ></div>

//     </div>
//   );
// };

// export default HeroBanner;

import React from 'react';

const HeroBanner = () => {
  return (
    <div className="relative bg-blue-50 px-6 py-12 md:py-20 md:px-20 overflow-hidden">
      {/* Background Layer */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-10 bg-cover bg-center pointer-events-none z-0"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      ></div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Text */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Your One-Stop Stationery Shop
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Find everything from pens to planners at unbeatable prices!
          </p>
          <a
            href="/shop"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            Shop Now
          </a>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/hero-side.png"
            alt="Stationery Hero"
            className="w-3/4 md:w-full max-w-sm md:max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;


