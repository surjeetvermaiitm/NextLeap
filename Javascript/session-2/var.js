// "use strict";
// let a = 5;
//let a=7;//can't declare same var in strict mode

// console.log(a);

//scope
// var g = "global scope";
// function outer() {
//   var o = "outer scope";
//   console.log(i); //can not get access
//   //   console.log(b);//can not access
//   function inner() {
//     var i = "inner scope";
//     let b = "block scope";
//     // console.log(i);
//     // console.log(b);
//   }
//   inner();
// }
// var a = outer();

// Scoping in Practice

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Steven';

//       // Reasssigning outer scope's variable
//       output = 'NEW OUTPUT!';

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);
// console.log(age);
// printAge();

//Hoisting
//qn1
//decalaration goes top of the root of the scope
// console.log(a, b); //undefined undefined
// a = 10;
// console.log(a, b); //10 undefined
// var a;
// console.log(a, b); //10 undefined
// var b = 20;
// console.log(a, b); //10 20

//qn2-->doubt
// console.log(a, b); //a will give error as a doesn't get declared in strict mode or vs code editor
// a = 10; //will give error in strict mode
// var b = 20;
// console.log(a, b); //10 20

//qn3-->doubt
// function fn() {
//   a = 10; // goes to global in nonstrict
//   var b = 20;
//   console.log(a, b); //10 20
// }
// fn();
// console.log(a); //10
// console.log(b);//error

//qn4
// console.log(a);//error
// a = 20; //error
// let a;
// console.log(a);

// qn5
// Array
// var a = [1, "1", "surjeet", null, undefined];
// console.log(a);//[ 1, '1', 'surjeet', null, undefined ]

// var a = [1, 2, { x: 2 }, "skv"];
// console.log(a);//[ 1, 2, { x: 2 }, 'skv' ]
// console.log(Number(null));//0
// console.log(1 + 2 + "3"); //33
// console.log(1 + +"2"); //3
// console.log(4 + 5 + "6"); //96
// console.log(+"6.5"); //6.5
// console.log(Number("1.1")); //1.1
// console.log(parseInt("1.1")); //1
// console.log(String(123)); //123
// console.log((123).toString()); //123
// console.log(1 - +"12");//-11
