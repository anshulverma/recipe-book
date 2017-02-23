import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'app/recipes/recipe';
import { RecipeService } from 'app/recipes/recipe.service';
import { Subscription } from 'rxjs/Subscription';

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
              private formBuilder: FormBuilder) {
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
}
