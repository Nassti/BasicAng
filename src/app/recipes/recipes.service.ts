import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";


export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe1', 'This is simply description of test recipe1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRjRLbbXSpbN6OhFTKCGn27uK1zp6cQ8te1g&usqp=CAU'),
    new Recipe('A Test Recipe2', 'This is simply description of test recipe2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRjRLbbXSpbN6OhFTKCGn27uK1zp6cQ8te1g&usqp=CAU'),
  ];

  /**
   *
   * @returns copy recipes
   */
  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
