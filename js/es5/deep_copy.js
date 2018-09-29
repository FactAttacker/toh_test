// shallow copy
// var obj = { a: 1 };
// var copy = obj;
// obj.a = 2;
// console.log(obj);
// console.log(copy);

// deep copy
var obj = { a: 1 };
// es5: Object.assign(src, ...target)
// var copy = Object.assign({}, obj);
// es6: 스프레드 연산 ...
var copy = {...obj};
obj.a = 2;
console.log(obj);
console.log(copy);
