var age = 2;  //int
var salary = 35.50;  //double

// console.log(`The variable type of age is ${typeof age}`);
// console.log(`The variable type of salary is ${typeof salary}`);

// var name = 'Saurabh Verma';
// console.log(`The variable type of name is ${typeof name}`);

const displayGreetings = (name, year) => {
    console.log(`Happy New Year!! ${year} ${name}`);
    
} 

const displayGreetingsWithEmoji = (name, year) => {
    console.log(`🤭 😄 Happy New Year!! ${year} ${name} 😄 🤭`); 
    
}
const greet = function(name, year, func){
    func(name, year);
}
greet('Saurabh Verma',2022, displayGreetings);
greet('Ana De Armas',2022, displayGreetingsWithEmoji);
// var greet = {};

// if (age >= 10){
//     greet = displayGreetings;
// } 
// else{
//     greet = displayGreetingsWithEmoji;
// }
// console.log(`The variable type of displayGreetings is ${typeof displayGreetings}`);
