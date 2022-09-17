import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Response} from "../model/response.model";
import {User} from "../model/user.model";
import {catchError, Observable, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL= `${environment.apiBaseURL}/swap`
  constructor(private  http: HttpClient) { }
  getUserByUsername(username:string){
    console.log(`${environment.apiBaseURL}/get-user/${username}`)
    return this.http.get(`${environment.apiBaseURL}/get-user/${username}`)
  }
}
