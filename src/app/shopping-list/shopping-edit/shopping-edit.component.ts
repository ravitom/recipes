import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  EventEmitter,
  Output,
} from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput") nameInput: ElementRef;
  @ViewChild("amountInput") amountInput: ElementRef;

  @Output() ingredientsAdded = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit() {}
  addIngrediant() {
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const newIng = new Ingredient(ingName, ingAmount);

    this.ingredientsAdded.emit(newIng);
  }
}
