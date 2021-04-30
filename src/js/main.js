//1
let phrase = 'Bonjour tout le monde    ';
//2
console.log(phrase.length);
//3
console.log(phrase.trimEnd())
//4
phrase = phrase.trimEnd();
console.log(phrase.length);
//5
console.log(phrase.charAt(20));
//console.log(phrase.charAt(phrase.lenght-1)); meilleure solution!

//6
phrase = phrase.substr(8);
console.log(phrase);
//7
phrase = phrase.replace("", "Bonjour ");
console.log(phrase);
//8
phrase = phrase.substr(0,7);
console.log(phrase);
//9
let phrase2 = "J'aime les numbers"
phrase2 = phrase2.replace("numbers","string")
console.log(phrase2)
//10
var min=1; 
var max=1000;  
var random = Math.floor(Math.random() * (max - min)) + min; 
console.log(random);