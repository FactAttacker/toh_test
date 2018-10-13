import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mydate'
})
export class MydatePipe implements PipeTransform {

  //value : 파이프 앞으 ㅣ값을 입력으로 받는다.
  //args: 파이프 뒤에 콜론 다음 스트링으로 받ㄴ느다
  //리턴되는 값이 화면에 출력된다.
  transform(value: any, args?: any): any {
    // console.log('first : ',value,'second : ', args);
    // if(args  === '$'){
    //   return (value as number) / 1100 + args;
    // }else if (args === 'yen'){
    //   return (value as number) / 120 + args;
    // }
    return (value).substring(0, 16); // 0 <= x < 16
  }

}
