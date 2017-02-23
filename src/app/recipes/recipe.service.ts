import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe(
      'Salmon Fillet',
      'Brown Fish Fillet on White Ceramic Plate',
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQeUt6OuuuzP6rX82a66X8RrWoVbcfLOTSCmygJ9RgiwT-G0d20iw',
      [
        new Ingredient('Salmon Fillet', 2),
        new Ingredient('Oil', 1),
        new Ingredient('Lemon', 2),
        new Ingredient('Garlic', 1),
        new Ingredient('Spices', 10)
      ]
    ),
    new Recipe(
      'Greek Zoodle Salad',
      'A great alternative to high-carb pasta salads!',
      'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTr60vXjNHaA5jbHtnregyyDTheYx7Gb9ox9YRtXocQqsvKE3sS',
      [
        new Ingredient('Tomatoes', 5),
        new Ingredient('Red Onion', 2),
        new Ingredient('Oregano', 4),
        new Ingredient('Cucumber', 2)
      ]
    )
  ];

  constructor() {
  }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[ id ];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
}
