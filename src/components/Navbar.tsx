
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Book, BookOpen } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface NavbarProps {
  onSearch?: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-spice-orange" />
            <div className="text-xl font-bold font-poppins">
              <span className="text-spice-orange">Indian</span>
              <span className="text-spice-purple">Recipe</span>
              <span>Maven</span>
            </div>
          </Link>
          
          <div className="relative w-full max-w-md mx-4 hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search for recipes..." 
              className="pl-10 rounded-full border-spice-orange/30 focus:border-spice-orange"
              onChange={handleSearchChange}
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-spice-orange font-medium transition-colors">Home</Link>
            <Link to="/recipes" className="text-foreground hover:text-spice-orange font-medium transition-colors">Recipes</Link>
            <Link to="/about" className="text-foreground hover:text-spice-orange font-medium transition-colors">About</Link>
          </nav>
          
          <div className="flex md:hidden">
            <button className="p-2 text-foreground">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-foreground">
              <Book className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="md:hidden px-4 py-2 border-t">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            placeholder="Search for recipes..." 
            className="pl-10 rounded-full border-spice-orange/30"
            onChange={handleSearchChange}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
