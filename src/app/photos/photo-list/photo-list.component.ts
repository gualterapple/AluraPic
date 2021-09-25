import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { debounceTime } from 'rxjs/operators';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';
import { LoadingService } from '../../shared/components/loading/loading.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
    private activeRoute: ActivatedRoute,
    private loadingService: LoadingService){
    }

  ngOnInit() : void{
    this.loadingService.start();
    this.activeRoute.params.subscribe(params =>
      {
        this.userName = params.userName;
        this.fotos = this.activeRoute.snapshot.data['photos'];
      });

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
