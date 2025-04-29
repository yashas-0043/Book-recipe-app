
import React, { useState } from 'react';
import { Recipe } from '@/data/recipes';
import RecipeCard from './RecipeCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface RecipeListProps {
  recipes: Recipe[];
  searchQuery?: string;
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes, searchQuery = '' }) => {
  const [query, setQuery] = useState(searchQuery);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  // Extract all unique tags from recipes
  const allTags = Array.from(
    new Set(recipes.flatMap(recipe => recipe.tags))
  ).sort();
  
  // Filter recipes based on search query and selected tags
  const filteredRecipes = recipes.filter(recipe => {
    const matchesQuery = query === '' || 
      recipe.name.toLowerCase().includes(query.toLowerCase()) || 
      recipe.description.toLowerCase().includes(query.toLowerCase());
      
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.some(tag => recipe.tags.includes(tag));
      
    return matchesQuery && matchesTags;
  });
  
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            placeholder="Search for recipes..." 
            className="pl-10 rounded-full border-spice-orange/30"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <Button
              key={tag}
              variant="outline"
              size="sm"
              className={`rounded-full ${
                selectedTags.includes(tag)
                  ? 'bg-spice-orange text-white hover:bg-spice-orange/80'
                  : 'bg-transparent hover:bg-muted'
              }`}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>
      
      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-lg font-medium mb-2">No recipes found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default RecipeList;
