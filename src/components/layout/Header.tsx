import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const linkClass = (path: string) => 
    `transition-colors ${isActive(path) ? 'text-purple-400' : 'hover:text-purple-400'}`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-2' : 'py-4'
    }`}>
      <div className="container mx-auto px-4">
        <nav className={`
          mx-4 rounded-2xl
          ${isScrolled ? 'bg-zinc-900/80 backdrop-blur-lg' : 'bg-zinc-900/60 backdrop-blur-md'}
          transition-all duration-300
          border border-zinc-800/50
        `}>
          <div className="px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  vapes.center
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/products" className={linkClass('/products')}>Products</Link>
                <Link to="/blog" className={linkClass('/blog')}>Blog</Link>
                <Link to="/safety" className={linkClass('/safety')}>Safety</Link>
                <Link to="/about" className={linkClass('/about')}>About</Link>
                <Link to="/contact" className={linkClass('/contact')}>Contact</Link>
                <button className="p-2 hover:bg-zinc-800 rounded-full transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 hover:bg-zinc-800 rounded-full transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden pt-4 pb-6 border-t border-zinc-800/50 mt-4">
                <div className="flex flex-col space-y-4">
                  <Link to="/products" className={linkClass('/products')}>Products</Link>
                  <Link to="/blog" className={linkClass('/blog')}>Blog</Link>
                  <Link to="/safety" className={linkClass('/safety')}>Safety</Link>
                  <Link to="/about" className={linkClass('/about')}>About</Link>
                  <Link to="/contact" className={linkClass('/contact')}>Contact</Link>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}