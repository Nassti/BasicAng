import { Component, EventEmitter, OnInit, Output, ViewChildren } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredietsAdded = new EventEmitter<Ingredient>();

  ingredientAdd!: Ingredient;

  constructor() { }

  ngOnInit(): void {
  }

  ingridientsAdd(name: HTMLInputElement, amount: HTMLInputElement) {
    this.ingredientAdd = new Ingredient(name.value, Number(amount.value));
    this.ingredietsAdded.emit(this.ingredientAdd);
  }

}
