import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

import { PhotoService } from '../photo/photo.service';
import { AlertService } from '../../shared/components/alert/alert.service';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css'],
})
export class PhotoFormComponent implements OnInit {
  photoForm: FormGroup;
  file: File;
  selectedPhoto: any;
  preview: any;
  percentDone = 0;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', [Validators.maxLength(300), Validators.required]],
      allowComments: [true],
    });
  }

  upload() {
    const description = this.photoForm.get('description')?.value;
    const allowComments = this.photoForm.get('allowComments')?.value;
    this.photoService
      .upload(description, allowComments, this.selectedPhoto)
      .pipe(
        finalize(() => {
          this.router.navigate(['/user', this.userService.getUserName()]);
        })
      )
      .subscribe(
        (event: HttpEvent<any>) => {
          if (event.type == HttpEventType.UploadProgress) {
            if (event.total != undefined)
              this.percentDone = Math.round((100 * event.loaded) / event.total);
          } else if (event instanceof HttpResponse) {
            this.alertService.success('Upload completed', true);
          }
        },
        (error) => {
          this.alertService.success('Could not upload the photo', error);
          this.alertService.danger('upload error!');
        }
      );
  }
  uploadEvent(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    this.selectedPhoto = files[0];
    this.handleFile(this.selectedPhoto);
  }

  handleFile(file: File) {
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event) => (this.preview = event.target?.result);
    reader.readAsDataURL(file);
  }
}
