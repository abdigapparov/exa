import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Plus } from 'lucide-react';

export default function GameCard({ 
  title, 
  price, 
  originalPrice, 
  discount, 
  image, 
  rating, 
  tags, 
  isOnSale 
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div 
      className="bg-slate-800/50 rounded-sm overflow-hidden border border-slate-700/50 transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transform hover:-translate-y-1 hover:bg-slate-800/80"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden group">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="p-4 w-full">
            <button className="w-full bg-blue-600/90 backdrop-blur-sm text-white py-2 rounded-sm hover:bg-blue-700 transition-all text-sm font-semibold uppercase">
              View in Store
            </button>
          </div>
        </div>

        {/* Sale Badge */}
        {isOnSale && discount && (
          <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded-sm text-xs font-bold">
            {discount}
          </div>
        )}

        {/* Wishlist Button */}
        <button 
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-2 right-2 p-2 bg-black/50 backdrop-blur-sm rounded-sm hover:bg-black/70 transition-all"
        >
          <Heart 
            className={`w-4 h-4 ${isWishlisted ? 'text-red-500 fill-current' : 'text-white'}`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-white font-semibold text-base mb-2 line-clamp-1">{title}</h3>
        
        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(rating) 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-slate-600'
                }`}
              />
            ))}
          </div>
          <span className="text-slate-400 text-xs ml-2">({rating})</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {tags.slice(0, 2).map((tag, index) => (
            <span 
              key={index}
              className="bg-slate-700/50 text-slate-300 px-2 py-1 rounded-sm text-xs border border-slate-600/50"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            {originalPrice && (
              <span className="text-slate-400 line-through text-xs">{originalPrice}</span>
            )}
            <span className={`font-bold text-base ${
              isOnSale ? 'text-green-400' : 'text-white'
            }`}>
              {price}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-sm transition-all duration-200">
              <Plus className="w-4 h-4" />
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-sm transition-all duration-200 text-xs font-semibold uppercase">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}