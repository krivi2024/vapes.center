import React from 'react';
import { productData } from '../data/products';
import { ProductGrid } from '../components/products/ProductGrid';
import { ProductFilters } from '../components/products/ProductFilters';

export function ProductsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/4">
          <ProductFilters />
        </aside>
        <main className="md:w-3/4">
          <ProductGrid products={productData} />
        </main>
      </div>
    </div>
  );
}