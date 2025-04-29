
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface HeroProps {
  onSearch?: (query: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('search') as string;
    
    if (onSearch && query) {
      onSearch(query);
    }
  };
  
  return (
    <div className="relative bg-gradient-to-r from-spice-orange to-spice-yellow">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold font-poppins mb-6">
            Discover Authentic Indian Recipes
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Explore traditional flavors from across India, with detailed recipes, cooking techniques, and cultural insights.
          </p>
          
          <form onSubmit={handleSearch} className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-spice-orange h-5 w-5" />
            <Input 
              name="search"
              placeholder="Search for recipes..." 
              className="pl-10 py-6 rounded-full border-white/30 bg-white text-gray-800 focus:border-white shadow-lg"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-spice-orange text-white px-4 py-1.5 rounded-full hover:bg-spice-orange/90 transition-colors"
            >
              Search
            </button>
          </form>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full">Vegetarian</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full">North Indian</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full">South Indian</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full">Quick & Easy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
