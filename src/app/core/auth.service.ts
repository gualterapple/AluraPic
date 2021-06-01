import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'https://api2.pape.gov.ao:3081/sigcpape/v1/api/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(userName:string, password: string)
  { 
    return this.http.post(API + 'auth/login',{email: userName, password: password });
  }
}
