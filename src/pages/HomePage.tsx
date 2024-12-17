import React from 'react';
import { Hero } from '../components/home/Hero';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { BlogPreview } from '../components/home/BlogPreview';

export function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <BlogPreview />
    </>
  );
}