import React from 'react';
import GameCard from './GameCard';
import { ChevronRight } from 'lucide-react';

export default function GameSection({ title, subtitle, games, showViewAll = true }) {
  return (
    <section className="mb-12">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 uppercase tracking-wide">{title}</h2>
          {subtitle && (
            <p className="text-slate-400">{subtitle}</p>
          )}
        </div>
        {showViewAll && (
          <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm uppercase">
            <span className="mr-2">Browse All</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {games.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            price={game.price}
            originalPrice={game.originalPrice}
            discount={game.discount}
            image={game.image}
            rating={game.rating}
            tags={game.tags}
            isOnSale={game.isOnSale}
          />
        ))}
      </div>
    </section>
  );
}