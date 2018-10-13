import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {MemberVo} from "./domain/member.vo";

@Injectable()
export class AuthGuardService {

  constructor() { }


  login(member: MemberVo): Observable<boolean> {
    if (member.email === 'admin@eastflag.co.kr' && member.password === '123456') {
      // http로 서버에 로그인이 성공하면 토큰 정보를 받아와서 스토리지에 저장한다.
      const token = 'abcdefg';
      localStorage.setItem('token', token);
      return of(true);
    } else {
      return of(false);
    }
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLogIn() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }


}
