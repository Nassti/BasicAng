import { Component, Input } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipesService } from "../recipes.service";


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})

export class RecipeDetailComponent {
  @Input() recipeItem!: Recipe;

  constructor(private recipeService: RecipesService) {}

  addIngredientsToShop() {
    this.recipeService.addIngredientsToShoppingList(this.recipeItem.ingredients)
  }
}
