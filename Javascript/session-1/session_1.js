var a;
console.log(a); //undefined
console.log(typeof a); //undifined
//in JS size doesn't matter
var a = true; //Boolean
var b = "Hi";
var c = 1;
var d = [1, 2, 3, 4]; //type object
var f = null; //type object
console.log(typeof f);
console.log(f);
var g = "null"; //String
var h = {}; //object
var i = function () {
  console.log("i");
};
console.log(typeof i); //function
console.log(010 == 10); //false
console.log(010 === 10); //false 010--> octal
