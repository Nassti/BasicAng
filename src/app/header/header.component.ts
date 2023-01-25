import { Component, EventEmitter, Output } from "@angular/core";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  collapsed = true;
  @Output() onSelected = new EventEmitter<boolean>();
  viewHome = false;

  onSelect(str: string) {
    str === 'recipes' ? this.viewHome = true : this.viewHome = false;
    this.onSelected.emit(this.viewHome);
  }
}
