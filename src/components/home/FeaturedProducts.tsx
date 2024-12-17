import React from 'react';

const products = [
  {
    id: 1,
    name: 'Premium Starter Kit',
    description: 'Perfect for beginners, includes everything needed to start.',
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800',
    category: 'Starter Kits'
  },
  {
    id: 2,
    name: 'Advanced Pod System',
    description: 'Compact and powerful, ideal for experienced users.',
    image: 'https://images.unsplash.com/photo-1567861911437-538298e4232c?auto=format&fit=crop&w=800',
    category: 'Pod Systems'
  },
  {
    id: 3,
    name: 'Premium Mod Kit',
    description: 'High-performance device for enthusiasts.',
    image: 'https://images.unsplash.com/photo-1563225409-127c18758bd5?auto=format&fit=crop&w=800',
    category: 'Mods'
  }
];

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-zinc-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
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
                <a
                  href={`/products/${product.id}`}
                  className="inline-block mt-4 text-purple-400 hover:text-purple-300"
                >
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}