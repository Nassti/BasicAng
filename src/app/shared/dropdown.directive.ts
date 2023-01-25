import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener
 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') onToggle: boolean = false;

  constructor(private elRef: ElementRef) { }

  @HostListener('document:click', ['$event'])
  toggleOpen(e: Event) {
    //console.log(e.target);
    this.onToggle = this.elRef.nativeElement.contains(e.target) ? !this.onToggle : false;
  }

}
