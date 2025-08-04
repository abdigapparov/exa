import React from 'react';
import MangaCard from './MangaCard';
import { mangaData } from '../components/mangaData';

const MangaGrid = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Popular Manga</h2>
        <div className="flex items-center space-x-4">
          <select className="bg-gray-800 text-white border border-gray-600 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none">
            <option>All Genres</option>
            <option>Action</option>
            <option>Romance</option>
            <option>Comedy</option>
            <option>Drama</option>
          </select>
          <select className="bg-gray-800 text-white border border-gray-600 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none">
            <option>Sort by Rating</option>
            <option>Sort by Views</option>
            <option>Sort by Updated</option>
            <option>Sort by Chapters</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mangaData.map((manga) => (
          <MangaCard
            key={manga.id}
            title={manga.title}
            author={manga.author}
            rating={manga.rating}
            chapters={manga.chapters}
            status={manga.status}
            genres={manga.genres}
            image={manga.image}
            views={manga.views}
            lastUpdated={manga.lastUpdated}
          />
        ))}
      </div>
    </div>
  );
};

export default MangaGrid;