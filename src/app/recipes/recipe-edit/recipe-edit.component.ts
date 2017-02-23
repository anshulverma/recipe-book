import { Component } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Recipe } from 'app/recipes/recipe';
import { RecipeService } from 'app/recipes/recipe.service';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from 'app/recipes/ingredient';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private recipe: Recipe;
  private isNew = true;
  private recipeIndex: number;
  private recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.recipeIndex = +params[ 'id' ];
          this.recipe = this.recipeService.getRecipe(this.recipeIndex);
        } else {
          this.isNew = true;
          this.recipe = null;
        }
        this.initForm();
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    const newRecipe = this.recipeForm.value;
    if (this.isNew) {
      this.recipeService.addRecipe(newRecipe);
    } else {
      this.recipeService.editRecipe(this.recipe, newRecipe);
    }
    this.navigateBack();
  }

  onCancel() {
    this.navigateBack();
  }

  private navigateBack() {
    this.router.navigate([ '../' ]);
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    const recipeIngredients: FormArray = new FormArray([]);

    if (!this.isNew) {
      // edit mode
      recipeName = this.recipe.name;
      recipeImagePath = this.recipe.imagePath;
      recipeDescription = this.recipe.description;
      for (let i = 0; i < this.recipe.ingredients.length; i++) {
        recipeIngredients.push(
          new FormGroup({
            name: new FormControl(this.recipe.ingredients[ i ].name, [ Validators.required ]),
            amount: new FormControl(this.recipe.ingredients[ i ].amount, [ Validators.required, Validators.pattern('\\d+') ])
          })
        );
      }
    }
    this.recipeForm = this.formBuilder.group({
      name: [ recipeName, Validators.required ],
      imagePath: [ recipeImagePath, Validators.required ],
      description: [ recipeDescription, Validators.required ],
      ingredients: recipeIngredients
    });
  }

  onRemoveItem(index: number) {
    (<FormArray> this.recipeForm.controls[ 'ingredients' ]).removeAt(index);
    this.recipe.ingredients.splice(index, 1);
  }

  onAddItem(name: string, amount: number) {
    (<FormArray> this.recipeForm.controls[ 'ingredients' ]).push(
      new FormGroup({
        name: new FormControl(name, [ Validators.required ]),
        amount: new FormControl(amount, [ Validators.required, Validators.pattern('\\d+') ])
      })
    );
    this.recipe.ingredients.push(new Ingredient(name, amount));
  }
}
