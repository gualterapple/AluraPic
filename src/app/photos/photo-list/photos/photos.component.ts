import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  constructor() { }

  @Input() photos: Photo[] = [];
  rows: any[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if(changes.photos)
    this.rows = this.groupColums(this.photos);
  }
  groupColums(photos: Photo[]){
    const newRows: any[] = [];

    for (let index = 0; index < photos.length; index+=3) {

      newRows.push(photos.slice(index, index + 3));
      
    }

    return newRows;
  }


}
