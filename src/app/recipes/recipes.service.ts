import { EventEmitter, Injectable} from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(
      0,
      'A Test Recipe1',
      'This is simply description of test recipe1',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRjRLbbXSpbN6OhFTKCGn27uK1zp6cQ8te1g&usqp=CAU',
      [
        new Ingredient('tomato', 5),
        new Ingredient('milk', 200)
      ]),
    new Recipe(
      1,
      'A Test Recipe2',
      'This is simply description of test recipe2',
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRjRLbbXSpbN6OhFTKCGn27uK1zp6cQ8te1g&usqp=CAU',
       [
        new Ingredient('meat', 500),
        new Ingredient('apple', 4)
       ]),
  ];

  constructor(private slService: ShoppingListService) {}

  /**
   *
   * @returns copy recipes
   */
  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(id: number): Recipe {
    return this.recipes.slice()[id];
  }

}
