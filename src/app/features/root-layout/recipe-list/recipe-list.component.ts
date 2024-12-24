import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { RecipeSummary } from 'src/app/core/models/recipe.model';
import { ApiService } from 'src/app/core/services/api/api.service';

type SortOptions = {
  sortBy: keyof RecipeSummary | '';
  isAscending: boolean;
}

type SortDropdownOption = { label: string; key: keyof RecipeSummary | '' };

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipes: RecipeSummary[] = [];
  public displaySearchDescription = true;
  public skeletonArray = new Array(8);
  public isLoading = false;
  public noData = false;
  sortOptions: SortOptions | null = null;
  filterOptions: string[] = [];
  sortDropdownOptions: SortDropdownOption[] = [
    { label: 'Select Sort By', key: '' },
    { label: 'Cook Time', key: 'cookTimeMinutes' }
  ];

  constructor(
    private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      const query = params['query'];
      if (query) {
        this.onQueryUpdated(query);
      } else {
        this.recipes = [];
        this.displaySearchDescription = true;
      }
    });
  }

  onSearch(query: string): void {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { query: query },
      queryParamsHandling: 'merge',
    });
  }

  onQueryUpdated(query: string): void {
    this.displaySearchDescription = false;
    this.isLoading = true;
    this.noData = false;
    this.apiService.searchRecipes(query)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe((recipes) => {
        if(recipes)
          this.recipes = recipes;
        this.noData = this.recipes.length === 0;
      });
  }

  onRecipeClicked(recipe: RecipeSummary): void {
    this.router.navigate(['./recipes', recipe.id]);
  }

  onSortChanged(sortOptions: any): void {
    this.sortOptions = sortOptions;
  }

  onFiltersChanged(filters: string[]): void {
    this.filterOptions = [...filters];
  }

  public filterByTags = (element: RecipeSummary, values: string[]): boolean => {
    if (!values || values.length === 0) return true;
    let hasAnyTag = false;
    element.tags.forEach((tag) => {
      for(let value of values) {
        if(tag.toLowerCase().trim() === value.toLowerCase().trim()) {
          hasAnyTag = true;
          break;
        }
      }
    });

    return hasAnyTag;
  }
}
