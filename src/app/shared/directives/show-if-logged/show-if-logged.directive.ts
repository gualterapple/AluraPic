import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

import { UserService } from '../../../core/user/user.service';

@Directive({
  selector: '[showIfLogged]',
})
export class ShowIfLoggedDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private userService: UserService) {}

    ngOnInit():void
    {
      if(!this.userService.isLogged())
        {
          this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
        }

    }

}
