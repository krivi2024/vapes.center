import React from 'react';

export function Hero() {
  return (
    <div className="relative min-h-screen -mt-24 bg-zinc-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1567861911437-538298e4232c?auto=format&fit=crop&w=2000&q=80"
          alt="Modern vaping device"
          className="w-full h-full object-cover opacity-40"
        />
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(to right, rgba(126, 34, 206, 0.3), rgba(236, 72, 153, 0.3))',
            mixBlendMode: 'multiply'
          }}
        />
      </div>
      
      <div className="relative h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
          <div className="max-w-3xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Discover the World of
              <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mt-2">
                Premium Vaping
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-200 max-w-2xl mb-8 leading-relaxed mx-auto">
              Explore our curated collection of high-quality vaping devices, expert reviews, 
              and essential safety guidelines for a better experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300"
              >
                Browse Products
              </a>
              <a
                href="/safety"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold bg-zinc-800 hover:bg-zinc-700 text-white transition-colors duration-300"
              >
                Safety Guidelines
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient bottom fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to top, rgb(24, 24, 27) 0%, rgba(24, 24, 27, 0) 100%)'
        }}
      />
    </div>
  );
}