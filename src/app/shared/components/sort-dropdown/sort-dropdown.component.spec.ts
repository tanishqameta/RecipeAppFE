import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SortDropdownComponent } from './sort-dropdown.component';
import { FormsModule } from '@angular/forms';

describe('SortDropdownComponent', () => {
  let component: SortDropdownComponent;
  let fixture: ComponentFixture<SortDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SortDropdownComponent, FormsModule]  // Ensure FormsModule is imported
    });

    fixture = TestBed.createComponent(SortDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the sortChanged event on toggling sort order', () => {
    spyOn(component.sortChanged, 'emit');  // Spy on the event emitter

    // Simulate toggling the sort order
    component.toggleSortOrder();

    expect(component.sortChanged.emit).toHaveBeenCalledWith({
      sortBy: component.selectedKey,
      isAscending: component.isAscending
    });
  });

  it('should initialize with the default values', () => {
    expect(component.selectedKey).toBe('');
    expect(component.isAscending).toBe(true);
  });
});
