import { Component, Input, Output, EventEmitter } from "@angular/core";
import { RecipesService } from "../../recipes.service";


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {
  @Input('recipeChild') recipe: any;

  constructor(private recipesService: RecipesService) {}

  onSelected() {
    this.recipesService.recipeSelected.emit(this.recipe);
  }
}
