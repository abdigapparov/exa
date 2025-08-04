import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, User, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-white">
              <span className="text-blue-400">Steam</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                STORE
              </a>
              <a href="#" className="text-slate-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                LIBRARY
              </a>
              <a href="#" className="text-slate-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                COMMUNITY
              </a>
              <a href="#" className="text-slate-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                SUPPORT
              </a>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="search"
                className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-slate-300 hover:text-white p-2 relative">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
            </button>
            <button className="text-slate-300 hover:text-white p-2 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">2</span>
            </button>
            <button className="text-slate-300 hover:text-white p-2">
              <User className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="text-white block px-3 py-2 text-base font-medium">STORE</a>
            <a href="#" className="text-slate-300 block px-3 py-2 text-base font-medium">LIBRARY</a>
            <a href="#" className="text-slate-300 block px-3 py-2 text-base font-medium">COMMUNITY</a>
            <a href="#" className="text-slate-300 block px-3 py-2 text-base font-medium">SUPPORT</a>
          </div>
        </div>
      )}
    </nav>
  );
}