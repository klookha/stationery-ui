import React from 'react';

const brands = [
  { name: 'Camlin', logo: '/brands/camlin.png' },
  { name: 'Classmate', logo: '/brands/classmate.png' },
  { name: 'Navneet', logo: '/brands/cello.png' },
  { name: 'Faber-Castell', logo: '/brands/faber.png' },
  { name: 'DOMS', logo: '/brands/doms.png' },
];

const BrandStrip = () => {
  return (
    <section className="bg-white border-t border-b py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-25">
        <h2 className="text-center text-sm text-gray-500 mb-4 uppercase tracking-wider">Trusted Brands</h2>
        <div className="flex justify-center flex-wrap gap-8 items-center">
          {brands.map((brand) => (
            <img
              key={brand.name}
              src={brand.logo}
              alt={brand.name}
              className="h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandStrip;
