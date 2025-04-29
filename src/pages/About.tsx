
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        <div className="bg-gradient-to-r from-spice-orange to-spice-yellow py-12 px-4 text-white text-center">
          <div className="container mx-auto max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              About Indian Recipe Maven
            </h1>
            <p className="text-lg opacity-90">
              Our journey to bring authentic Indian flavors to your kitchen
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 flex justify-center">
              <BookOpen className="h-16 w-16 text-spice-orange" />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-center mb-8">
                Indian Recipe Maven is dedicated to preserving and sharing authentic Indian recipes from all regions of India, making them accessible to food lovers worldwide.
              </p>
              
              <h2 className="text-2xl font-poppins font-semibold mt-8 mb-4">Our Mission</h2>
              <p>
                Our mission is to celebrate the rich culinary traditions of India by providing carefully tested recipes with clear instructions that anyone can follow. We believe that food is not just about nourishment but also about culture, history, and community.
              </p>
              
              <h2 className="text-2xl font-poppins font-semibold mt-8 mb-4">Our Recipes</h2>
              <p>
                Each recipe in our collection has been carefully researched and tested to ensure authenticity and reliability. We provide detailed instructions, ingredient measurements, and cultural context to help you understand the significance of each dish.
              </p>
              
              <h2 className="text-2xl font-poppins font-semibold mt-8 mb-4">Regional Cuisines</h2>
              <p>
                India's cuisine varies dramatically from region to region, influenced by local ingredients, climate, culture, and history. We strive to represent this diversity by including recipes from North, South, East, and West India, as well as lesser-known regional specialties.
              </p>
              
              <div className="my-10 p-6 bg-muted rounded-lg text-center">
                <Heart className="h-8 w-8 text-spice-orange mx-auto mb-4" />
                <p className="italic">
                  "Cooking is like love. It should be entered into with abandon or not at all."
                </p>
                <p className="font-medium mt-2">— Harriet Van Horne</p>
              </div>
              
              <h2 className="text-2xl font-poppins font-semibold mt-8 mb-4">Join Our Community</h2>
              <p>
                We invite you to join our community of Indian food enthusiasts. Try our recipes, share your experiences, and connect with others who share your passion for Indian cuisine. Together, we can keep these culinary traditions alive for generations to come.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
