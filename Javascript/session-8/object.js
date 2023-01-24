//call,apply and bind

///////////////////////////////////////
// The call and apply Methods
/*
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
      console.log(
        `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
      );
      this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
  };
  
  lufthansa.book(239, 'Jonas Schmedtmann');
  lufthansa.book(635, 'John Smith');
  
  const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
  };
  
  const book = lufthansa.book;
  
  // Does NOT work
  // book(23, 'Sarah Williams');
  
  // Call method
  book.call(eurowings, 23, 'Sarah Williams');
  console.log(eurowings);
  
  book.call(lufthansa, 239, 'Mary Cooper');
  console.log(lufthansa);
  
  const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
  };
  
  book.call(swiss, 583, 'Mary Cooper');
  
  // Apply method
  const flightData = [583, 'George Cooper'];
  book.apply(swiss, flightData);
  console.log(swiss);
  
  book.call(swiss, ...flightData);
  
  ///////////////////////////////////////
  // The bind Method
  // book.call(eurowings, 23, 'Sarah Williams');
  
  const bookEW = book.bind(eurowings);
  const bookLH = book.bind(lufthansa);
  const bookLX = book.bind(swiss);
  
  bookEW(23, 'Steven Williams');
  
  const bookEW23 = book.bind(eurowings, 23);
  bookEW23('Jonas Schmedtmann');
  bookEW23('Martha Cooper');
*/

let item = {
  id: "1",
  title: "TITLE",
  description: "DESC",
  mrp: 100,
  discountPrice: 80,
  quantity: 2,
};
// item.quantity = 3;
// console.log(item);
// for (let k in item) {
//   console.log(k, item[k]);
// }

// for (let [k, v] of Object.entries(item)) {
//   console.log(k, v);
// }
// for (let k of Object.keys(item)) {
//   console.log(k, item[k]);
// }
// for (let v of Object.values(item)) {
//   console.log(v);
// }
// console.log(Object.keys(item));
// console.log(Object.keys(item).length); //6
// console.log(Object.values(item));
// console.log(Object.entries(item));

// console.table(item);

const productItem1 = {
  id: "PI",
  name: "Real Juice",
  quantity: "400ML",
  //   showTitle() {
  //     console.log("Hello product");
  //   },
  title: "hi",
  showTitle() {
    return this.title;
  },
};
const productItem2 = {
  id: "PII",
  name: "Fake Juice",
  quantity: "600ML",
  title: "hello",
};
//call method
// console.log(productItem1.showTitle());//ji
// console.log(productItem1.showTitle.call(productItem2));//hello

// const titleFn = productItem1.showTitle;
// console.log(titleFn()); //undefined
// console.log(titleFn.call(productItem1)); //hi
// console.log(titleFn.call(productItem2)); //hello

// const titleFn = productItem1.showTitle();
// console.log(titleFn); //hi

// productItem1.newMethod = function () {
//   console.log(this);
// };
