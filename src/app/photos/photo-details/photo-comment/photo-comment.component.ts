import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
    const photoId = this.route.snapshot.params.photoId;
    this.comments$ = this.photoService.getComment(photoId);

    this.commentForm = this.formBuilder.group(
      {
        comment: ['', Validators.maxLength(300)]
      })
  }

  save(){
    const comment = this.commentForm.get('comment')?.value;
    this.photoService.addComment(this.photoId, comment).subscribe( res => {
      console.log(res);
      this.commentForm.reset;
      alert('Comentário adicionado com sucesso!');
    })
    console.log('chamei');
  }

}
