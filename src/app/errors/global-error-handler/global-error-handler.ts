import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { ErrorHandler, Injectable, Injector } from "@angular/core";
import * as StackTrace from "stacktrace-js";
import { UserService } from 'src/app/core/user/user.service';
import { ServerLogService } from "./server-log-service";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";


@Injectable()
export class GlobalErrorHandler implements ErrorHandler{

  constructor(private injector: Injector)
  {

  }

  handleError(error: any): void {

    const location = this.injector.get(LocationStrategy);
    const userService = this.injector.get(UserService);
    const logServeService = this.injector.get(ServerLogService);
    const route = this.injector.get(Router);
    const url = location instanceof PathLocationStrategy ? location.path() : '';

    const message = error.message ? error.message : error.toString();
    console.log('Passei pelo Handler');

    if(environment.production)
    route.navigate(['/error']);

    StackTrace
    .fromError(error)
    .then(stackTrace => {
      const stackTraceAsString = stackTrace
      .map(stack => stack.toString())
      .join('\n');

      console.log(message);
      console.log(stackTraceAsString);
      console.log('O que será enviado para o servidor:');
      logServeService.log({message, url, userName: userService.getUserName(), stack: stackTraceAsString}).subscribe(
        () =>
        {
          console.log('Log enviado com sucesso');
        },
        error => {console.log('Erro ao enviar log', error);});
    })
  }
}
