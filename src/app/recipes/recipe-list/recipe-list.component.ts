import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe';
import {EventEmitter} from "@angular/core";
import {Output} from "@angular/core";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy', 'Dummy description',
    'https://s-media-cache-ak0.pinimg.com/736x/82/69/00/826900d0a1e3233e16730b2fdc5e262c.jpg');

  constructor() {
  }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
