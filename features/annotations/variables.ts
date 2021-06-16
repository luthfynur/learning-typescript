let apples: number = 1;
let speed: string = 'wkwokwokw';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let thruts: boolean[] = [true, false, true];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // { x: 10, y: 20}

// 2) When we declare a variable on one line
//    and initializate it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let word of words) {
  if (word === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 69];
let numberAboveZero: boolean | number = false;

for (let num of numbers) {
  if (num > 0) {
    numberAboveZero = num;
  }
}
