// var ob = { 1: "surjeet" };
// console.log(ob[1]);

// var ob = { 123: "surjeet" };
// console.log(ob["123"]);
// console.log(ob[123]);

// //key is always a string
// console.log(ob);

// var d = "e";
// var obj = { 1: "Hello world", c: "surjeet" };
// obj[d] = "bye";
// console.log(obj);

// var f = [1, 2, 3, 4]; //converted into string
// obj[f] = "array";
// console.log(obj);

//foreach and string literals
// var product = ["p1", "p2", "p3"];
// product.forEach((val, idx) => {
//   console.log(`${idx}. ${val} is available`);
// });

//it won't work
// var obj = { 1: "Hello world", c: "surjeet" };
// obj.forEach((val, idx) => {
//   console.log(`${idx}. ${val} is available`);
// });

//for loop
// for (let i = 0; i < product.length; i++) {
//   console.log(product[i], i);
// }

//for of
// for (const val of product) {
//   console.log(val);
// }

// var obj = { 1: "Hello world", c: "surjeet" };
// for (const val of obj) {//can't traverse object using of,use in for object
//   console.log(val);
// }

//for in
// var obj = { 1: "Hello world", c: "surjeet" };
// for (const key in obj) {
//   console.log(obj[key]);
// }

// var product = ["p1", "p2", "p3"];
// for (let val in product) {
//   console.log(val);
// }

//acc->accumulated,initial acc=0
// var arr = [1, 2, 3, 4];
// let ans = arr.reduce((acc, val) => {
//   acc += val;
//   return acc;
// }, 0);
// console.log(ans);//10

// var arr = [1, 2, 3, 4];
// let ans = arr.reduce((acc, val) => {
//   acc += val;
//   return acc;
// }, "");
// console.log(ans); //1234

// var product = [
//   { id: "p1", count: 1 },
//   { id: "p2", count: 2 },
//   { id: "p3", count: 3 },
//   { id: "p4", count: 4 },
// ];

// let ans = product.reduce((acc, val) => {
//   acc += val.count;
//   return acc;
// }, 0);
// console.log(ans);

// let ans = product.reduce((acc, val) => {
//   acc[val.id] = val.count;
//   return acc;
// }, {});
// console.log(ans); //{ p1: 1, p2: 2, p3: 3, p4: 4 }

// var product = [
//   { id: "p1", count: 1 },
//   { id: "p2", count: 2 },
//   { id: "p3", count: 3 },
//   { id: "p4", count: 4 },
// ];

// var arr = [1, 2, 3, 4, 5];
// let ind = arr.findIndex((val) => {
//   return val == 3;
// });
// console.log(ind);//2

// var arr = [1, 2, 3, 4, 5];
// let ind = arr.findIndex((val) => {
//   return val == 9;
// });
// console.log(ind); //-1

// var arr = [1, 2, 3, 4, 5];
// let ind = arr.find((val) => {
//   return val == 4;
// });
// console.log(ind); //4

// var arr = [1, 2, 3, 4, 5];
// let ind = arr.find((val) => {
//   return val == 8;
// });
// console.log(ind); //undefined

// var str = "shadab is a smart student";
// var arr = str.split(" ");
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1).toLowerCase();
// } //this will work
// for (t of arr) {
//   t = "a";
// }//can't change using of
// var ans = arr.join(" ");

// console.log(ans);

// let new_arr = arr.map((t) => {
//   return t.slice(0, 1).toUpperCase() + t.slice(1).toLowerCase();
// });
// var ans = new_arr.join(" ");
// console.log(ans);

// all array and string method in depth, include,push,pushing of one array into other
// let arr = [1, 2, 2, 3, 4];
// console.log(arr.pop());
// arr.sort((a, b) => {
//   return a > b ? -1 : 1;
// });
// console.log(arr);

// let mp = arr.reduce((acc, val) => {
//   acc[val] = acc[val] ? acc[val] + 1 : 1;
//   return acc;
// }, {});
// let ans = 0;
// console.log(mp);

// let arr2 = [1, 2, 3];
// // arr.push(...arr2);
// arr3 = [...arr, ...arr2];

// console.log(arr3);
// let rows = 5;
// let characters = ["A", "B", "C", "D", "E"];
// // Your code goes here
// let n = Math.ceil(rows / 2);
// for (let i = 1; i <= n; i++) {
//   let str = "";
//   for (let j = 1; j <= n - i; j++) {
//     str += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     str += characters[k - 1];
//   }
//   console.log(str);
// }
// for (let p = 1; p < n; p++) {
//   let str2 = "";
//   for (let q = 1; q <= p; q++) {
//     str2 += " ";
//   }
//   for (let r = 1; r <= 2 * n - 2 * p - 1; r++) {
//     str2 += characters[r - 1];
//   }
//   console.log(str2);
// }

//array method
// let a = [2, 3, 4];
// a.length = 0;
// console.log(a); //to make array empth,like pop all ele garbage collector
// a = []; //or u can use to make empty

// var a = [1, 2, 3];
// var b = [2, 3, 4];
// var c = b.concat(a);
// console.log([...a, ...b]);
// console.log(b);
// console.log(a);
// console.log(c);

// var a = [1, 2, 3, 4];
// var c = a.push(8); //c is the length of updated array
// console.log(a, c);

// var a = [1, 2, 3];
// var c = a.includes(9); //false check if present or not
// console.log(a, c);
