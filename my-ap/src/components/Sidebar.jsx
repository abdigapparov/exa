import React from 'react';
import { 
  Home,
  TrendingUp,
  Star,
  Clock,
  Heart,
  Sword,
  Zap,
  Users,
  BookOpen,
  Smile
} from 'lucide-react';

const categories = [
  { name: 'Action', icon: Sword, count: 1234 },
  { name: 'Romance', icon: Heart, count: 856 },
  { name: 'Comedy', icon: Smile, count: 642 },
  { name: 'Adventure', icon: Zap, count: 943 },
  { name: 'Slice of Life', icon: Users, count: 521 },
  { name: 'Drama', icon: BookOpen, count: 734 },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900/50 backdrop-blur-sm border-r border-gray-700/50 min-h-screen">
      <div className="p-6">
        <div className="mb-8">
          <h2 className="text-white font-semibold text-lg mb-4">Browse</h2>
          <nav className="space-y-2">
            <a href="#" className="flex items-center space-x-3 text-blue-400 bg-blue-500/10 px-3 py-2 rounded-lg">
              <Home className="h-4 w-4" />
              <span>Featured</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-lg transition-colors">
              <TrendingUp className="h-4 w-4" />
              <span>Trending</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-lg transition-colors">
              <Star className="h-4 w-4" />
              <span>Top Rated</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-lg transition-colors">
              <Clock className="h-4 w-4" />
              <span>Recently Updated</span>
            </a>
          </nav>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Genres</h3>
          <div className="space-y-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <a 
                  key={category.name}
                  href="#" 
                  className="flex items-center justify-between text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-lg transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="h-4 w-4" />
                    <span>{category.name}</span>
                  </div>
                  <span className="text-xs text-gray-500 group-hover:text-gray-400">{category.count}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;