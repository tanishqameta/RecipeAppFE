import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-rating.component.html',
  styleUrls: ['./user-rating.component.css']
})
export class UserRatingComponent {
  @Input() rating: number = 0;
  @Input() reviewCount: number = 0;
}
