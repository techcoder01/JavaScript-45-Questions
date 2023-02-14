// Seeing the World: Think of at least five places in the world you’d like to visit.


// • Store the locations in a array. Make sure the array is not in alphabetical order.
const placesToVisit = ['Japan', 'Brazil', 'New Zealand', 'Italy', 'Thailand'];

// • Print your array in its original order.
console.log('\n Original order:');
console.log(placesToVisit);

// • Print your array in alphabetical order without modifying the actual list.
console.log('\n Alphabetical order:');
placesToVisit.sort()
console.log(placesToVisit);

// • Show that your array is still in its original order by printing it.
console.log('\n Array still in original order:');
console.log(placesToVisit);

// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log('\n Reverse alphabetical order:');
placesToVisit.sort().reverse()
console.log(placesToVisit);

// • Show that your array is still in its original order by printing it again.
console.log('\n Array still in original order:');
console.log(placesToVisit);

// • Reverse the order of your list. Print the array to show that its order has changed.
console.log('\n Reversed order:');
console.log([...placesToVisit].reverse());


// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('\n Back to original order:');
placesToVisit.reverse();
console.log(placesToVisit);

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('\n Alphabetical order:');
placesToVisit.sort();
console.log(placesToVisit);

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('\n Reverse alphabetical order:');
console.log( [...placesToVisit].sort().reverse());
