import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSkeletonLoaderComponent } from './recipe-skeleton-loader.component';

describe('RecipeSkeletonLoaderComponent', () => {
  let component: RecipeSkeletonLoaderComponent;
  let fixture: ComponentFixture<RecipeSkeletonLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeSkeletonLoaderComponent]
    });
    fixture = TestBed.createComponent(RecipeSkeletonLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
