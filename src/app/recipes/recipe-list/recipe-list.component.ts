import { Component, EventEmitter, Output, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipesService } from "../recipes.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipesService) {}

  ngOnInit() : void {
    this.recipes = this.recipeService.getRecipes();
  }

  showRecipe(el: Recipe) {
    this.recipeWasSelected.emit(el);
  }
}
