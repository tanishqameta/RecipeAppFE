import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBarComponent } from './search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let searchButton: DebugElement;
  let inputField: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SearchBarComponent, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    searchButton = fixture.debugElement.query(By.css('.search-button'));
    inputField = fixture.debugElement.query(By.css('.search-input'));
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search query when form is valid and submitted', () => {
    spyOn(component.search, 'emit');
    
    component.queryControl.setValue('Mango');
    fixture.detectChanges();

    searchButton.nativeElement.click();
    expect(component.search.emit).toHaveBeenCalledWith('Mango');
  });

  it('should display error message if input is invalid and touched', () => {
    inputField.nativeElement.value = 'M';
    inputField.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('.error-message'))).toBeTruthy();
  });

  it('should enable search button when the form is valid', () => {
    component.queryControl.setValue('Mango');
    fixture.detectChanges();

    expect(searchButton.nativeElement.disabled).toBeFalsy();
  });
});
