import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-zinc-800 p-6 rounded-lg text-center">
          <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Email</h3>
          <p className="text-zinc-300">support@vapes.center</p>
        </div>

        <div className="bg-zinc-800 p-6 rounded-lg text-center">
          <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Phone</h3>
          <p className="text-zinc-300">+1 (555) 123-4567</p>
        </div>

        <div className="bg-zinc-800 p-6 rounded-lg text-center">
          <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Location</h3>
          <p className="text-zinc-300">123 Vape Street, CA 90210</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-zinc-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg focus:outline-none focus:border-purple-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg focus:outline-none focus:border-purple-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg focus:outline-none focus:border-purple-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}