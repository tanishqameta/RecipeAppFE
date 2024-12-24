import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailsComponent } from './recipe-details.component';
import { RouterModule } from '@angular/router';
import { RecipeDetailsRoutingModule } from './recipe-details-routing.module';
import { TagComponent } from "../../../shared/components/tag/tag.component";
import { UserRatingComponent } from "../../../shared/components/user-rating/user-rating.component";
import { NoDataComponent } from "../../../shared/components/no-data/no-data.component";

@NgModule({
  declarations: [
    RecipeDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RecipeDetailsRoutingModule,
    TagComponent,
    UserRatingComponent,
    NoDataComponent
]
})
export class RecipeDetailsModule { }
