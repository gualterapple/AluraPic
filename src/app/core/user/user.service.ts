import { BehaviorSubject, Subject } from 'rxjs';
import { TokenService } from './../token/toke.service';
import { Injectable } from '@angular/core';
import { User } from './user';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class UserService {

  private userSubject = new BehaviorSubject<any>(null);
  userName: string;

  constructor(private tokenService: TokenService) {

    if(this.tokenService.hasToken())
    this.decodeAndNotify();

  }

  setToken(token: any)
  {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser(){
    return this.userSubject.asObservable();
  }

  private decodeAndNotify(){
    const token = this.tokenService.getToken();
    if (token) {
      const user = jwt_decode(token) as User;
      this.userName = user.name;
      this.userSubject.next(user);
    }
  }

  logout()
  {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isLogged()
  {
    return this.tokenService.hasToken();
  }

  getUserName()  {
    return this.userName;
  }


}

