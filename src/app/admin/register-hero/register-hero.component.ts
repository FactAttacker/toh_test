import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../admin.service";
import {ToasterService} from "angular2-toaster";

@Component({
  selector: 'app-register-hero',
  templateUrl: './register-hero.component.html',
  styleUrls: ['./register-hero.component.scss']
})
export class RegisterHeroComponent implements OnInit {
  form: FormGroup;
  powers = ['flying', 'penetration', 'hacking', 'strength'];

  constructor(private fb: FormBuilder,private adminService:AdminService ,private  toaster:ToasterService) {
    // @ts-ignore
    this.form = this.fb.group({
      name   : [null, Validators.compose([
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(20)
        ])],
      email  : [null,Validators.compose([
              Validators.required,Validators.email
        ])],
      sex    : [null,Validators.required],
      country: [null,Validators.required],
      address: null,
      power  : this.fb.array(this.powers.map(x => !1))
    });
  }

  ngOnInit() {
  }

  register(){
    console.log('register');
    if(!this.form.valid){
      // 모든 필드를 한번씩 터치
      Object.keys(this.form.controls).forEach(key => {
        const control = this.form.controls[key];
        control.markAsTouched({onlySelf: true});
      });
      return;
    }

    //서버에 등록
    const hero = {...this.form.value};
    this.adminService.addHero(hero)
      .subscribe(body =>{
         console.log(body);
         
         if(body.result ===0){
           //등록이 성공되면 토스트 메시지 띄우고 폼 초기화
           this.toaster.pop('success','성공','등록되었습니다.');

           // form 초기화
           this.form.reset({});
         }else{
           this.toaster.pop('danger','실패','다시 시도하세요.');
         }
      });

  }

}
