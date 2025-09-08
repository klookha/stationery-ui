import React from 'react';

const categories = [
  { name: 'Notebooks', image: '/notebooks.png' },
  { name: 'Pens & Markers', image: '/pens.png' },
  { name: 'Art Supplies', image: '/art.png' },
  { name: 'Office Essentials', image: '/office.png' },
];

const CategorySection = () => {
  return (
    <div className="py-12 px-6 md:px-20 bg-white">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col items-center text-center p-4 border rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-20 h-20 object-contain mb-4"
            />
            <span className="text-lg font-medium text-gray-700">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
