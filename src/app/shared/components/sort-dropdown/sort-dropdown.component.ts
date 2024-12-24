import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type SortDropdownOption = { label: string; key: any };

@Component({
  selector: 'app-sort-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sort-dropdown.component.html',
  styleUrls: ['./sort-dropdown.component.css']
})
export class SortDropdownComponent {
  @Input() sortDropdownOptions: SortDropdownOption[] = [];
  @Output() sortChanged = new EventEmitter<{ sortBy: string; isAscending: boolean }>();
  
  public selectedKey: string = '';
  public isAscending = true;

  onSortOptionChange(): void {
    this.emitSortChanged();
  }

  toggleSortOrder(): void {
    this.isAscending = !this.isAscending;
    this.emitSortChanged();
  }

  emitSortChanged(): void {
    this.sortChanged.emit({
      sortBy: this.selectedKey,
      isAscending: this.isAscending
    });
  }
}