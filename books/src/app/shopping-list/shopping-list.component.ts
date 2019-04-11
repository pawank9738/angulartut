import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../Shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  Ingredients: Ingredients[] = [
    new Ingredients("tomato", 2),
    new Ingredients("lemon", 1)
     ];
  constructor() { }

  ngOnInit() {
  }

}
