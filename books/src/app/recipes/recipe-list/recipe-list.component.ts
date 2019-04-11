import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Recipe 1", "Description for recipe 1", "https://bakingamoment.com/wp-content/uploads/2018/07/IMG_9197-best-blondie-recipe-square.jpg"),
    new Recipe("Recipe 2", "Description for recipe 2", "https://bakingamoment.com/wp-content/uploads/2018/07/IMG_9197-best-blondie-recipe-square.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
