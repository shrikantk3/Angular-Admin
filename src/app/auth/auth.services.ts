import { OpenAI } from 'openai';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn:'root'
})

export class authServices{
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Access-Control-Allow-Origin': '*'
        })
      };
    constructor(
        private _http:HttpClient
    ){

    }

    signupApi(body:any):Observable<any>{        
        return this._http.post(`${environment.BASE_URL}:${environment.PORT}/auth/signup`, body, this.httpOptions);
    }
    signupStepsApi(body:any){        
        return this._http.post(`${environment.BASE_URL}:${environment.PORT}/auth/signup-step`, body, this.httpOptions);
    }
    loginApi(body:any){        
        return this._http.post(`${environment.BASE_URL}:${environment.PORT}/auth/login`, body, this.httpOptions);
    }
}