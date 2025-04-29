import React from 'react';
import { ChefHat } from 'lucide-react';
import RecipeCard from './RecipeCard';
import { Recipe } from '@/data/recipes';

interface FeaturedRecipesProps {
  recipes: Recipe[];
}

const FeaturedRecipes: React.FC<FeaturedRecipesProps> = ({ recipes }) => {
  // Filter featured recipes, or take the first 4 if none are marked as featured
  const featuredRecipes = recipes.filter(recipe => recipe.featured).slice(0, 4);
  
  return (
    <section className="py-12 container mx-auto px-4">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ChefHat className="h-6 w-6 text-spice-orange" />
          <h2 className="text-2xl md:text-3xl font-bold font-poppins">Featured Recipes</h2>
        </div>
        <a href="/recipes" className="text-spice-orange hover:underline font-medium">
          View all recipes
        </a>
      </div>
      
      {featuredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main featured recipe */}
          <div className="md:col-span-2">
            <RecipeCard recipe={featuredRecipes[0]} featured />
          </div>
          
          {/* Other featured recipes */}
          {featuredRecipes.slice(1).map((recipe) => (
            <div key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      ) : (
        <p>No featured recipes available.</p>
      )}
    </section>
  );
};

export default FeaturedRecipes;
