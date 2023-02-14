// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

console.log("\n");

var modesOfTransportations = ["Bike", "Car", "Train", "Plane"];

for (var i = 0; i < modesOfTransportations.length; i++) {
    console.log("I would like to own a " + modesOfTransportations[i] + ".");
}

console.log("\n");

modesOfTransportations.forEach(function(modesOfTransportation){
    console.log("I would like to own a " + modesOfTransportation + ".")
})
