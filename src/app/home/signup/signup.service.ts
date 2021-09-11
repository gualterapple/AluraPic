import { User } from './../../core/user/user';
import { NewUser } from './new-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class SignupService{

  constructor(private http: HttpClient ){
  }

  checkUserNameTaken(userName: string)
  {
    return this.http.get(`${API}/Users/?user_name=` + userName)
  }

  singUp(user: NewUser)
  {
    return this.http.post(`${API}/user/signup`, user);
   }

}
