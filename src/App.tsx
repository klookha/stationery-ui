import React from 'react';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import CategorySection from './components/CategorySection';
import FeaturedCarousel from './components/FeaturedCarousel';
import TrustSection from './components/TrustSection';
import ProductListing from './components/ProductListing';
import BrandStrip from './components/BrandStrip';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <TopBanner />
      <Navbar />
      <HeroBanner />
      <CategorySection />
      <FeaturedCarousel />
      <TrustSection />
      <ProductListing />
      <BrandStrip />
      <Footer />
    </div>
  );
}

export default App;
