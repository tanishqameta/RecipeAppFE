import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { Recipe, RecipeSummary } from '../../models/recipe.model';
import { environment } from 'src/environments/environment';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  const baseUrl = environment.apiEndpoint;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get recipe by ID', () => {
    const mockRecipe: Recipe = {
      id: 1,
      name: 'Recipe 1',
      ingredients: ['ingredient1', 'ingredient2'],
      instructions: ['instruction1', 'instruction2'],
      prepTimeMinutes: 30,
      cookTimeMinutes: 45,
      servings: 4,
      difficulty: 'Medium',
      cuisine: 'Italian',
      caloriesPerServing: 500,
      tags: ['tag1', 'tag2'],
      userId: 1,
      image: 'recipe1.jpg',
      rating: 4.5,
      reviewCount: 100,
      mealType: ['Lunch'],
    };

    service.getRecipeById(1).subscribe((recipe) => {
      expect(recipe).toEqual(mockRecipe);
    });

    const req = httpMock.expectOne(`${baseUrl}/recipes/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockRecipe);
  });

  it('should search recipes by query', () => {
    const mockRecipes: RecipeSummary[] = [
      {
        id: 1,
        name: 'Recipe 1',
        prepTimeMinutes: 30,
        cookTimeMinutes: 45,
        servings: 4,
        difficulty: 'Medium',
        cuisine: 'Italian',
        caloriesPerServing: 500,
        tags: ['tag1', 'tag2'],
        image: 'recipe1.jpg',
        rating: 4.5,
        reviewCount: 100,
        mealType: ['Lunch'],
      },
      {
        id: 2,
        name: 'Recipe 2',
        prepTimeMinutes: 20,
        cookTimeMinutes: 25,
        servings: 2,
        difficulty: 'Easy',
        cuisine: 'Mexican',
        caloriesPerServing: 350,
        tags: ['tag3', 'tag4'],
        image: 'recipe2.jpg',
        rating: 3.8,
        reviewCount: 50,
        mealType: ['Dinner'],
      },
    ];
  
    service.searchRecipes('test query').subscribe((recipes) => {
      expect(recipes.length).toBe(2);
      expect(recipes).toEqual(mockRecipes);
    });
  
    const req = httpMock.expectOne(`${baseUrl}/recipes/search?query=test%20query`);
    expect(req.request.method).toBe('GET');
    req.flush(mockRecipes);
  });
});
