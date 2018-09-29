import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  // 자식이 부모로 부터 데이터를 받는 방법
  @Input()
  selectedHero: Hero;
  
  constructor(private route: ActivatedRoute,private heroService:HeroService) {
    console.log('hero detail Created');
    // /heroes/:hero id의 hero_id가 바뀔때 생성자는 한번만 호출
    // subscribe 콜백은 데이터가 들어올 때마다 호출
    this.route.params //params은 바뀔때마다 호출
    .subscribe(params => {
        console.log(params);
        //hero_id를 획득후 서비스를 통해서 데이터를 얻어서 
        //selectedHero에 대입
      this.getHero(+params.hero_id);// +는 스트링으로 변환시켜줌

      //발생자 [Observable 데이터 발생]
      this.heroService.refresh.next(+params.hero_id);
    });
  }

  getHero(hero_id: number) {

    this.heroService.getHero(hero_id)
      .subscribe(data => this.selectedHero = data);
    }

  ngOnInit() {
  }

}
