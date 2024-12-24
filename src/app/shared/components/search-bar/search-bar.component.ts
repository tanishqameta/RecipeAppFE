import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();
  searchForm: FormGroup;
  queryControl = new FormControl('', [Validators.minLength(3)]);

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      query: this.queryControl
    });
  }

  onSearch() {
    if (this.searchForm.valid) {
      const query = this.searchForm.value.query.trim();
      this.search.emit(query);
    }
  }

}
