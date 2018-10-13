import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Hero} from "../hero";
import {environment} from "../../environments/environment.prod";
import {Observable} from "rxjs";
import {ResultVo} from "../domain/result.vo";

@Injectable()
export class AdminService {
  headers = new HttpHeaders();

  // @ts-ignore
  constructor(private http: HttpClient) {
    this.headers.append('Content-Type','application/json');
  }

  addHero(hero: Hero):Observable<ResultVo>{
    return this.http.post<ResultVo>(`${environment.HOST}/api/hero`, {headers : this.headers});
  }

}
