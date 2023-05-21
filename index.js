"use strict";
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   booking: [],

//   book(flighNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flighNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flighNum}}`, name });
//   },
// };
// lufthansa.book(250, "Mohamed Tarek");
// lufthansa.book(635, "Eslam Tarek");
// const eurowings = {
//   name: "Eurowings",
//   iataCode: "Ew",
//   bookings: [],
// };

// const book = lufthansa.book;
// book.call(eurowings, 25, "Mohamed Tarek");

// const poll = {
//   question: "What is your favourit programming language",
//   option: ["0:Javascript", "1: Python", "2:Rust", "3: C++"],
//   answers: new Array(4).fill(0),
//   registerNewanswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.option.join("\n")}\n(Write option number)`
//       )
//     );
//     console.log(answer);
//     typeof answer === "number" &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//   },
// };
// poll.registerNewanswer();
const securBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = securBooking();
