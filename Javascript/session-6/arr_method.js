//push
// let fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits.push("Mango"));//4 // adds "Mango" to the end of the array
// console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Mango"]

//pop
// let fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits.pop()); //Cherry // removes "Cherry" from the array
// console.log(fruits); // Output: ["Apple", "Banana"]

// shift(), unshift(), splice(), slice(), concat(), sort(), reverse(), map(), filter(), reduce(), etc.

//splice
// let fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits.splice(1, 0, "Mango")); // adds "Mango" to index 1, and 0 elements will be removed
// console.log(fruits); // Output: ["Apple", "Mango", "Banana", "Cherry"]
// console.log(fruits.splice(0, 2)); //start number and no of ele to be deleted->it returns deleted ele [ 'Apple', 'Mango' ]
// console.log(fruits); //[ 'Banana', 'Cherry' ]

// includes
// var arr = [1, 2, 3];
// console.log(arr.includes(2));//true

//reverse
// var arr = [1, 2, 3, 4];
// console.log(arr.reverse()); //[ 4, 3, 2, 1 ]
// // console.log(arr); //[ 4, 3, 2, 1 ]

//sort
// var arr = [1, 2, 3, 4];
// console.log(
//   arr.sort((a, b) => {
//     return a > b ? -1 : 1;
//   })
// ); //[ 4, 3, 2, 1 ]
// console.log(arr); //[ 4, 3, 2, 1 ]
//descending order
// a.sort((b, c) => {
//   return b - c;
// });
