import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { PhotoComment } from '../../photo/photo-comment';
import { PhotoService } from '../../photo/photo.service';

@Component({
  selector: 'app-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.css'],
})
export class PhotoCommentsComponent implements OnInit {


  @Input() photoId: number;
  commentForm: FormGroup;

  comments$: Observable<PhotoComment[]>;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {

    const photoId1 = this.route.snapshot.params.photoId;
    this.comments$ = this.photoService.getComment(photoId1);

    this.commentForm = this.formBuilder.group(
      {
        comment_text: ['', Validators.maxLength(300)]
      })
  }

  save(){
    const commentario = this.commentForm.get('comment_text')?.value;
    this.comments$ = this.photoService.addComment(this.photoId, commentario)
    .pipe(switchMap(() => this.photoService.getComment(this.photoId)))
    .pipe(tap(() => {
      this.commentForm.reset();
    }));
  }

}
