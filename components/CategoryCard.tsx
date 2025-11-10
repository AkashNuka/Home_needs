'use client';

import React from 'react';
import Image from 'next/image';
import { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
  onSelect: (categoryId: string) => void;
}

export default function CategoryCard({ category, onSelect }: CategoryCardProps) {
  return (
    <div
      onClick={() => onSelect(category.id)}
      className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all cursor-pointer overflow-hidden border border-gray-200 hover:border-primary-400"
    >
      <div className="relative h-32 w-full">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-center">{category.name}</h3>
      </div>
    </div>
  );
}
