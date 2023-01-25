import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipesService } from "../recipes.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipesService) {

  }

  ngOnInit() : void {
    this.recipes = this.recipeService.getRecipes();
  }
}
