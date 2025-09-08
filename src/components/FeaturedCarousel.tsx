import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const featuredProducts = [
  {
    name: 'Premium Notebook',
    image: '/notebook-featured.png',
    price: '₹199',
  },
  {
    name: 'Fine Tip Pens Set',
    image: '/pens-featured.png',
    price: '₹249',
  },
  {
    name: 'Desk Organizer',
    image: '/organizer-featured.png',
    price: '₹499',
  },
  {
    name: 'Acrylic Colors Kit',
    image: '/acrylic-featured.png',
    price: '₹299',
  },
];

const FeaturedCarousel = () => {
  return (
    <div className="py-12 px-6 md:px-20 bg-gray-50">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Featured Products
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {featuredProducts.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center h-full">
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700">{item.name}</h3>
              <p className="text-blue-600 font-medium mt-2">{item.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedCarousel;
