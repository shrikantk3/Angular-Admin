import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http"
import { Observable } from "rxjs";
@Injectable({
    providedIn:"root"
})

export class Sharedservices {
    constructor(private _http:HttpClient){
    }
    chatFunction<Observable>(query:string){
        let queryParams = new HttpParams().append("query",query);
        return this._http.get('http://localhost:8080/ai/',{params:queryParams});
    }
}