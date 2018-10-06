import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';
import {Observable, of, Subject} from 'rxjs';
import {delay} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment.prod";
import {TodoVo} from "./domain/todo.vo";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {ResultVo} from "./domain/result.vo";

// 1. (root 컴포넌트가 만들어질때) 해당 서비스를 컨테이너에 등록
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  //아무것도 안 적으면 typeScript에선 public으로 외부에서 접근이 가능하다.
  refresh = new Subject<number>(); // publisher: next() 함수로 데이터 발생
  refresh$ = this.refresh.asObservable(); // subscriber: subscribe()로 데이터 수신
  headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers.append('Content-Type','application/json');
  }

  getHeroes(): Observable<Hero[]> {
    // 네트워크를 통해서 모델 정보 획득
    //return of(HEROES).pipe(delay(1000));
    return this.http.get<Hero[]>(environment.HOST+'/api/heroes');
    //return of(HEROES);
  }

  getHero(hero_id: number): Observable<Hero>{
    // /api/hero/:hero_id 통해서 모델 정보 획득
    const h =  HEROES.find(hero =>  hero.hero_id === hero_id ?  true :  false );
    //return of(h);

    //template string 문법 `${변수}`
    return this.http.get<Hero>(`${environment.HOST}/api/hero/${hero_id}`);
    //return of(HEROES.find(hero => hero.hero_id === hero_id));
  }


  getTodoList(): Observable<TodoVo[]>{
    return this.http.get<TodoVo[]>(`${environment.HOST}/api/todo/`);
  }

  addTodo(todo:TodoVo): Observable<TodoVo>{
    // isFinished 속성이 boolean타입이기 때문에 명시적으로 속성값을 제거
    const tempTodo = {...todo}; // ...todo는 새로운 메모리 주소로 넣는다.
    delete tempTodo.isFinished;

    return this.http.post<TodoVo>(`${environment.HOST}/api/todo/`,todo,{headers:this.headers});
  }

  modifyTodo(todo: TodoVo): Observable<TodoVo>{
    return this.http.put<TodoVo>(`${environment.HOST}/api/todo/`,todo,{headers:this.headers});
  }

  removeTodo(todo_id:number): Observable<ResultVo>{
    return this.http.delete<ResultVo>(`${environment.HOST}/api/todo/?todo_id=${todo_id}`);
  }
  
}
