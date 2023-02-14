// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.

// • Modify your program to print a statement about each animal, such as A dog would make a great pet.

// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

// const animals = ['Dogs', 'Cats', 'Rabbits'];

// for (let i = 0; i < animals.length; i++) {
//   console.log(animals[i]);
// }

// console.log("");

// for (let i = 0; i < animals.length; i++) {
//   console.log(`A ${animals[i].toLowerCase()} would make a great pet.`);
// }

// console.log("They are all common household pets.");
// console.log("Any of these animals would make a great pet!");

const animals = ["Dogs" , "Cat" , "Rabbits"];

animals.forEach(function(animal){
    console.log(animal);
})

console.log("");

animals.forEach(function(animal){
    console.log(`A ${animal.toLowerCase()} would make a greak pet.`)
})

console.log("They are all common household pets.");
console.log("Any of these animals would make a great pet!");