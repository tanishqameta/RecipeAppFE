import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from "../tag/tag.component";

@Component({
  selector: 'app-filter-input',
  standalone: true,
  imports: [CommonModule, TagComponent],
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.css']
})
export class FilterInputComponent {
  @Output() filtersChanged = new EventEmitter<string[]>();

  public filteredValues: string[] = [];

  public onAddFilterValue(value: string): void {
    if (value && !this.filteredValues.includes(value)) {
      this.filteredValues.push(value);
      this.emitFiltersChanged();
    }
  }

  public onRemoveFilterValue(value: string): void {
    this.filteredValues = this.filteredValues.filter(v => v !== value);
    this.emitFiltersChanged();
  }

  public emitFiltersChanged(): void {
    this.filtersChanged.emit(this.filteredValues);
  }
}
