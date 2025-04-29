
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RecipeList from '@/components/RecipeList';
import { recipes } from '@/data/recipes';

const RecipesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onSearch={setSearchQuery} />
      
      <div className="flex-1">
        <div className="bg-gradient-to-r from-spice-orange to-spice-yellow py-12 px-4 text-white text-center">
          <div className="container mx-auto max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Explore All Recipes
            </h1>
            <p className="text-lg opacity-90">
              Discover our collection of authentic Indian recipes, from hearty curries to sweet desserts.
            </p>
          </div>
        </div>
        
        <RecipeList recipes={recipes} searchQuery={searchQuery} />
      </div>
      
      <Footer />
    </div>
  );
};

export default RecipesPage;
