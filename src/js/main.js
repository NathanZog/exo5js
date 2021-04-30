let phrase = 'Bonjour tout le monde ';
console.log(phrase.length);
console.log(phrase.trimEnd());
console.log(phrase.length);
console.log(phrase.charAt(20));
console.log(phrase.substr(8,20));
console.log(phrase.replace("Bonjour","Bonjour"));
console.log(phrase.substr(0,7));
let phrase2 = "J'aime les numbers"
console.log(phrase2.replace("numbers","string"))
var min=1; 
var max=1000;  
var random = Math.floor(Math.random() * (max - min)) + min; 
console.log(random);