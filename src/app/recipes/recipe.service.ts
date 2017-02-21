import {Injectable} from '@angular/core';
import {Ingredient} from './ingredient';
import {Recipe} from './recipe';

@Injectable()
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe(
      'Dummy',
      'Dummy description',
      'https://s-media-cache-ak0.pinimg.com/736x/82/69/00/826900d0a1e3233e16730b2fdc5e262c.jpg',
      [
        new Ingredient('Leg', 2),
        new Ingredient('Arm', 2),
        new Ingredient('Head', 1)
      ]
    ),
    new Recipe(
      'Curry',
      'A curry dish',
      'http://www.wyvernacademy.co.uk/wp-content/uploads/2015/11/Mild_Chicken_Curry_0000x0000_0.jpg',
      [
        new Ingredient('Masala', 10),
        new Ingredient('Gravy', 25)
      ]
    )
  ];

  constructor() {
  }

  getRecipes() {
    return this.recipes;
  }
}
