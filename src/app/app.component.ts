import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  selectedOption: string = "recipes";
  onSelectedOption(option: string) {
    this.selectedOption = option;

    console.log(this.selectedOption);
  }
}
