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
  userNameInput !: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private isPlatformBrowser: PlatformDetectorService) {

  }

  ngAfterViewInit() {
    this.userNameInput.nativeElement.focus();
  }
  ngOnInit(): void {

    this.loginForm = this.formBuilder.group(
      {
        userName: ['flavio', Validators.required],
        password: ['123', Validators.required]
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
      success => {
        this.router.navigateByUrl('user/' + userName)
      },
      err => {
        this.loginForm.reset();
        //if(this.isPlatformBrowser.isPlataformBrowser())
        this.userNameInput.nativeElement.focus();
      });
  }

}
