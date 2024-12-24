import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    loadChildren: () => import('./recipe-list/recipe-list.module').then(m => m.RecipeListModule)
  },
  {
    path: 'recipes/:id',
    loadChildren: () => import('./recipe-details/recipe-details.module').then(m => m.RecipeDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootLayoutRoutingModule {}
