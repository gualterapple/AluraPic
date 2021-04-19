import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';
import { PhotosComponent } from './photos/photos.component';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  fotos : Photo[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();
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
    this.debounce.pipe(debounceTime(300)).subscribe(filter => this.filter = filter);

  } 

  ngOnDestroy(): void {
  this.debounce.unsubscribe();  }

  onKeyUp(evento:KeyboardEvent)    
    { 
      this.debounce.next((<HTMLInputElement>evento.target).value);
    } 

    load()    { 
      this.photoService.listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photos => this.fotos.concat(photos));
      if(!PhotosComponent.length) this.hasMore = false;
    } 

  

}
