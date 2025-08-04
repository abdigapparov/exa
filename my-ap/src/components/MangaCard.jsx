import React from 'react';
import { Star, Eye, Clock } from 'lucide-react';

const MangaCard = ({
  title,
  author,
  rating,
  chapters,
  status,
  genres,
  image,
  views,
  lastUpdated
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Ongoing': return 'bg-green-500';
      case 'Completed': return 'bg-blue-500';
      case 'Hiatus': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="group relative bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
        
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 text-xs font-medium text-white rounded-full ${getStatusColor(status)}`}>
            {status}
          </span>
        </div>
        
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1">
          <div className="flex items-center space-x-1 text-yellow-400">
            <Star className="h-3 w-3 fill-current" />
            <span className="text-xs font-medium text-white">{rating}</span>
          </div>
        </div>

        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-white font-bold text-lg mb-1 line-clamp-2 group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-300 text-sm">{author}</p>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <Eye className="h-3 w-3" />
              <span>{views}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{lastUpdated}</span>
            </div>
          </div>
          <span className="text-sm text-gray-400">{chapters} chapters</span>
        </div>

        <div className="flex flex-wrap gap-1">
          {genres.slice(0, 3).map((genre) => (
            <span 
              key={genre}
              className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-md"
            >
              {genre}
            </span>
          ))}
          {genres.length > 3 && (
            <span className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-md">
              +{genres.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MangaCard;