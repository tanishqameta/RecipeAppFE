import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe, RecipeSummary } from '../../models/recipe.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiEndpoint;
  constructor(
    private httpClient: HttpClient
  ) { }
  
  getRecipeById(id: number): Observable<Recipe> {
    const url = `${this.baseUrl}/recipes/${id}`;
    return this.httpClient.get<Recipe>(url);
  }

  searchRecipes(query: string): Observable<RecipeSummary[]> {
    const url = `${this.baseUrl}/recipes/search`;
    return this.httpClient.get<RecipeSummary[]>(url, {params: {query}});
  }
}
