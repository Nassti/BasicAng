import { Component } from "@angular/core";
import { Recipe } from "./recipe.model";
import { RecipesService } from "./recipes.service";


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  providers: [RecipesService]
})

export class RecipesComponent {
  recipeItemSelected!: Recipe;

  constructor(private recipesService: RecipesService) {
    recipesService.recipeSelected.subscribe((el: Recipe) => {
      this.recipeItemSelected = el;
    })
  }


}
