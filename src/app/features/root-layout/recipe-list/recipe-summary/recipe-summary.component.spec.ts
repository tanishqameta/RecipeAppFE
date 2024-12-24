import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeSummaryComponent } from './recipe-summary.component';
import { RecipeSummary } from 'src/app/core/models/recipe.model';
import { CommonModule } from '@angular/common';
import { UserRatingComponent } from 'src/app/shared/components/user-rating/user-rating.component';
import { TagComponent } from 'src/app/shared/components/tag/tag.component';

describe('RecipeSummaryComponent', () => {
  let fixture: ComponentFixture<RecipeSummaryComponent>;
  let component: RecipeSummaryComponent;

  const mockRecipe: RecipeSummary = {
    id: 1,
    name: 'Test Recipe',
    prepTimeMinutes: 10,
    cookTimeMinutes: 30,
    servings: 4,
    difficulty: 'Easy',
    cuisine: 'Italian',
    caloriesPerServing: 200,
    tags: ['Vegan', 'Healthy'],
    image: 'image.jpg',
    rating: 4.5,
    reviewCount: 50,
    mealType: 'Dinner'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeSummaryComponent],
      imports: [CommonModule, UserRatingComponent, TagComponent] // Import CommonModule for directives like ngIf, ngClass
    });

    fixture = TestBed.createComponent(RecipeSummaryComponent);
    component = fixture.componentInstance;
    component.recipe = mockRecipe; // Set mock recipe as input
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display recipe name', () => {
    fixture.detectChanges();
    const nameElement = fixture.nativeElement.querySelector('.recipe-name');
    expect(nameElement.textContent).toContain(mockRecipe.name);
  });

  it('should display recipe tags', () => {
    fixture.detectChanges();
    const tagsElement = fixture.nativeElement.querySelector('.recipe-tags');
    expect(tagsElement.textContent).toContain(mockRecipe.tags.join(', '));
  });

  it('should display loader while the image is not loaded', () => {
    fixture.detectChanges();
    const loaderElement = fixture.nativeElement.querySelector('.image-loader');
    expect(loaderElement).toBeTruthy(); // Ensure loader is visible before image is loaded
  });
});
