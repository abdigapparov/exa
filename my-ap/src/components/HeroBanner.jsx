import React from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import home from '../assets/home.png'

export default function HeroBanner() {
  return (
    <div className="relative h-96 md:h-[500px] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
         backgroundImage: `url('https://assetsio.gnwcdn.com/steam-summer-sale-2023.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp')`

        }}
      />
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
              <div className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-sm text-sm font-bold mb-4 uppercase tracking-wide">
                🔥 SUMMER SALE - UP TO 90% OFF
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                ELDEN RING
                <span className="block text-2xl md:text-3xl text-slate-300 font-normal mt-2">
                  Shadow of the Erdtree Edition
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-md">
                Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-sm font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center uppercase">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Trailer
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-sm font-semibold transition-all duration-200 uppercase">
                  Add to Cart - $39.99
                </button>
              </div>
            </div>

            {/* Right Content - Featured Game Card */}
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="bg-slate-900/90 backdrop-blur-sm rounded-sm p-6 border border-slate-700 max-w-sm">
                <img 
                  src={home}
                  alt="Featured Game"
                  className="w-full h-48 object-cover rounded-sm mb-4"
                />
                <h3 className="text-xl font-bold text-white mb-2">Cyberpunk 2077</h3>
                <p className="text-slate-300 text-sm mb-4">
                  An open-world, action-adventure RPG set in the megalopolis of Night City.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-slate-400 line-through">$59.99</span>
                    <span className="text-green-400 font-bold text-lg">$19.99</span>
                  </div>
                  <span className="bg-green-600 text-white px-2 py-1 rounded-sm text-sm">-67%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-sm transition-all">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-sm transition-all">
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-3 h-3 bg-white rounded-full"></div>
        <div className="w-3 h-3 bg-white/50 rounded-full"></div>
        <div className="w-3 h-3 bg-white/50 rounded-full"></div>
      </div>
    </div>
  );
}