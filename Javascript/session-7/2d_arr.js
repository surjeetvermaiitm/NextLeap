//2d array
// let arr = [1, 2, 3, 4];
// let arr2 = arr.forEach((val, idx) => {
//   arr[idx] *= 2;
// });
// console.log(arr); //[ 2, 4, 6, 8 ]
// console.log(arr2); //undefined

// let arr3 = arr.map((val, idx) => {
//   arr[idx] *= 2;
//   return val * 2;
// });
// console.log(arr); //[ 4, 8, 12, 16 ]
// console.log(arr3); //[ 4, 8, 12, 16 ]

// var product = [
//   { id: "p1", count: 1 },
//   { id: "p2", count: 2 },
//   { id: "p3", count: 3 },
//   { id: "p4", count: 4 },
// ];

// let ans = product.reduce((acc, val) => {
//   acc[val.id] = val.count;
//   return acc;
// }, {});
// console.log(ans);

// const cars = [
//   { type: "Volvo", year: 2016 },
//   { type: "Saab", year: 2001 },
// ];
// cars.sort((ob1, ob2) => {
//   return ob1.year > ob2.year ? 1 : -1;
// });
// console.log(cars);
// cars.sort((ob1, ob2) => {
//   return ob1.type > ob2.type ? 1 : -1;
// });
// console.log(cars);
