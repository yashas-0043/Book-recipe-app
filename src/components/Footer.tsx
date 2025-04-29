
import React from 'react';
import { BookOpen, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-spice-orange/90 to-spice-yellow/90 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-8 w-8" />
              <div className="text-xl font-bold font-poppins">
                IndianRecipeMaven
              </div>
            </div>
            <p className="text-white/80 mb-4">
              Discover authentic Indian recipes, from spicy curries to sweet desserts. 
              Our collection features traditional dishes from various regions of India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white/60 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white/60 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white/60 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white/60 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-poppins text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white/60 transition-colors">Home</a></li>
              <li><a href="/recipes" className="hover:text-white/60 transition-colors">All Recipes</a></li>
              <li><a href="/about" className="hover:text-white/60 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-poppins text-lg font-semibold mb-4">Recipe Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white/60 transition-colors">North Indian</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">South Indian</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">Vegetarian</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">Desserts</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Indian Recipe Maven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
