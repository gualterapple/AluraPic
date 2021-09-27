import { UserService } from './../user/user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';


const API = 'https://api2.pape.gov.ao:3081/sigcpape/v1/api/';
const APIK = 'http://kizola-backend-qualidade.herokuapp.com/login';
const APII = 'https://apiirecord.azurewebsites.net/api/ApplicationUser/Login';
const APIM = 'http://localhost:3000/login';
const APIA = environment.ApiUrl;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private UserService: UserService) {}

  authenticate(userName: string, password: string) {
    return this.http.post(
      APIA + 'user/login',
      {userName, password},
      {observe: 'response' }
      )
    .pipe(
      tap((res) => {
        const authToken = res.headers.get('x-access-token');
        this.UserService.setToken(authToken);
      })
    );
    /*return this.http.get(APIM)
    .pipe(
      tap((res) => {
        var r: any = res;
        const authToken = r.token;
        this.UserService.setToken(authToken);
      })
    );*/
    /*return this.http
      .post(
        APIM,
        { Email: userName, Password: password },
        { observe: 'response' }
      ).pipe(
        tap((res) => {
          var r: any = res;
          const authToken = r.body.token;
          this.UserService.setToken(authToken);
        })
      );*/
  }
}
