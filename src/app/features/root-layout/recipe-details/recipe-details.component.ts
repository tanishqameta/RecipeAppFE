import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/core/models/recipe.model';
import { ApiService } from 'src/app/core/services/api/api.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
  recipe: Recipe | null = null;
  isLoading: boolean = true;
  error: string | null = null;
  id: number = -1;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.id = +(param.get('id') ?? '-1');
      this.getRecipeDetails(this.id);
    });
  }

  getRecipeDetails(id: number): void {
    this.apiService.getRecipeById(id).subscribe({
      next: (data) => {
        this.recipe = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = err;
        this.isLoading = false;
      }
    });
  }

}
