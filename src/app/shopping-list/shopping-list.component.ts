import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: [`
  `]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private ShoppingLService: ShoppingListService) {

  }

  ngOnInit(): void {
    this.ingredients = this.ShoppingLService.getIngredients();
    this.ShoppingLService.ingredientsChanged.subscribe((newIngredients: Ingredient[]) => {
      this.ingredients = newIngredients;
    })
  }

}
