import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { subscribeOn } from 'rxjs/operators';

import { UserService } from '../../../core/user/user.service';

@Directive({
  selector: '[showIfLogged]',
})
export class ShowIfLoggedDirective {

  currentDisplay: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private userService: UserService) {}

    ngOnInit():void
    {
      this.currentDisplay = getComputedStyle(this.el.nativeElement).display;
      this.userService.getUser().subscribe(user =>
        {
          if(user)
          {
            this.renderer.setStyle(this.el.nativeElement, 'display', this.currentDisplay);
          }
          else
          {
            this.currentDisplay = getComputedStyle(this.el.nativeElement).display;
            this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
          }
        })

    }

}
