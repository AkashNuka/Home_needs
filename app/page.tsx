'use client';

import React, { useState, useRef, useEffect } from 'react';
import { categories, products } from '@/data/products';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('');
  const categoryRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory('');
    
    // Scroll to category section
    const element = categoryRefs.current[categoryId];
    if (element) {
      const offset = 80; // Navbar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const getFilteredProducts = (categoryId: string, subcategory?: string) => {
    return products.filter(p => {
      if (subcategory) {
        return p.category === categoryId && p.subcategory === subcategory;
      }
      return p.category === categoryId;
    });
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to HomeNeeds
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Quick delivery of daily essentials to your doorstep
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm">
            <span>⚡ Fast Delivery</span>
            <span>•</span>
            <span>🌟 Quality Products</span>
            <span>•</span>
            <span>💯 Best Prices</span>
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar - Categories */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-20">
              <h2 className="text-xl font-bold mb-4 px-2">Shop by Category</h2>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                {categories.map((category) => (
                  <CategoryCard
                    key={category.id}
                    category={category}
                    onSelect={handleCategorySelect}
                  />
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content - Products */}
          <div className="flex-1">
            {categories.map((category) => {
              const categoryProducts = getFilteredProducts(category.id);
              
              if (categoryProducts.length === 0) return null;

              return (
                <section
                  key={category.id}
                  ref={(el) => {
                    if (el) categoryRefs.current[category.id] = el;
                  }}
                  className="mb-12"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-2xl font-bold">{category.name}</h2>
                    <span className="text-sm text-gray-500">
                      ({categoryProducts.length} items)
                    </span>
                  </div>

                  {/* Subcategories if available */}
                  {category.subcategories && category.subcategories.length > 0 && (
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => setSelectedSubcategory('')}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            selectedSubcategory === ''
                              ? 'bg-primary-500 text-white'
                              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                          }`}
                        >
                          All
                        </button>
                        {category.subcategories.map((sub) => (
                          <button
                            key={sub}
                            onClick={() => setSelectedSubcategory(sub)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                              selectedSubcategory === sub
                                ? 'bg-primary-500 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                            }`}
                          >
                            {sub}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Products Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                    {(selectedSubcategory && category.subcategories
                      ? getFilteredProducts(category.id, selectedSubcategory)
                      : categoryProducts
                    ).map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg font-semibold mb-2">HomeNeeds - Your Daily Essentials Store</p>
          <p className="text-sm text-gray-400">Quick commerce at your fingertips</p>
          <p className="text-xs text-gray-500 mt-4">© 2024 HomeNeeds. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
