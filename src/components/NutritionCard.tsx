
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface NutritionProps {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

const NutritionCard: React.FC<NutritionProps> = ({
  calories,
  protein,
  carbs,
  fat,
}) => {
  const nutrients = [
    { name: 'Calories', value: calories, unit: 'kcal' },
    { name: 'Protein', value: protein, unit: 'g' },
    { name: 'Carbs', value: carbs, unit: 'g' },
    { name: 'Fat', value: fat, unit: 'g' },
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Nutrition Facts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {nutrients.map((nutrient) => (
            <div key={nutrient.name} className="flex flex-col items-center justify-center p-2 bg-muted rounded-md">
              <span className="text-lg font-semibold">{nutrient.value}{nutrient.unit}</span>
              <span className="text-sm text-muted-foreground">{nutrient.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NutritionCard;
