import React from 'react';

const testimonials = [
  {
    name: 'Radhika M.',
    location: 'Gurgaon',
    feedback: 'Great quality and fast delivery. My kids loved the art supplies!',
  },
  {
    name: 'Suresh K.',
    location: 'Delhi',
    feedback: 'Excellent stationery at unbeatable prices. Highly recommended!',
  },
  {
    name: 'Anita P.',
    location: 'Mumbai',
    feedback: 'Customer support was super helpful and prompt. Will order again!',
  },
];

const trustPoints = [
  { icon: '🚚', label: 'Fast Delivery' },
  { icon: '🛒', label: '10,000+ Orders Fulfilled' },
  { icon: '↩️', label: 'Easy Returns' },
  { icon: '⭐', label: '4.9/5 Customer Rating' },
];

const TrustSection = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-20 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Why Our Customers Trust Us
      </h2>

      {/* Brand Trust Points */}
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {trustPoints.map((point, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 bg-blue-50 rounded-lg px-5 py-3 shadow-sm min-w-[160px]"
          >
            <span className="text-3xl">{point.icon}</span>
            <span className="font-semibold text-gray-700">{point.label}</span>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-lg p-6 shadow-md flex flex-col justify-between"
          >
            <p className="text-gray-700 italic mb-4">“{t.feedback}”</p>
            <p className="font-semibold text-blue-700">{t.name}</p>
            <p className="text-sm text-gray-500">{t.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustSection;
