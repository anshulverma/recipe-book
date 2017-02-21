import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe';
import {Input} from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  recipeId;

  constructor() { }

  ngOnInit() {
  }

}
