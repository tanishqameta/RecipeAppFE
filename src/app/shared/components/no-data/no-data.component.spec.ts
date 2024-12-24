import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoDataComponent } from './no-data.component';
import { By } from '@angular/platform-browser';

describe('NoDataComponent', () => {
  let component: NoDataComponent;
  let fixture: ComponentFixture<NoDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoDataComponent]
    });
    fixture = TestBed.createComponent(NoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
