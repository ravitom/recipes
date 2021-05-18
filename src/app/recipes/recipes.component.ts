import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
})
export class RecipesComponent implements OnInit {
  receivedRecipe: Recipe;
  constructor() {}

  ngOnInit() {}

  onReceivedRecipe(recipe: Recipe) {
    this.receivedRecipe = recipe;
    // console.log(this.receivedRecipe);
  }
}
