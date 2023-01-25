import { Component } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: [`

  `]
})
export class ShoppingListComponent  {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10),
  ];

  ingredientsAdd(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
