import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeSummary } from 'src/app/core/models/recipe.model';

@Component({
  selector: 'app-recipe-summary',
  templateUrl: './recipe-summary.component.html',
  styleUrls: ['./recipe-summary.component.css']
})
export class RecipeSummaryComponent {
  @Input() recipe: RecipeSummary | null = null;
  @Output() recipeClicked: EventEmitter<RecipeSummary> = new EventEmitter<RecipeSummary>();
}
