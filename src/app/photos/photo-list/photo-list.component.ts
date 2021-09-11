import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { debounceTime } from 'rxjs/operators';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  fotos : Photo[] = [];
  filter: string = '';
  hasMore = true;
  currentPage: number = 1;
  userName: string = '';


  constructor(
    private photoService: PhotoService,
    private activeRoute: ActivatedRoute){
    }

  ngOnInit() : void{
    this.userName = this.activeRoute.snapshot.params.userName;
    this.fotos = this.activeRoute.snapshot.data['photos'];

  }

    load()    {
      this.photoService.listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.filter = '';
        this.fotos = this.fotos.concat(photos);
        if(!photos.length) this.hasMore = false;
      })
    }



}
