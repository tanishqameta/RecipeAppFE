import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RootLayoutComponent } from './root-layout.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';

describe('RootLayoutComponent', () => {
  let fixture: ComponentFixture<RootLayoutComponent>;
  let component: RootLayoutComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RootLayoutComponent],
      imports: [HeaderComponent, RouterTestingModule, CommonModule]
    });

    fixture = TestBed.createComponent(RootLayoutComponent);
    component = fixture.componentInstance;
  });

  it('should create the root layout component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the header component', () => {
    fixture.detectChanges(); // Trigger change detection
    const headerElement = fixture.nativeElement.querySelector('app-header');
    expect(headerElement).toBeTruthy(); // Check if the app-header is rendered
  });
});
