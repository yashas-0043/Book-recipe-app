
import React, { useState } from 'react';
import { recipes } from '@/data/recipes';
import Hero from '@/components/Hero';
import FeaturedRecipes from '@/components/FeaturedRecipes';
import RecipeList from '@/components/RecipeList';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllRecipes, setShowAllRecipes] = useState(false);
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setShowAllRecipes(true);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onSearch={handleSearch} />
      
      <div className="flex-1">
        {!showAllRecipes ? (
          <>
            <Hero onSearch={handleSearch} />
            <FeaturedRecipes recipes={recipes} />
            
            {/* Categories section */}
            <section className="py-12 bg-muted/30">
              <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-8 text-center">
                  Explore By Category
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['North Indian', 'South Indian', 'Vegetarian', 'Desserts'].map((category) => (
                    <div 
                      key={category} 
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    >
                      <div className="h-32 bg-gradient-to-r from-spice-orange to-spice-yellow flex items-center justify-center">
                        <span className="text-white text-xl font-medium font-poppins">{category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            
            {/* Newsletter section */}
            <section className="py-16 bg-gradient-to-r from-spice-purple to-spice-orange text-white">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-4">
                  Join Our Culinary Journey
                </h2>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                  Subscribe to our newsletter for new recipes, cooking tips, and special offers delivered straight to your inbox.
                </p>
                <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-3 flex-1 rounded-md border-white/30 bg-white/10 text-white placeholder:text-white/60"
                  />
                  <button className="px-6 py-3 bg-white text-spice-purple font-medium rounded-md hover:bg-white/90 transition-colors">
                    Subscribe
                  </button>
                </form>
              </div>
            </section>
          </>
        ) : (
          <RecipeList recipes={recipes} searchQuery={searchQuery} />
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
