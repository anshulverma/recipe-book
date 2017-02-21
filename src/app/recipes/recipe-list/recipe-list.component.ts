import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe';
import {EventEmitter} from "@angular/core";
import {Output} from "@angular/core";
import {Ingredient} from "../ingredient";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
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
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
