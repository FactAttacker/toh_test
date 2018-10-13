import { Component, OnInit } from '@angular/core';
import {AuthGuardService} from "../auth-guard.service";
import {Router} from "@angular/router";
import {ToasterService} from "angular2-toaster";
import {MemberVo} from "../domain/member.vo";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  member = new MemberVo();

  constructor(private authService: AuthGuardService, private router: Router, private toaster: ToasterService) {
    this.member.email = 'admin@eastflag.co.kr';
    this.member.password = '123456';
  }

  ngOnInit() {
  }


  login(member: MemberVo): Observable<boolean> {
    if (member.email === 'admin@eastflag.co.kr' && member.password === '123456') {
      // http로 서버에 로그인이 성공하면 토큰 정보를 받아와서 스토리지에 저장한다.
      const token = 'abcdefg';
      localStorage.setItem('token', token);
      //
      if (localStorage.getItem('redirect_url')) {
        this.router.navigateByUrl(localStorage.getItem('redirect_url'));
      } else {
        this.router.navigateByUrl('/');
      }
      return of(true);
    } else {
      return of(false);
    }
  }

}
