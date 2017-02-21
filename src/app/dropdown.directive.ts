import { Directive } from '@angular/core';
import {HostBinding} from '@angular/core';
import {HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  private isOpen = false;

  @HostBinding('class.open') get opened() {
    return this.isOpen;
  }

  @HostListener('click') open() {
    this.isOpen = true;
  }

  @HostListener('mouseleave') close() {
    this.isOpen = false;
  }
}
