//iife
// (function add(a, b) {
//   console.log(a + b);
// })(2, 3);

//Object literals
// const person = { name: "surjeet", age: 10 };
// const child = Object.create(person);
// console.log(person);
// console.log(child.age);

//Object constructor
// function Person() {
//   this.age = 30;
//   this.showdetail = function () {
//     console.log("Details");
//   };
//   const showData = function () {
//     console.log("const function");
//   };
// }

//class
// class Person {
//   constructor(age) {
//     this.age = age;
//     this.showdetail = function () {
//       console.log("showdata");
//     };
//   }
//   showData() {
//     console.log("Details");
//   }
// }

// const teacher = new Person(23);
// console.log(teacher.showData());

class Person {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  addAddress(address) {
    this.address = address;
  }
  getDetails() {
    return {
      personName: this.name,
      personId: this.id,
      personAddress: this.address,
    };
  }
}
const ajay = new Person("surjeet", 2);
// console.log(ajay.getDetails());

class Student extends Person {
  constructor(age) {
    super();
    this.age = age;
  }
}

const skv = new Student(30);
console.log(skv);
