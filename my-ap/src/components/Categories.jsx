import React from 'react';
import { Gamepad2, Sword, Car, Puzzle, Users, Zap } from 'lucide-react';

const categories = [
  { name: 'Action', icon: Sword, color: 'from-red-500 to-orange-500', games: '2,847' },
  { name: 'Adventure', icon: Gamepad2, color: 'from-blue-500 to-cyan-500', games: '1,923' },
  { name: 'Racing', icon: Car, color: 'from-green-500 to-emerald-500', games: '456' },
  { name: 'Puzzle', icon: Puzzle, color: 'from-purple-500 to-pink-500', games: '1,234' },
  { name: 'Multiplayer', icon: Users, color: 'from-yellow-500 to-orange-500', games: '3,456' },
  { name: 'Indie', icon: Zap, color: 'from-indigo-500 to-purple-500', games: '5,678' },
];

export default function Categories() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase tracking-wide">Browse Categories</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <button
              key={index}
              className="group relative overflow-hidden bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-blue-500/50 rounded-sm p-6 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-sm flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-medium text-center mb-1 uppercase text-sm">{category.name}</h3>
              <p className="text-slate-400 text-xs text-center">{category.games} games</p>
              
              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-sm`} />
            </button>
          );
        })}
      </div>
    </section>
  );
}