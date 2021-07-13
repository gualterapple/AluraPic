import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { TokenService } from '../token/toke.service';

const API = 'https://api2.pape.gov.ao:3081/sigcpape/v1/api/';
const APIK = 'http://kizola-backend-qualidade.herokuapp.com/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService) { }

  authenticate(userName:string, password: string)
  {
    //return this.http.post(API + 'auth/login',{email: userName, password: password });
    return this.http.post(
      APIK,
      {telefone: userName, senha: password },
      {observe: 'response'})
    .pipe(tap(res=>{

      var r: any = res;
      const authToken = r?.body?.retorno.body.token;
      this.tokenService.setToken(authToken);
      console.log(res);
      console.log(authToken);
    }))
  }
}
