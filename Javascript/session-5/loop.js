// for (let i = 0; i <= 5; i += 2) {
//   console.log(i);
// }
// let n = 5;
// for (let i = 0; i < n; i++) {
//   let star = "";
//   for (let j = 0; j < n; j++) {
//     star += "*";
//   }
//   console.log(star);
// }

// *
// **
// ***
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let star = "";
//   for (let j = 1; j <= i; j++) {
//     star += "*";
//   }
//   console.log(star);
// }
//

//   *
//  **
// ***
// let n = 5;
// let str = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     str += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     str += "*";
//   }
//   str += "\n";
// }
// console.log(str);

// *****
// *   *
// *   *
// *   *
// *****

// let n = 5;
// let str = "";
// for (let i = 1; i <= n; i++) {
//   if (i == 1 || i == n) {
//     for (let j = 1; j <= n; j++) {
//       str += "*";
//     }
//   } else {
//     for (let j = 1; j <= n; j++) {
//       if (j == 1 || j == n) {
//         str += "*";
//       } else {
//         str += " ";
//       }
//     }
//   }
//   str += "\n";
// }
// console.log(str);

let arr = [1, 2, 3, 4];
console.log(typeof arr.slice(-1));
console.log(arr.slice(-1));
arr.push(5);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(0); //add start
console.log(arr);
arr.shift();
console.log(arr);
// delete arr[2];
// console.log(arr);

//splice
arr.splice(2, 1);
console.log(arr);

let new_arr = arr.map((val) => {
  return 2 * val;
});
console.log(new_arr);
console.log(arr);

arr.reverse();
console.log(arr);
console.log(arr.indexOf(8));
var result = 0;
arr.forEach((val) => (result += val));
console.log(result);
