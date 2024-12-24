import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterInputComponent } from './filter-input.component';
import { TagComponent } from '../tag/tag.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('FilterInputComponent', () => {
  let component: FilterInputComponent;
  let fixture: ComponentFixture<FilterInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FilterInputComponent, TagComponent, FormsModule]
    });
    fixture = TestBed.createComponent(FilterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should not add duplicate filter values', () => {
    component.onAddFilterValue('Tag1');
    component.onAddFilterValue('Tag1');
    fixture.detectChanges();

    expect(component.filteredValues).toEqual(['Tag1']);
  });

  it('should remove filter value when remove is triggered', () => {
    component.onAddFilterValue('Tag1');
    component.onRemoveFilterValue('Tag1');
    fixture.detectChanges();

    expect(component.filteredValues).toEqual([]);
  });

  it('should emit the filtersChanged event when a value is added or removed', () => {
    spyOn(component.filtersChanged, 'emit');
    
    component.onAddFilterValue('NewTag');
    expect(component.filtersChanged.emit).toHaveBeenCalledWith(['NewTag']);

    component.onRemoveFilterValue('NewTag');
    expect(component.filtersChanged.emit).toHaveBeenCalledWith([]);
  });

  it('should display selected filter values as tags', () => {
    component.onAddFilterValue('Tag1');
    component.onAddFilterValue('Tag2');
    fixture.detectChanges();
    
    const tagElements = fixture.debugElement.queryAll(By.css('app-tag'));
    expect(tagElements.length).toBe(2);
  });
});
