import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoService } from './photos/photo/photo.service';
import { Photo } from './photos/photo/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  fotos : Photo[] = [];

  constructor(private photoService: PhotoService){  }

  ngOnInit() : void{

    this.photoService.listFromUser("Gualter")
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
