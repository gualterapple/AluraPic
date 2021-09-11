import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {


  private _url = '';

  @Input() link : string = '';

  @Input() alt : string = 'xamarin';

  @Input() set url(url: string)
  {
    this._url = url;
  }

  get url()
  {
    return this._url;
  }

}
