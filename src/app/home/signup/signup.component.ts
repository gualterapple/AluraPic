import { Router } from '@angular/router';
import { SignupService } from './signup.service';
import { NewUser } from './new-user';
import { UserNotTakenValidatorService } from './user-not-taken.validators.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  EmailValidator,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';

@Component({
  templateUrl: './signup.component.html',
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signUpService: SignupService,
    private router: Router) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      userName: ['',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40),
        //Validators.pattern(/^[a-z0-9_\-]+$/)
        lowerCaseValidator
      ],
      //this.userNotTakenValidatorService.checkUserNameTaken(),

      ],
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(14)]],
    });
  }

  signUp()
  {
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signUpService.singUp(newUser).subscribe(sucess=>
      { this.router.navigate(['listar']); },
      error=>
      { console.log(error) }

    );
  }
}
