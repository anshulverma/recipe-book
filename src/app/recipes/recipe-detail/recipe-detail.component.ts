import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe';
import {Input} from "@angular/core";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
