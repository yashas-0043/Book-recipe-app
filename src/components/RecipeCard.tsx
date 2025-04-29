
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Recipe } from '@/data/recipes';

interface RecipeCardProps {
  recipe: Recipe;
  featured?: boolean;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, featured = false }) => {
  const totalTime = recipe.prepTime + recipe.cookTime;
  
  if (featured) {
    return (
      <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow group">
        <Link to={`/recipe/${recipe.id}`} className="block">
          <div className="relative h-[400px]">
            <img 
              src={recipe.image} 
              alt={recipe.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-spice-orange px-3 py-1 rounded-full text-xs font-medium">
                  Featured
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {totalTime} min
                </span>
              </div>
              <h2 className="text-2xl font-bold font-poppins mb-2">{recipe.name}</h2>
              <p className="line-clamp-2 text-white/80">{recipe.description}</p>
            </div>
          </div>
        </Link>
      </Card>
    );
  }
  
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all group h-full">
      <Link to={`/recipe/${recipe.id}`} className="block h-full">
        <div className="relative h-48">
          <img 
            src={recipe.image} 
            alt={recipe.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="absolute top-2 right-2">
            <span className="bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-spice-orange">
              {recipe.difficulty}
            </span>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold font-poppins line-clamp-1 mb-1">{recipe.name}</h3>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{recipe.description}</p>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{totalTime} min</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>Serves {recipe.servings}</span>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default RecipeCard;
