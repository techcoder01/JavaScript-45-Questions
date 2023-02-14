// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let number = 7;
console.log("Is the number equal to 7? I predict true.");
console.log(number === 7);

console.log("Is the number less than 5? I predict false.");
console.log(number < 5);

let string1 = 'Hello';
let string2 = 'hello';
console.log("Are the strings equal? I predict false.");
console.log(string1 === string2);

let array = [1, 2, 3];
console.log("Is the length of the array greater than 2? I predict true.");
console.log(array.length = 2);

let boolean = true;
console.log("Is the boolean value false? I predict false.");
console.log(boolean === false);

let object1 = {name: 'Alice', age: 25};
let object2 = {name: 'Alice', age: 25};
let object3 = object1
console.log("Are the objects equal? I predict false.");
console.log(object1 === object2);
console.log(object3 === object1);


let nullValue = null;
console.log("Is the null value equal to undefined? I predict false.");
console.log(nullValue === undefined);

let number2 = 10;
console.log("Is the number greater than 5 and less than 15? I predict true.");
console.log(number2 > 5 && number2 < 15);

let string3 = 'hello';
console.log("Does the string contain the letter 'o'? I predict true.");
console.log(string3.includes('o'));

let array2 = [4, 5, 6];
console.log("Is the number 7 in the array? I predict false.");
console.log(array2.includes(7));
