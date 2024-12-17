import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-zinc-400">
              Dedicated to providing accurate information and quality products for the vaping community.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="/products" className="hover:text-purple-400">Products</a></li>
              <li><a href="/blog" className="hover:text-purple-400">Blog</a></li>
              <li><a href="/safety" className="hover:text-purple-400">Safety Guidelines</a></li>
              <li><a href="/contact" className="hover:text-purple-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="/privacy" className="hover:text-purple-400">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-purple-400">Terms of Service</a></li>
              <li><a href="/disclaimer" className="hover:text-purple-400">Disclaimer</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400"><Facebook /></a>
              <a href="#" className="hover:text-purple-400"><Twitter /></a>
              <a href="#" className="hover:text-purple-400"><Instagram /></a>
              <a href="#" className="hover:text-purple-400"><Youtube /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-6 text-center text-zinc-400">
          <p>© {new Date().getFullYear()} vapes.center. All rights reserved.</p>
          <p className="mt-2 text-sm">Age verification required. For adults only.</p>
        </div>
      </div>
    </footer>
  );
}