// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

console.log("\n")

var names = ["John", "Jane", "Jim", "Jackie"];

for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i] + ", How are you today?");
}

console.log("\n")

names.forEach(function(name){
    console.log("Hello " + name + ", How are you today?");
})