import React from 'react';
import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react';

const featuredManga = [
  {
    id: 1,
    title: "Attack on Titan",
    description: "Humanity fights for survival against giant humanoid Titans that have brought civilization to the brink of extinction.",
    rating: 4.9,
    chapters: 139,
    image: "https://images.pexels.com/photos/159574/pexels-photo-159574.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
  },
  {
    id: 2,
    title: "One Piece",
    description: "Follow Monkey D. Luffy and his pirate crew in search of the ultimate treasure known as 'One Piece'.",
    rating: 4.8,
    chapters: 1100,
    image: "https://images.pexels.com/photos/1426718/pexels-photo-1426718.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
  },
  {
    id: 3,
    title: "Demon Slayer",
    description: "A young boy becomes a demon slayer to avenge his family and cure his sister who has been turned into a demon.",
    rating: 4.7,
    chapters: 205,
    image: "https://images.pexels.com/photos/161154/pexels-photo-161154.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
  }
];

const FeaturedCarousel = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredManga.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredManga.length) % featuredManga.length);
  };

  const currentManga = featuredManga[currentSlide];

  return (
    <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${currentManga.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      
      <div className="relative h-full flex items-center">
        <div className="max-w-2xl ml-8 text-white">
          <h1 className="text-4xl font-bold mb-4 leading-tight">{currentManga.title}</h1>
          <p className="text-lg text-gray-200 mb-6 leading-relaxed">{currentManga.description}</p>
          
          <div className="flex items-center space-x-6 mb-6">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="font-semibold">{currentManga.rating}</span>
            </div>
            <span className="text-gray-300">{currentManga.chapters} chapters</span>
          </div>

          <div className="flex space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2">
              <Play className="h-4 w-4" />
              <span>Read Now</span>
            </button>
            <button className="bg-gray-800/80 hover:bg-gray-700/80 px-6 py-3 rounded-lg font-semibold transition-colors">
              Add to Library
            </button>
          </div>
        </div>
      </div>

      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {featuredManga.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCarousel;