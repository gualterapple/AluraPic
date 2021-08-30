import { Directive, ElementRef, OnInit } from '@angular/core';
import { PlatformDetectorService } from 'src/app/core/platform/platform-detector.service';

@Directive({
  selector: '[immediate-click]',
})
export class ImmediateClickDirective implements OnInit {
  constructor(
    private element: ElementRef<any>,
    private plataformDetector: PlatformDetectorService
  ) {}

  ngOnInit() {
    if (this.plataformDetector.isPlataformBrowser())
      this.element.nativeElement.click();
  }
}
