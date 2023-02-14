// Q2: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let name = "tech";
console.log(`Lowercase: ${name.toLowerCase()}`);
console.log(`Uppercase: ${name.toUpperCase()}`);
console.log(`Titlecase: ${name.charAt(0).toUpperCase() + name.slice(1)}`);

let sentence = "Hello i am abdul hannan";

let words = sentence.split(" ");

let titleCaseWords = words.map(function(word){
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
});

let titleCaseSentence = titleCaseWords.join(" ");

console.log(titleCaseSentence);

