let objA = {a:1,b:2,c:3};

//shallw copy : 메모리 복사
// let copyA = objA;
// copyA.a =2;
// console.log(objA,copyA);

//deep copy
//es6 스프레드 연산자
let es6A = {...objA};
es6A.a = 2;
console.log(objA,es6A);


//es5 deep copy
//Object.assign(src, ...target) ...은 나머지 연산자로 파라메터가 1개이상 온다.
let es5A= Object.assign({},objA);
objA.a = 2;
console.log(objA,es5A);
