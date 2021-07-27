//js/variable.js

let var1 = 29;
console.log(typeof var1);
//let은 배렬의 값이 선언되면 정해진다. 값을 재정의 할 수 있는 변수.
//typeof는 배렬값의 타입을 보여준다.

var1 = 'World';
var1 = 100;
var1 = true;
console.log(typeof var1);
//자바과 같이 자바스크립트도 변수값을 재정의 가능하다.

let var11 = 10;
console.log(var11);

const con1 = 'Good'; //const는 상수(바뀌지않는 수)나타낸다.
// con1 = 'morning'; 상수는 재정의 불가능

let num1 = 1;
let num2 = 1;
console.log(num1+num2);

document.write('<h1>Hello</h1>');
document.write('<ul>');
document.write(' <li>Apple</li>');
document.write(' <li>Banana</li>');
document.write('<ul/>');

let str = '<ul>';
str += '   <li>Orange</li>';
str += '   <li>Orange</li>';
str += '</ul>';
document.write(str);

let fruits = ['수박','딸기','복숭아'];
fruits = new Array();
fruits.push('수박');
fruits.push('딸기');
fruits[2] = '복숭아';
fruits[fruits.length] = '옥수수';
fruits[fruits.length] = '감자';
fruits.pop();//마지막부터 하나씩 삭제
fruits.unshift('옥수수');//제일 앞에 추가
// fruits.shift();//첫번째 삭제

console.log(typeof fruits);

document.write('<ul>');
for(let i=0; i<fruits.length; i++){
    document.write('<li>'+ fruits[i] +'</li>');
}
document.write('</ul>');