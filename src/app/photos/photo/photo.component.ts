import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

const CLOUD = environment.ApiUrl+'imgs/';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {


  private _url : any;

  constructor(private sanitizer: DomSanitizer) { }

  @Input() description = '';

  @Input() set url(url: any)
  {
    if(!url.startsWith('data'))
    {
      this._url = CLOUD + url;
    }
    else
    this._url = url;
  }

  get url()
  {
    return this.sanitizer.bypassSecurityTrustUrl(this._url);
  }

}
