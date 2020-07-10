import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {tap, catchError} from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
    providedIn:'root'
})


export class LoginService{
    public token:string;
constructor(private http:HttpClient){
console.log("LoginService Constuctor")
}
private apiUrl ="http://173.249.21.26/DreamClient/BetClient.svc/Login";

public validateLoginUser(loginmodel:LoginModel){

    let headers =new HttpHeaders({'Content-type':'application/json'});
    return this.http.post<any>(this.apiUrl,loginmodel,{headers:headers})
    .pipe(tap(data=>
        {
          console.log(data);

          if(data.token != null)
          {
              if (data.Usertype == "2"){
              localStorage.setItem('currentUser',JSON.stringify({username:loginmodel.Username ,token:data.Token}));
            }
            else if(data.Usertype=="1"){
                localStorage.setItem('AdminUser',JSON.stringify({username:loginmodel.Username,token:data.Token}));
            }

            return data;
          }else{
          return null;  
          }
        
        }),
        catchError(this.handleError)
        );
}

LogoutUser(){
   localStorage.removeItem('currentUser');
}

private handleError(error:HttpErrorResponse){
  if(error.error instanceof ErrorEvent){
     console.log('An error occurred', error.error.message);
  }else{

    console.log(`Backend returned code.${error.status},`+`body was:${error.error}`);
  }
  return throwError('Something bad Happened;Please try again later.');
};


}