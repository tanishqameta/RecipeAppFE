import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list.component';
import { SearchBarComponent } from "../../../shared/components/search-bar/search-bar.component";
import { RecipeListRoutingModule } from './recipe-list-routing.module';
import { RecipeSummaryComponent } from './recipe-summary/recipe-summary.component';
import { UserRatingComponent } from "../../../shared/components/user-rating/user-rating.component";
import { TagComponent } from "../../../shared/components/tag/tag.component";
import { RecipeSkeletonLoaderComponent } from './recipe-skeleton-loader/recipe-skeleton-loader.component';
import { SortDropdownComponent } from "../../../shared/components/sort-dropdown/sort-dropdown.component";
import { OrderByPipe } from 'src/app/shared/pipes/order-by/order-by.pipe';
import { FilterInputComponent } from "../../../shared/components/filter-input/filter-input.component";
import { FilterByPipe } from "../../../shared/pipes/filter-by/filter-by.pipe";
import { NoDataComponent } from "../../../shared/components/no-data/no-data.component";

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeSummaryComponent,
    RecipeSkeletonLoaderComponent
  ],
  imports: [
    CommonModule,
    SearchBarComponent,
    RecipeListRoutingModule,
    UserRatingComponent,
    TagComponent,
    SortDropdownComponent,
    OrderByPipe,
    FilterInputComponent,
    FilterByPipe,
    NoDataComponent
]
})
export class RecipeListModule { }
