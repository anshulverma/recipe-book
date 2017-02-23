import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Ingredient } from '../recipes/ingredient';
import { ShoppingListService } from './shopping-list.service';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {
  @Input() item: Ingredient;
  @Output() cleared = new EventEmitter();

  isAdd = true;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnChanges(changes): void {
    this.isAdd = changes.item.currentValue == null;
    if (this.isAdd) {
      this.item = new Ingredient(null, null);
    }
  }

  onSubmit(ingredient: Ingredient) {
    const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
    if (!this.isAdd) {
      this.shoppingListService.editItem(this.item, newIngredient);
      this.onClear();
    } else {
      this.item = newIngredient;
      this.shoppingListService.addItem(this.item);
    }
  }

  onDelete() {
    this.shoppingListService.deleteItem(this.item);
    this.onClear();
  }

  onClear() {
    this.isAdd = true;
    this.cleared.emit();
  }

}
