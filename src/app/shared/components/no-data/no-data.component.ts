import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-no-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.css']
})
export class NoDataComponent {
  @Input() message: string = 'No data available';
}