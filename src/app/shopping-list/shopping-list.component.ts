import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../recipes/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [new Ingredient('asd', 1)];

  constructor() {
  }

  ngOnInit() {
  }

}
