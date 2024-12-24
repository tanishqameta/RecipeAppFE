import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {
  @Input() label: string = "";
  @Input() highlighted: boolean = false;
  @Output() onClick = new EventEmitter<string>();
  @Input() isRemovable: boolean = false;
  @Output() onRemove = new EventEmitter<string>();
}
