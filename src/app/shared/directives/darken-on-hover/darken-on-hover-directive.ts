import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDarkenOnHover]',
})
export class DarkeOnHoverDirective {

  @Input() brightness = '70%';

  constructor(private el: ElementRef) {}

  @HostListener('mouseover')
  darkenOn(){
    this.el.nativeElement.style.filter = `brightness(${this.brightness})`;
  }

  @HostListener('mouseleave')
  darkenOff(){
    this.el.nativeElement.style.filter = 'brightness(100%)';
  }

}
