import React from 'react';

const posts = [
  {
    id: 1,
    title: 'Essential Safety Tips for New Users',
    excerpt: 'Learn the fundamental safety guidelines every vaper should know.',
    date: '2024-03-15',
    category: 'Safety'
  },
  {
    id: 2,
    title: 'Understanding Different Types of Devices',
    excerpt: 'A comprehensive guide to various vaping devices and their uses.',
    date: '2024-03-14',
    category: 'Education'
  },
  {
    id: 3,
    title: 'Maintenance Guide for Longevity',
    excerpt: 'How to properly maintain your device for optimal performance.',
    date: '2024-03-13',
    category: 'Maintenance'
  }
];

export function BlogPreview() {
  return (
    <section className="py-16 bg-zinc-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-zinc-900 rounded-lg p-6">
              <div className="mb-4">
                <span className="text-sm font-semibold text-purple-400">
                  {post.category}
                </span>
                <time className="text-sm text-zinc-400 ml-4">
                  {post.date}
                </time>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {post.title}
              </h3>
              <p className="text-zinc-400 mb-4">
                {post.excerpt}
              </p>
              <a
                href={`/blog/${post.id}`}
                className="text-purple-400 hover:text-purple-300"
              >
                Read more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}