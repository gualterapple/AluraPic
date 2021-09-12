import { User } from './../../core/user/user';
import { NewUser } from './new-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from '../../../environments/environment';

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root',
})
export class SignupService{

  constructor(private http: HttpClient ){
  }

  checkUserNameTaken(userName: string)
  {
    return this.http.get(`${API}Users/?user_name=` + userName)
  }

  singUp(user: NewUser)
  {
    return this.http.post(`${API}user/signup`, user);
   }

}
