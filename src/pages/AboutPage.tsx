import React from 'react';
import { Shield, Users, Award, Heart } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-zinc-300 mb-8">
            At vapes.center, we're dedicated to providing accurate information and quality products
            for the vaping community. Our mission is to help users make informed decisions about
            vaping while prioritizing safety and education.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-zinc-800 p-6 rounded-lg">
              <Shield className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Safety First</h3>
              <p className="text-zinc-300">
                We prioritize user safety through education and quality product recommendations.
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg">
              <Users className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Community Focus</h3>
              <p className="text-zinc-300">
                Building a supportive community of informed and responsible users.
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg">
              <Award className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Quality Products</h3>
              <p className="text-zinc-300">
                Curating only the best and most reliable products in the market.
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg">
              <Heart className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Customer Care</h3>
              <p className="text-zinc-300">
                Dedicated support and guidance for all our users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}