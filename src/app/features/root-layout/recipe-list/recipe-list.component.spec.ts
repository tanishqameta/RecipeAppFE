import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeListComponent } from './recipe-list.component';
import { ApiService } from 'src/app/core/services/api/api.service';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { RecipeSummary } from 'src/app/core/models/recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { OrderByPipe } from 'src/app/shared/pipes/order-by/order-by.pipe';
import { FilterByPipe } from 'src/app/shared/pipes/filter-by/filter-by.pipe';

describe('RecipeListComponent', () => {
  let fixture: ComponentFixture<RecipeListComponent>;
  let component: RecipeListComponent;
  let apiService: jasmine.SpyObj<ApiService>;
  let router: jasmine.SpyObj<Router>;
  let activatedRoute: ActivatedRoute;

  const mockRecipes: RecipeSummary[] = [
    { 
      id: 1, 
      name: 'Recipe 1', 
      cookTimeMinutes: 30, 
      prepTimeMinutes: 10, 
      servings: 4, 
      difficulty: 'Easy', 
      cuisine: 'Italian', 
      caloriesPerServing: 200, 
      tags: ['Vegan'], 
      image: 'image1.jpg', 
      rating: 4, 
      reviewCount: 10, 
      mealType: 'Dinner' 
    }
  ];

  beforeEach(() => {
    const apiSpy = jasmine.createSpyObj('ApiService', ['searchRecipes']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      declarations: [RecipeListComponent],
      imports: [RouterTestingModule, OrderByPipe, FilterByPipe],
      providers: [
        { provide: ApiService, useValue: apiSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: { queryParams: of({ query: 'test' }) } }
      ],
      schemas: [NO_ERRORS_SCHEMA]  // To avoid errors with child components
    });

    fixture = TestBed.createComponent(RecipeListComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    activatedRoute = TestBed.inject(ActivatedRoute);

    apiService.searchRecipes.and.returnValue(of(mockRecipes)); // Mock API response
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call searchRecipes on query update', () => {
    component.onQueryUpdated('test');
    expect(apiService.searchRecipes).toHaveBeenCalledWith('test');
  });

  it('should show "No recipes match" message when no data is found', () => {
    apiService.searchRecipes.and.returnValue(of([])); // Mock empty response
    component.onQueryUpdated('no-match');
    fixture.detectChanges();
    const noDataElement = fixture.nativeElement.querySelector('app-no-data');
    expect(noDataElement).toBeTruthy();  // Ensure no data message is shown
  });

  it('should correctly filter recipes by tags', () => {
    const filterTags = ['Vegan'];
    const filteredRecipes = component.filterByTags(mockRecipes[0], filterTags);
    expect(filteredRecipes).toBeTrue();  // Ensure the recipe matches the filter
  });
});
