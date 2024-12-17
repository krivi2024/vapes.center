import React from 'react';
import type { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <span className="text-purple-400 text-sm font-semibold">
          {product.category}
        </span>
        <h3 className="text-xl font-bold text-white mt-2">
          {product.name}
        </h3>
        <p className="text-zinc-400 mt-2">
          {product.description}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-white">${product.price}</span>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}