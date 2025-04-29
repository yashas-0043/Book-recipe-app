
export interface Recipe {
  id: string;
  name: string;
  description: string;
  image: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  ingredients: {
    name: string;
    quantity: string;
  }[];
  instructions: string[];
  nutritionFacts: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  tags: string[];
  featured: boolean;
}

export const recipes: Recipe[] = [
  {
    id: "butter-chicken",
    name: "Butter Chicken (Murgh Makhani)",
    description: "A rich and creamy tomato-based curry with tender chicken pieces, finished with butter and cream. This popular North Indian dish is known for its mild, slightly sweet flavor.",
    image: "/butter-chicken.jpg",
    prepTime: 20,
    cookTime: 30,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      { name: "Boneless chicken thighs", quantity: "750g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Ginger paste", quantity: "1 tbsp" },
      { name: "Garlic paste", quantity: "1 tbsp" },
      { name: "Garam masala", quantity: "1 tsp" },
      { name: "Red chili powder", quantity: "1 tsp" },
      { name: "Turmeric powder", quantity: "1/2 tsp" },
      { name: "Tomato puree", quantity: "1 cup" },
      { name: "Butter", quantity: "50g" },
      { name: "Heavy cream", quantity: "1/4 cup" },
      { name: "Kasuri methi (dried fenugreek leaves)", quantity: "1 tsp" },
      { name: "Salt", quantity: "to taste" },
      { name: "Sugar", quantity: "1 tsp" }
    ],
    instructions: [
      "Marinate chicken with yogurt, ginger-garlic paste, garam masala, red chili powder, turmeric, and salt for at least 2 hours.",
      "Heat 2 tbsp butter in a pan and cook the marinated chicken until browned.",
      "In the same pan, add tomato puree and cook for 10 minutes until it thickens.",
      "Add the cooked chicken, remaining butter, cream, sugar, and kasuri methi. Simmer for 5-10 minutes.",
      "Garnish with cream and serve hot with naan or rice."
    ],
    nutritionFacts: {
      calories: 420,
      protein: 32,
      carbs: 12,
      fat: 28
    },
    tags: ["Chicken", "Curry", "North Indian", "Creamy", "Popular"],
    featured: true
  },
  {
    id: "biryani",
    name: "Hyderabadi Chicken Biryani",
    description: "A fragrant and spicy layered rice dish made with basmati rice, tender chicken, and aromatic spices. This royal dish from Hyderabad is known for its distinct flavor and presentation.",
    image: "/biryani.jpg",
    prepTime: 30,
    cookTime: 60,
    servings: 6,
    difficulty: "Hard",
    ingredients: [
      { name: "Basmati rice", quantity: "500g" },
      { name: "Chicken, cut into pieces", quantity: "1kg" },
      { name: "Onions, thinly sliced", quantity: "3 large" },
      { name: "Yogurt", quantity: "1 cup" },
      { name: "Ginger-garlic paste", quantity: "2 tbsp" },
      { name: "Green chilies", quantity: "4-5" },
      { name: "Fresh coriander leaves", quantity: "1/2 cup" },
      { name: "Fresh mint leaves", quantity: "1/2 cup" },
      { name: "Ghee", quantity: "4 tbsp" },
      { name: "Biryani masala", quantity: "2 tbsp" },
      { name: "Saffron", quantity: "a pinch" },
      { name: "Warm milk", quantity: "1/4 cup" },
      { name: "Lemon juice", quantity: "2 tbsp" },
      { name: "Salt", quantity: "to taste" }
    ],
    instructions: [
      "Marinate chicken with yogurt, ginger-garlic paste, biryani masala, salt, and lemon juice for at least 2 hours.",
      "Soak saffron in warm milk and set aside.",
      "Wash and soak basmati rice for 30 minutes. Drain, then parboil with whole spices and salt until 70% cooked.",
      "In a heavy-bottomed pot, layer half the rice, then all the marinated chicken, then remaining rice.",
      "Pour saffron milk over the top, sprinkle fried onions, mint, and coriander leaves.",
      "Cover tightly and cook on low heat (dum) for 25-30 minutes.",
      "Mix gently before serving hot with raita."
    ],
    nutritionFacts: {
      calories: 580,
      protein: 35,
      carbs: 65,
      fat: 22
    },
    tags: ["Rice", "Chicken", "Hyderabadi", "Spicy", "One-pot"],
    featured: true
  },
  {
    id: "palak-paneer",
    name: "Palak Paneer",
    description: "A nutritious vegetarian dish made with fresh spinach puree and soft paneer (Indian cottage cheese) cubes, seasoned with aromatic spices. This popular North Indian dish is both healthy and flavorful.",
    image: "/palak-paneer.jpg",
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { name: "Spinach (palak)", quantity: "500g" },
      { name: "Paneer (cottage cheese)", quantity: "250g" },
      { name: "Onion, finely chopped", quantity: "1 medium" },
      { name: "Tomato, chopped", quantity: "1 medium" },
      { name: "Green chilies", quantity: "2" },
      { name: "Garlic cloves", quantity: "4" },
      { name: "Ginger", quantity: "1-inch piece" },
      { name: "Cumin seeds", quantity: "1 tsp" },
      { name: "Garam masala", quantity: "1/2 tsp" },
      { name: "Turmeric powder", quantity: "1/4 tsp" },
      { name: "Red chili powder", quantity: "1/2 tsp" },
      { name: "Heavy cream", quantity: "2 tbsp" },
      { name: "Ghee or oil", quantity: "2 tbsp" },
      { name: "Salt", quantity: "to taste" }
    ],
    instructions: [
      "Blanch spinach leaves in boiling water for 2 minutes. Refresh in cold water, drain and make a smooth puree.",
      "Cut paneer into cubes and lightly fry until golden. Set aside.",
      "Heat ghee in a pan, add cumin seeds, chopped onions, ginger, garlic and sauté until golden brown.",
      "Add tomatoes, green chilies and spices. Cook until tomatoes soften.",
      "Add spinach puree and salt. Simmer for 5 minutes.",
      "Add paneer cubes and cream. Cook for another 5 minutes.",
      "Serve hot with roti or naan."
    ],
    nutritionFacts: {
      calories: 320,
      protein: 18,
      carbs: 15,
      fat: 22
    },
    tags: ["Vegetarian", "Paneer", "Spinach", "North Indian", "Healthy"],
    featured: true
  },
  {
    id: "chole-bhature",
    name: "Chole Bhature",
    description: "A popular Punjabi dish consisting of spicy chickpea curry (chole) served with deep-fried bread (bhature). This indulgent combination is a favorite street food and festive meal across North India.",
    image: "/chole-bhature.jpg",
    prepTime: 40,
    cookTime: 50,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      { name: "Chickpeas (chole)", quantity: "2 cups" },
      { name: "Tea bags", quantity: "2" },
      { name: "Bay leaves", quantity: "2" },
      { name: "Onions, finely chopped", quantity: "2 medium" },
      { name: "Tomatoes, pureed", quantity: "3 medium" },
      { name: "Ginger-garlic paste", quantity: "2 tbsp" },
      { name: "Green chilies", quantity: "2-3" },
      { name: "Chole masala", quantity: "2 tbsp" },
      { name: "All-purpose flour", quantity: "2 cups" },
      { name: "Yogurt", quantity: "1/4 cup" },
      { name: "Baking soda", quantity: "1/2 tsp" },
      { name: "Oil for deep frying", quantity: "as needed" },
      { name: "Salt", quantity: "to taste" }
    ],
    instructions: [
      "Soak chickpeas overnight. Pressure cook with tea bags, bay leaves, and salt until soft.",
      "For chole: Heat oil, sauté onions until golden. Add ginger-garlic paste, green chilies, and spices.",
      "Add tomato puree and cook until oil separates. Add cooked chickpeas and simmer for 15-20 minutes.",
      "For bhature: Mix flour, yogurt, baking soda, salt, and a little water to make a soft dough.",
      "Cover and let it rest for 2-3 hours. Divide into balls and roll into ovals.",
      "Deep fry until puffed and golden brown on both sides.",
      "Serve hot bhature with chole, accompanied by sliced onions and pickle."
    ],
    nutritionFacts: {
      calories: 520,
      protein: 18,
      carbs: 78,
      fat: 16
    },
    tags: ["Punjabi", "Street Food", "Chickpeas", "Bread", "Spicy"],
    featured: false
  },
  {
    id: "masala-dosa",
    name: "Masala Dosa",
    description: "A South Indian delicacy consisting of a thin, crispy crepe made from fermented rice and lentil batter, filled with spiced potato filling. Served with coconut chutney and sambar, it's a complete meal.",
    image: "/masala-dosa.jpg",
    prepTime: 30,
    cookTime: 20,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      { name: "Rice", quantity: "2 cups" },
      { name: "Urad dal (split black gram)", quantity: "1/2 cup" },
      { name: "Fenugreek seeds", quantity: "1 tsp" },
      { name: "Potatoes, boiled and mashed", quantity: "4 medium" },
      { name: "Onion, finely chopped", quantity: "1 large" },
      { name: "Green chilies, chopped", quantity: "2-3" },
      { name: "Mustard seeds", quantity: "1 tsp" },
      { name: "Curry leaves", quantity: "8-10" },
      { name: "Turmeric powder", quantity: "1/2 tsp" },
      { name: "Ginger, grated", quantity: "1 tbsp" },
      { name: "Coriander leaves, chopped", quantity: "2 tbsp" },
      { name: "Oil or ghee", quantity: "for cooking" },
      { name: "Salt", quantity: "to taste" }
    ],
    instructions: [
      "Soak rice, urad dal, and fenugreek seeds separately for 4-5 hours. Grind to a smooth batter.",
      "Mix both batters, add salt, and ferment overnight or for at least 8 hours.",
      "For potato filling: Heat oil, add mustard seeds, curry leaves, green chilies, onions, and sauté.",
      "Add turmeric, ginger, mashed potatoes, salt, and mix well. Cook for 5 minutes and garnish with coriander.",
      "Heat a dosa griddle, spread a ladleful of batter in a circular motion to make a thin dosa.",
      "Drizzle oil around edges, cook until golden and crispy.",
      "Place potato filling in the center, fold over, and serve hot with coconut chutney and sambar."
    ],
    nutritionFacts: {
      calories: 380,
      protein: 10,
      carbs: 72,
      fat: 6
    },
    tags: ["South Indian", "Breakfast", "Vegetarian", "Fermented", "Gluten-free"],
    featured: true
  },
  {
    id: "tandoori-chicken",
    name: "Tandoori Chicken",
    description: "A classic Indian dish where chicken is marinated in yogurt and spices, then grilled to perfection. Originally cooked in a clay tandoor oven, this dish is known for its distinct smoky flavor and vibrant color.",
    image: "/tandoori-chicken.jpg",
    prepTime: 20,
    cookTime: 40,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { name: "Chicken legs and thighs", quantity: "1 kg" },
      { name: "Yogurt", quantity: "1 cup" },
      { name: "Lemon juice", quantity: "2 tbsp" },
      { name: "Ginger paste", quantity: "1 tbsp" },
      { name: "Garlic paste", quantity: "1 tbsp" },
      { name: "Tandoori masala", quantity: "2 tbsp" },
      { name: "Red chili powder", quantity: "1 tsp" },
      { name: "Turmeric powder", quantity: "1/2 tsp" },
      { name: "Garam masala", quantity: "1 tsp" },
      { name: "Kashmiri red chili powder (for color)", quantity: "1 tsp" },
      { name: "Oil", quantity: "2 tbsp" },
      { name: "Chaat masala", quantity: "1 tsp" },
      { name: "Salt", quantity: "to taste" }
    ],
    instructions: [
      "Make deep cuts in chicken pieces for better marinade penetration.",
      "Mix yogurt with all spices, ginger-garlic paste, lemon juice, oil, and salt to make the marinade.",
      "Coat chicken pieces thoroughly with marinade and refrigerate for at least 4 hours or overnight.",
      "Preheat oven to 400°F (200°C) or prepare grill.",
      "Arrange marinated chicken on a baking tray or grill and cook for 35-40 minutes, turning occasionally.",
      "Baste with oil or butter halfway through cooking.",
      "Once cooked, sprinkle with chaat masala and serve hot with mint chutney and sliced onions."
    ],
    nutritionFacts: {
      calories: 380,
      protein: 42,
      carbs: 6,
      fat: 21
    },
    tags: ["Chicken", "Grilled", "Punjabi", "Spicy", "High Protein"],
    featured: false
  },
  {
    id: "dal-makhani",
    name: "Dal Makhani",
    description: "A rich and creamy lentil dish made with black lentils (urad) and kidney beans (rajma), slow-cooked with butter and cream. This hearty Punjabi delicacy is a staple in North Indian restaurants worldwide.",
    image: "/dal-makhani.jpg",
    prepTime: 15,
    cookTime: 45,
    servings: 6,
    difficulty: "Easy",
    ingredients: [
      { name: "Black lentils (urad dal whole)", quantity: "1 cup" },
      { name: "Kidney beans (rajma)", quantity: "1/4 cup" },
      { name: "Butter", quantity: "3 tbsp" },
      { name: "Ghee", quantity: "2 tbsp" },
      { name: "Onion, finely chopped", quantity: "1 large" },
      { name: "Ginger-garlic paste", quantity: "1 tbsp" },
      { name: "Tomato puree", quantity: "1 cup" },
      { name: "Red chili powder", quantity: "1 tsp" },
      { name: "Garam masala", quantity: "1/2 tsp" },
      { name: "Heavy cream", quantity: "1/4 cup" },
      { name: "Fresh cream for garnish", quantity: "2 tbsp" },
      { name: "Fresh coriander, chopped", quantity: "2 tbsp" },
      { name: "Salt", quantity: "to taste" }
    ],
    instructions: [
      "Soak black lentils and kidney beans overnight. Pressure cook until soft with salt.",
      "Heat ghee in a pan, add chopped onions and sauté until golden brown.",
      "Add ginger-garlic paste and cook for 2 minutes.",
      "Add tomato puree, red chili powder, and cook until oil separates.",
      "Add cooked lentils and beans, butter, and simmer on low heat for 25-30 minutes, stirring occasionally.",
      "Add cream and garam masala. Simmer for another 5 minutes.",
      "Garnish with fresh cream and coriander leaves. Serve hot with naan or rice."
    ],
    nutritionFacts: {
      calories: 310,
      protein: 14,
      carbs: 30,
      fat: 16
    },
    tags: ["Vegetarian", "Lentils", "Punjabi", "Creamy", "Protein-rich"],
    featured: false
  },
  {
    id: "samosa",
    name: "Punjabi Samosa",
    description: "Crispy pastry triangles stuffed with a spiced potato and pea filling, deep-fried to golden perfection. This iconic Indian snack is enjoyed across the country with chutney or as chaat.",
    image: "/samosa.jpg",
    prepTime: 40,
    cookTime: 30,
    servings: 8,
    difficulty: "Medium",
    ingredients: [
      { name: "All-purpose flour", quantity: "2 cups" },
      { name: "Ghee or oil", quantity: "4 tbsp" },
      { name: "Carom seeds (ajwain)", quantity: "1 tsp" },
      { name: "Potatoes, boiled and mashed", quantity: "4 medium" },
      { name: "Green peas", quantity: "1/2 cup" },
      { name: "Onion, finely chopped", quantity: "1 medium" },
      { name: "Green chilies, chopped", quantity: "2" },
      { name: "Ginger, grated", quantity: "1 tbsp" },
      { name: "Coriander powder", quantity: "1 tsp" },
      { name: "Cumin powder", quantity: "1 tsp" },
      { name: "Garam masala", quantity: "1/2 tsp" },
      { name: "Amchur (dry mango) powder", quantity: "1 tsp" },
      { name: "Fresh coriander, chopped", quantity: "2 tbsp" },
      { name: "Oil for deep frying", quantity: "as needed" },
      { name: "Salt", quantity: "to taste" }
    ],
    instructions: [
      "For the dough: Mix flour, carom seeds, salt, and ghee. Add water gradually to make a firm dough. Cover and rest for 30 minutes.",
      "For filling: Heat oil in a pan, add cumin seeds, onions, green chilies, and ginger. Sauté until onions turn translucent.",
      "Add green peas, spices, and salt. Cook for 2 minutes, then add mashed potatoes and mix well.",
      "Add amchur powder and coriander leaves. Mix and cool completely.",
      "Divide dough into balls. Roll each into an oval, cut in half to form semicircles.",
      "Form a cone with each semicircle, fill with potato mixture, and seal edges with water.",
      "Deep fry samosas on medium heat until golden brown and crisp.",
      "Serve hot with mint chutney and tamarind chutney."
    ],
    nutritionFacts: {
      calories: 220,
      protein: 4,
      carbs: 32,
      fat: 9
    },
    tags: ["Snack", "Deep-fried", "Potato", "Street Food", "Vegetarian"],
    featured: false
  },
  {
    id: "gulab-jamun",
    name: "Gulab Jamun",
    description: "Soft, melt-in-your-mouth milk solids dumplings soaked in rose-flavored sugar syrup. This traditional Indian dessert is a must-have during festivals and celebrations.",
    image: "/gulab-jamun.jpg",
    prepTime: 20,
    cookTime: 30,
    servings: 15,
    difficulty: "Medium",
    ingredients: [
      { name: "Milk powder", quantity: "1 cup" },
      { name: "All-purpose flour", quantity: "1/4 cup" },
      { name: "Ghee", quantity: "2 tbsp" },
      { name: "Baking soda", quantity: "1/4 tsp" },
      { name: "Milk", quantity: "3-4 tbsp" },
      { name: "Sugar", quantity: "2 cups" },
      { name: "Water", quantity: "1 cup" },
      { name: "Cardamom powder", quantity: "1/2 tsp" },
      { name: "Rose water", quantity: "1 tsp" },
      { name: "Saffron strands", quantity: "a pinch" },
      { name: "Pistachios, chopped (for garnish)", quantity: "2 tbsp" },
      { name: "Oil for deep frying", quantity: "as needed" }
    ],
    instructions: [
      "Mix milk powder, flour, and baking soda in a bowl.",
      "Add ghee and mix until the mixture resembles breadcrumbs.",
      "Gradually add milk and knead into a soft dough. Cover and rest for 10 minutes.",
      "For sugar syrup: Boil sugar and water until slightly sticky. Add cardamom, rose water, and saffron.",
      "Divide the dough into small balls, ensuring there are no cracks.",
      "Heat oil on low-medium heat. Fry the balls until they turn golden brown, stirring gently.",
      "Immediately transfer the hot jamuns into the warm sugar syrup.",
      "Soak for at least 2 hours before serving. Garnish with chopped pistachios."
    ],
    nutritionFacts: {
      calories: 150,
      protein: 2,
      carbs: 28,
      fat: 4
    },
    tags: ["Dessert", "Sweet", "Festive", "Milk-based", "Traditional"],
    featured: true
  },
  {
    id: "aloo-gobi",
    name: "Aloo Gobi",
    description: "A classic vegetarian dish made with potatoes (aloo) and cauliflower (gobi) cooked with aromatic spices. This simple yet flavorful dry curry is a staple in North Indian households.",
    image: "/aloo-gobi.jpg",
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { name: "Cauliflower florets", quantity: "1 medium head" },
      { name: "Potatoes, cubed", quantity: "2 large" },
      { name: "Onion, finely chopped", quantity: "1 large" },
      { name: "Tomatoes, chopped", quantity: "2 medium" },
      { name: "Ginger-garlic paste", quantity: "1 tbsp" },
      { name: "Green chilies, slit", quantity: "2" },
      { name: "Cumin seeds", quantity: "1 tsp" },
      { name: "Turmeric powder", quantity: "1/2 tsp" },
      { name: "Red chili powder", quantity: "1 tsp" },
      { name: "Coriander powder", quantity: "1 tsp" },
      { name: "Garam masala", quantity: "1/2 tsp" },
      { name: "Fresh coriander, chopped", quantity: "2 tbsp" },
      { name: "Oil", quantity: "3 tbsp" },
      { name: "Salt", quantity: "to taste" }
    ],
    instructions: [
      "Heat oil in a pan, add cumin seeds and let them splutter.",
      "Add chopped onions and green chilies. Sauté until onions turn golden brown.",
      "Add ginger-garlic paste and cook for 2 minutes until raw smell disappears.",
      "Add chopped tomatoes, turmeric powder, red chili powder, coriander powder, and salt. Cook until tomatoes are soft.",
      "Add potato cubes and cook for 5 minutes with the lid on.",
      "Add cauliflower florets, mix well, cover, and cook on medium heat for 15-20 minutes until vegetables are tender.",
      "Sprinkle garam masala and garnish with fresh coriander leaves.",
      "Serve hot with roti or rice."
    ],
    nutritionFacts: {
      calories: 180,
      protein: 5,
      carbs: 30,
      fat: 6
    },
    tags: ["Vegetarian", "Dry Curry", "Cauliflower", "Potato", "North Indian"],
    featured: false
  }
];
