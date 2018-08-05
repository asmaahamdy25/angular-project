import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe [] = [
    new Recipe('A test Recipe ', 'this simple test ', 'https://www.logolynx.com/images/logolynx/82/829ba7822e43ebe89394d1ecbbf152b7.jpeg'),
    new Recipe('A test Recipe ', 'this simple test ', 'https://www.logolynx.com/images/logolynx/82/829ba7822e43ebe89394d1ecbbf152b7.jpeg')

  ];
  constructor() { }

  ngOnInit() {
  }
  onSelectedRecipe( recipe : Recipe){
this.recipeWasSelected.emit(recipe);
 }
}
