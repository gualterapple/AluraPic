import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  fotos : Photo[] = [];

  constructor(
    private photoService: PhotoService,
    private activeRoute: ActivatedRoute){  }

  ngOnInit() : void{

    const userName = this.activeRoute.snapshot.params.UserName;
    this.photoService.listFromUser(userName)
    .subscribe(
      photos => 
      { 
        this.fotos = photos;
        console.log(photos[0].userId); 
      },
        err => 
      { 
        console.log(err); 
      } 
    ); 
  } 

}
