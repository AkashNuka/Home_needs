'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { Plus, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { cart, addToCart } = useCart();
  const isInCart = cart.some(item => item.id === product.id);

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 overflow-hidden">
      <div className="relative h-40 w-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-3">
        <h3 className="font-medium text-sm mb-1 line-clamp-2">{product.name}</h3>
        <p className="text-xs text-gray-500 mb-2">{product.unit}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary-600">₹{product.price}</span>
          
          <button
            onClick={() => addToCart(product)}
            className={`px-3 py-1.5 rounded-md font-medium text-sm flex items-center gap-1 transition-colors ${
              isInCart
                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                : 'bg-primary-500 text-white hover:bg-primary-600'
            }`}
          >
            {isInCart ? (
              <>
                <Check className="h-4 w-4" />
                Added
              </>
            ) : (
              <>
                <Plus className="h-4 w-4" />
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
