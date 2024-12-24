import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeDetailsComponent } from './recipe-details.component';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { ApiService } from 'src/app/core/services/api/api.service';
import { Recipe } from 'src/app/core/models/recipe.model';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('RecipeDetailsComponent', () => {
  let fixture: ComponentFixture<RecipeDetailsComponent>;
  let component: RecipeDetailsComponent;
  let apiService: jasmine.SpyObj<ApiService>;
  let activatedRoute: ActivatedRoute;

  const mockRecipe: Recipe = {
    id: 1,
    name: 'Test Recipe',
    image: 'recipe.jpg',
    tags: ['Vegan', 'Quick'],
    rating: 4.5,
    reviewCount: 10,
    difficulty: 'Easy',
    cuisine: 'Italian',
    servings: 4,
    caloriesPerServing: 250,
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    ingredients: ['Ingredient 1', 'Ingredient 2'],
    instructions: ['Step 1', 'Step 2'],
    userId: 1,
    mealType: ['Breakfast']
  };

  beforeEach(() => {
    // Create a spy for ApiService
    const apiServiceSpy = jasmine.createSpyObj('ApiService', ['getRecipeById']);

    TestBed.configureTestingModule({
      declarations: [RecipeDetailsComponent],
      providers: [
        { 
          provide: ApiService, 
          useValue: apiServiceSpy 
        },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: jasmine.createSpy().and.returnValue('1') })
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA] // To avoid errors for any unrecognized components in the template
    });

    fixture = TestBed.createComponent(RecipeDetailsComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>; // Cast to Spy object
    activatedRoute = TestBed.inject(ActivatedRoute);
  });

  it('should load recipe details successfully when id is provided', () => {
    // Mock the API service to return the mockRecipe
    apiService.getRecipeById.and.returnValue(of(mockRecipe));
    fixture.detectChanges();

    // Check if the component has received the recipe correctly
    expect(component.recipe).toEqual(mockRecipe);
    expect(component.isLoading).toBe(false);
    expect(component.error).toBeNull();
  });

  it('should show an error message when the API request fails', () => {
    // Mock the API service to return an error
    apiService.getRecipeById.and.returnValue(throwError('Error loading recipe'));
    fixture.detectChanges();

    // Check the component error handling
    expect(component.recipe).toBeNull();
    expect(component.isLoading).toBe(false);
    expect(component.error).toBe('Error loading recipe');
  });

  it('should display the loading state while fetching the recipe', () => {
    // Simulate the loading state with an observable that does not complete
    apiService.getRecipeById.and.returnValue(new Observable());
    fixture.detectChanges();

    // Check if the loading state is active
    expect(component.isLoading).toBe(true);
    expect(component.recipe).toBeNull();
    expect(component.error).toBeNull();
  });

  it('should display recipe details in the template', () => {
    // Mock the API service to return the mockRecipe
    apiService.getRecipeById.and.returnValue(of(mockRecipe));
    fixture.detectChanges();

    // Check if the recipe name is rendered
    const recipeNameElement = fixture.nativeElement.querySelector('.recipe-name');
    expect(recipeNameElement.textContent).toContain(mockRecipe.name);

    // Check if the recipe difficulty is rendered
    const difficultyElement = fixture.nativeElement.querySelector('.section p:nth-child(1)');
    expect(difficultyElement.textContent).toContain(mockRecipe.difficulty);
  });

  it('should show a "no data" message if recipe not found', () => {
    // Simulate an error where the recipe is not found
    apiService.getRecipeById.and.returnValue(throwError('Recipe not found'));
    fixture.detectChanges();

    // Check if the no data message is displayed
    const noDataMessage = fixture.nativeElement.querySelector('app-no-data');
    expect(noDataMessage).toBeTruthy();
  });
});
