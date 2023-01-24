// Maps: Iteration
/*
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

///////////////////////////////////////
// Maps: Fundamentals
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
*/

// let productMap = new Map();
// productMap.set("id", "p1");
// productMap.set("title", "mango");
// console.log(productMap);
// console.log(productMap.size);
// console.log(productMap.get("id"));
// // productMap.clear()
// console.log(productMap.keys());
// console.log(productMap.values());
// console.log(productMap.entries());
// // console.log(productMap.has("id")); //true
// // console.log(productMap.delete("id")); //true
// // console.log(productMap);
// productMap.forEach((val, key, map) => {
//   console.log(key, val);
// });
// console.log(productMap.entries());
// for (let [k, v] of productMap.entries()) {
//   console.log(k, v);
// }

// let mp = new Map();
// let sum = (a, b) => {
//   let arr = [a, b];
//   if (mp.has(arr)) {
//     return mp.get(arr);
//   } else {
//     mp.set(arr, a + b);
//   }
// };
