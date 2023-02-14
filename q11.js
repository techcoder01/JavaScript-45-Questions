// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

console.log("\n") // works as a br tag

// Define an array of names
var names = ["John", "Jane", "Jim", "Jasmine"];

// Print each name using forEach method
names.forEach(function(name) {
  console.log("Hello , My Name is " + name);
});

console.log("\n") // works as a br tag

// Define an array of names
var names1 = ["John", "Jane", "Jim", "Jasmine"];

// Print each name one by one
for (var i = 0; i < names1.length; i++) {
  console.log("Hello My Name Is " + names1[i]);
}