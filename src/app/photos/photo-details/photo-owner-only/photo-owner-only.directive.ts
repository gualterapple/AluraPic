import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

import { Photo } from '../../photo/photo';
import { UserService } from '../../../core/user/user.service';

@Directive({
  selector: '[appDarkenOnHover]',
})
export class PhotoOwnerOnlyDirective {

  @Input() ownedPhoto : Photo;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private userService: UserService) {}

    ngOnInit():void
    {
      this.userService.getUser().subscribe(user => {
        if(!user || user.id != this.ownedPhoto.userId)
        {
          this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
        }
      });
    }

}
