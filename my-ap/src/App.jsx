import React from 'react';
import Navigation from './components/Navigation';
import HeroBanner from './components/HeroBanner';
import Categories from './components/Categories';
import GameSection from './components/GameSection';
import Footer from './components/Footer';
import { featuredGames, newReleases, specialOffers, topSellers } from './components/game';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import FeaturedCarousel from './components/FeaturedCarousel';
import MangaGrid from './components/MangaGrid';


function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <HeroBanner />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Categories />
        
        <GameSection 
          title="Featured & Recommended" 
          subtitle="Based on your preferences and trending games"
          games={featuredGames}
        />
        
        <GameSection 
          title="New & Trending" 
          subtitle="Latest releases and popular games"
          games={newReleases}
        />
        
        <GameSection 
          title="Special Offers" 
          subtitle="Limited time deals and weekend sales"
          games={specialOffers}
        />
        
        <GameSection 
          title="Top Sellers" 
          subtitle="Most popular games on Steam"
          games={topSellers}
        />
        
      </main>
      
      <Footer />
      <Header />
      <Sidebar />
      <FeaturedCarousel />
      <MangaGrid />
    </div>
  );
}

export default App;