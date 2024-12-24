import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TagComponent } from './tag.component';

describe('TagComponent', () => {
  let component: TagComponent;
  let fixture: ComponentFixture<TagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TagComponent]
    });

    fixture = TestBed.createComponent(TagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit onClick event when tag is clicked', () => {
    spyOn(component.onClick, 'emit');  // Spy on the event emitter

    // Simulate clicking the tag
    component.onClick.emit();
    expect(component.onClick.emit).toHaveBeenCalled();
  });

  it('should emit onRemove event when remove button is clicked', () => {
    spyOn(component.onRemove, 'emit');  // Spy on the event emitter

    component.isRemovable = true;
    component.label = 'Test Tag';
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');
    button.click();

    expect(component.onRemove.emit).toHaveBeenCalledWith('Test Tag');
  });

  it('should render remove button if isRemovable is true', () => {
    component.isRemovable = true;
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');
    expect(button).not.toBeNull();
  });

  it('should apply "highlighted" class when highlighted is true', () => {
    component.highlighted = true;
    fixture.detectChanges();

    const tagDiv = fixture.nativeElement.querySelector('.tag');
    expect(tagDiv.classList).toContain('highlighted');
  });
});
