import React from 'react';

export function BlogPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Blog posts will be mapped here */}
        <article className="bg-zinc-800 rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800"
            alt="Blog post"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-purple-400 text-sm font-semibold">Safety</span>
              <span className="mx-2 text-zinc-500">•</span>
              <time className="text-sm text-zinc-400">March 15, 2024</time>
            </div>
            <h2 className="text-xl font-bold mb-2">Essential Safety Tips for New Users</h2>
            <p className="text-zinc-400 mb-4">
              Learn the fundamental safety guidelines every vaper should know before starting their journey.
            </p>
            <a href="#" className="text-purple-400 hover:text-purple-300">
              Read more →
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}