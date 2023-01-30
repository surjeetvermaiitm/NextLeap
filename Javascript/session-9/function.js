//function
// function getName() {
//   //
// }
// getName();
// console.log(getName);

// var fn=function (){
//     //
// }
// fn();

// function sub(a, b = 1, c) {
//   return a - b + c;
// }
// console.log(sub(3, 1, 2));//4

// function sub(a, b = 1, c = 5) {
//   return a - b + c;
// }
// console.log(sub(3)); //7

// function sum(...nums) {
//   console.log(arguments);//[Arguments] { '0': 3, '1': 4, '2': 5, '3': 6 }
//   //rest op
//   let total = 0;
//   for (let i = 0; i < nums.length; i++) {
//     total += nums[i];
//   }
//   return total;
// }
// console.log(sum(1, 2, 3, 4)); //10
// let arr = [3, 4, 5, 6];
// console.log(sum(...arr)); //18

// function sum() {
// //   console.log(arguments);//{ '0': 1, '1': 2, '2': 3, '3': 4 }
//   //console.log(typeof arguments);//object
//   //arguements.length
//   let total = 0;
//   for (let [key, val] of Object.entries(arguments)) {
//     total += val;
//   }
//   return total;
// }
// console.log(sum(1, 2, 3, 4)); //10
// let arr = [3, 4, 5, 6];
// console.log(sum(...arr)); //18

//pass by val and ref
// var fn = function sum(a, b) {
//   a.randomKey = 2;
//   b.randomKey = 3;
//   return a.val + b.val;
// };
// var obj1 = { val: 1 };
// var obj2 = { val: 2 };
// console.log(fn(obj1, obj2)); //3
// console.log(obj1, obj2); //{ val: 1, randomKey: 2 } { val: 2, randomKey: 3 }

//pure function
//A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed.

// var fn = function sum(a, b) {
//   return a + b;
// };
// console.log(fn(1, 2));

//not pure fn
// var fn = function (ob1, ob2) {
//   var res = ob1.val + ob2.val;
//   ob1.val = 0;
//   ob2.val = 0;
//   return res;
// };

//function hoisting
// console.log(sum(2, 2));//4
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, 2));//3

// no hoisting of fn here in function expression
// console.log(sum(2, 2)); //error: sum is not a function
// var sum = function (a, b) {
//   return a + b;
// };
// console.log(sum(1, 2));

//higher order fun
//fn as arguemrnt in fn

// function add() {
//   let total = 0;
//   for (let [key, val] of Object.entries(arguments)) {
//     total += val;
//   }
//   return total;
// }

// console.log(add(1, 2, 3, 4, 54));

//arrow fn
// let sum = (a, b) => {
//   return a + b;
// };

//
// var obj = {
//   val1: 1,
//   val2: 2,
//   sum: function () {
//     console.log(this);
//     return this.val1 + this.val2;
//   },
// };
// var obj2 = {
//   val1: 10,
//   val2: 20,
// };
// console.log(obj.sum());//3
// console.log(obj.sum.call(obj2));//30

//arrow fn
// var obj = {
//   val1: 1,
//   val2: 2,
//   sum: () => {
//     console.log(this); //here arrow point to window object or global obj
//     return this.val1 + this.val2;
//   },
// };
// var obj2 = {
//   val1: 10,
//   val2: 20,
// };
// console.log(obj.sum()); //{} NaN here arrow point to window object

//closure
var sum = (a) => {
  return (b) => {
    return a + b;
  };
};
console.log(sum(2)(3)); //5
let sum1 = sum(1);
console.log(sum1(2)); //3
console.log(sum1(3)); //4
