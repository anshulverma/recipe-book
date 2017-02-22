import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RECIPE_ROUTES } from './recipes/recipes.routes';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTES },
  { path: 'shopping-list', component: ShoppingListComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
