import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  @Output() selectedOption = new EventEmitter<string>();

  onSelectOption(option: string) {
    this.selectedOption.emit(option);
  }
}
