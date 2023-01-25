import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10),
  ];

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  /**
   *
   * @returns copy[] ingredients
   */
  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  /**
   * add new ingredient in arr-ingredients
   * @param ingredient
   */
  addIndredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingrideants: Ingredient[]) {
    this.ingredients.push(...ingrideants);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
