import React from 'react';
import { Search, User, Menu, Bookmark } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-white font-bold text-xl">Steam</span>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Store</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Library</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Community</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Trending</a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search "
                className="bg-gray-800 text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 w-64"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Bookmark className="h-5 w-5" />
            </button>
            
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <User className="h-5 w-5" />
            </button>
            
            <button className="p-2 text-gray-400 hover:text-white transition-colors md:hidden">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;