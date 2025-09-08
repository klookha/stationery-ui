import React, { useState } from 'react';
import { products, categories, brands, Product } from '../data/products';
import { Dialog } from '@headlessui/react';

const ProductListing = () => {

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState("default");
  // State for filters
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

  const [cart, setCart] = useState<{ [productId: string]: number }>({});

  const addToCart = (productId: string) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };


  // Filtered products based on selected filters
  const filteredProducts = products.filter((product) => {
    if (selectedCategory && product.category !== selectedCategory) return false;
    if (selectedBrand && product.brand !== selectedBrand) return false;
    if (maxPrice !== null && product.price > maxPrice) return false;
    return true;
  });

  // Sorted + filtered products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'priceLowToHigh') return a.price - b.price;
    if (sortOption === 'priceHighToLow') return b.price - a.price;
    if (sortOption === 'nameAsc') return a.name.localeCompare(b.name);
    if (sortOption === 'nameDesc') return b.name.localeCompare(a.name);
    return 0;
  });


  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-6 md:px-20 py-12 gap-8">
      {/* Mobile filter toggle button */}
      <div className="md:hidden flex justify-end mb-4">
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Filters
        </button>
      </div>
      <Dialog
        open={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        className="relative z-50 md:hidden"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-y-0 right-0 w-4/5 bg-white p-4 shadow-lg">
          <button
            onClick={() => setIsMobileFilterOpen(false)}
            className="mb-4 text-red-500"
          >
            ✖ Close
          </button>

          {/* Filters UI inside mobile drawer */}
          {/* You can reuse the same JSX from your sidebar here */}
        </div>
      </Dialog>
      {/* Sidebar Filters */}
      <aside className="hidden md:block md:w-1/4 bg-gray-50 p-4 rounded-lg shadow-sm">
        <h3 className="font-semibold text-lg mb-4">Filters</h3>

        {/* Category Filter */}
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Category</h4>
          <select
            value={selectedCategory ?? ''}
            onChange={(e) =>
              setSelectedCategory(e.target.value || null)
            }
            className="w-full p-2 border rounded"
          >
            <option value="">All</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Brand Filter */}
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Brand</h4>
          <select
            value={selectedBrand ?? ''}
            onChange={(e) => setSelectedBrand(e.target.value || null)}
            className="w-full p-2 border rounded"
          >
            <option value="">All</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* Price Filter */}
        <div>
          <h4 className="font-semibold mb-2">Max Price (₹)</h4>
          <input
            type="number"
            min={0}
            value={maxPrice ?? ''}
            onChange={(e) => {
              const val = e.target.value;
              setMaxPrice(val ? parseInt(val, 10) : null);
            }}
            placeholder="No max"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Reset Filters Button */}
        <button
          onClick={() => {
            setSelectedCategory(null);
            setSelectedBrand(null);
            setMaxPrice(null);
          }}
          className="mt-6 w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Reset Filters
        </button>
      </aside>
      <div className="flex justify-end mb-4">
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="default">Sort By</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
          <option value="nameAsc">Name: A to Z</option>
          <option value="nameDesc">Name: Z to A</option>
        </select>
      </div>
      {/* Product Grid */}
      <section className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {filteredProducts.length === 0 && (
          <p className="text-gray-500 col-span-full text-center">
            No products match your filters.
          </p>
        )}

        {sortedProducts.map((product: Product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-40 w-full object-contain mb-4"
            />
            <h3 className="font-semibold text-gray-800">{product.name}</h3>
            <p className="text-blue-600 font-semibold mt-auto">₹{product.price}</p>
            <button
              onClick={() => addToCart(product.name)}
              className="mt-4 bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700 transition"
            >
              {cart[product.id] ? `Added (${cart[product.id]})` : 'Add to Cart'}
            </button>

          </div>
        ))}
        {/* Product item count */}
        <p className="text-right font-medium text-blue-600 mb-4">
          Cart Items: {Object.values(cart).reduce((sum, qty) => sum + qty, 0)}
        </p>
      </section>
    </div>
  );
};

export default ProductListing;
