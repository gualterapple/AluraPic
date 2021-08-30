import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoService } from '../photo/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup;
  file: File;
  selectedPhoto: any;
  preview: any;

  constructor(private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router) { }

  ngOnInit(): void {
    this.photoForm = this.formBuilder.group(
      {
        file:['', Validators.required],
        description:['', Validators.maxLength(300)],
        allowComments: [true]
      }
    )
  }

  upload()
  {
    const description = this.photoForm.get('description')?.value;
    const allowComments = this.photoForm.get('allowComments')?.value;
    const dados = this.photoForm.getRawValue();
    this.photoService.upload(description, allowComments, this.selectedPhoto).subscribe(
      () => {
        this.router.navigate(['']);
      });
    console.log(dados);
  }
  uploadEvent(event: Event)
  {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    this.selectedPhoto = files[0];
    this.handleFile(this.selectedPhoto);
  }

  handleFile(file: File)
  {
    this.file = file;
    const reader = new FileReader();
    reader.onload = event => this.preview = event.target?.result;
    reader.readAsDataURL(file);
  }

}
