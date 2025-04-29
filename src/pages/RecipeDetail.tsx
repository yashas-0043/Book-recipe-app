import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Users, ChefHat, Utensils, IndianRupee } from 'lucide-react';
import { recipes } from '@/data/recipes';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import NutritionCard from '@/components/NutritionCard';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = recipes.find(r => r.id === id);
  
  // Fix to ensure images load properly
  const getImagePath = (imagePath: string) => {
    // If the path already starts with http/https, return as is
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    // Otherwise, use the path as is (for local files)
    return imagePath;
  };
  
  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8">
          <h1 className="text-3xl font-bold mb-4">Recipe Not Found</h1>
          <p className="text-muted-foreground mb-6">The recipe you're looking for doesn't exist or has been removed.</p>
          <a href="/" className="text-spice-orange hover:underline">Return to Home</a>
        </div>
      </div>
    );
  }
  
  const totalTime = recipe.prepTime + recipe.cookTime;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        {/* Hero image */}
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img 
            src={getImagePath(recipe.image)} 
            alt={recipe.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {recipe.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="bg-white/20 backdrop-blur-sm text-white">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white font-poppins">
                {recipe.name}
              </h1>
            </div>
          </div>
        </div>
        
        {/* Recipe content */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <p className="text-lg text-muted-foreground">{recipe.description}</p>
              </div>
              
              {/* Meta information */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <Clock className="h-6 w-6 text-spice-orange mb-2" />
                    <span className="font-medium">{totalTime} min</span>
                    <span className="text-xs text-muted-foreground">Total Time</span>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <Users className="h-6 w-6 text-spice-orange mb-2" />
                    <span className="font-medium">{recipe.servings}</span>
                    <span className="text-xs text-muted-foreground">Servings</span>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <ChefHat className="h-6 w-6 text-spice-orange mb-2" />
                    <span className="font-medium">{recipe.difficulty}</span>
                    <span className="text-xs text-muted-foreground">Difficulty</span>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <Utensils className="h-6 w-6 text-spice-orange mb-2" />
                    <span className="font-medium">{recipe.prepTime} min</span>
                    <span className="text-xs text-muted-foreground">Prep Time</span>
                  </CardContent>
                </Card>
              </div>
              
              {/* Ingredients */}
              <div>
                <h2 className="text-2xl font-semibold font-poppins mb-4 flex items-center">
                  <IndianRupee className="h-6 w-6 mr-2 text-spice-orange" />
                  Ingredients
                </h2>
                <div className="bg-muted rounded-lg p-6">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-spice-orange"></div>
                        <span>{ingredient.name}</span>
                        <span className="text-muted-foreground ml-auto">{ingredient.quantity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Instructions */}
              <div>
                <h2 className="text-2xl font-semibold font-poppins mb-4 flex items-center">
                  <Utensils className="h-6 w-6 mr-2 text-spice-orange" />
                  Instructions
                </h2>
                <ol className="space-y-6">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-spice-orange text-white flex items-center justify-center font-medium">
                        {index + 1}
                      </div>
                      <div className="flex-1 pt-1">
                        <p>{instruction}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              <NutritionCard {...recipe.nutritionFacts} />
              
              {/* Tips section could go here */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-3">Chef's Tips</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-2">
                      <div className="h-2 w-2 rounded-full bg-spice-orange mt-2"></div>
                      <p>For authentic flavor, toast your spices before adding them to the dish.</p>
                    </li>
                    <li className="flex gap-2">
                      <div className="h-2 w-2 rounded-full bg-spice-orange mt-2"></div>
                      <p>This dish tastes even better the next day as the flavors have time to meld.</p>
                    </li>
                    <li className="flex gap-2">
                      <div className="h-2 w-2 rounded-full bg-spice-orange mt-2"></div>
                      <p>Adjust the spice level according to your preference by varying the amount of chili powder.</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RecipeDetail;
