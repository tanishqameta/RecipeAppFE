import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserRatingComponent } from './user-rating.component';

describe('UserRatingComponent', () => {
  let component: UserRatingComponent;
  let fixture: ComponentFixture<UserRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserRatingComponent]
    });

    fixture = TestBed.createComponent(UserRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the rating and review count when rating > 0 or reviewCount > 0', () => {
    component.rating = 4;
    component.reviewCount = 10;
    fixture.detectChanges();

    const ratingDiv = fixture.nativeElement.querySelector('.user-rating');
    expect(ratingDiv).toBeTruthy();
  });

  it('should not display if rating and reviewCount are 0', () => {
    component.rating = 0;
    component.reviewCount = 0;
    fixture.detectChanges();

    const ratingDiv = fixture.nativeElement.querySelector('.user-rating');
    expect(ratingDiv).toBeNull();
  });
});
