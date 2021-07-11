import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm = new FormGroup({});

  @ViewChild('userNameInput') userNameInput = new ElementRef({});


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {


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

    this.router.navigateByUrl('listar/:UserName')

    /*this.authService.authenticate(userName, password)
    .subscribe(
      () => {
        console.log("Autenticado");
        this.router.navigateByUrl('listar/:UserName')
      },
      err => {
        console.log(err);
        this.loginForm.reset();
      });*/
  }

}
