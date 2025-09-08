import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 mt-16 border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* About Section */}
        <div>
          <h3 className="font-semibold mb-3">About Us</h3>
          <p className="text-gray-600">
            We provide premium stationery products curated for schools, offices, and creative professionals.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Products</a></li>
            <li><a href="#" className="hover:underline">Categories</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="font-semibold mb-3">Customer Care</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
            <li><a href="#" className="hover:underline">Order Tracking</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p>Email: support@yourstationery.com</p>
          <p>Phone: +91-98765-43210</p>
          <p>Mon - Fri: 9AM - 6PM</p>
        </div>
      </div>
      <div className="text-center text-xs mt-8 text-gray-500">
        &copy; {new Date().getFullYear()} KedarStationery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
