import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PlatformDetectorService } from 'src/app/core/platform/platform-detector.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm = new FormGroup({});

  @ViewChild('userNameInput')
  userNameInput : any;


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private isPlatformBrowser: PlatformDetectorService) {

  }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group(
      {
        userName: ['', Validators.required],
        password: ['', Validators.required]
      }
    );

  }

  login()
  {
    const userName = this.loginForm.get('userName')?.value;
    const password = this.loginForm.get('password')?.value;

    //this.router.navigate(['listar']);

    this.authService.authenticate(userName, password)
    .subscribe(
      () => {
        console.log("Autenticado");
        this.router.navigateByUrl('listar')
      },
      err => {
        console.log(err);
        this.loginForm.reset();
        //if(this.isPlatformBrowser.isPlataformBrowser())
        this.userNameInput.nativeElement.focus();
      });
  }

}
