// function greetStudent(studentName){//parameter  //named function
        
//     return `Hello there ${studentName}`; 
// }

// const greetStudent = function (studentName){//parameter //anonymous function
        
//     return `Hello there ${studentName}`; 
// }

//fat arrow function

// const greetStudent =  (studentName) => {//parameter //anaonymous function //Expression
        
//     return `Hello there ${studentName}`; 
// }

// const greetStudent = studentName => `Hello there ${studentName}`;

// const studentName1 = 'Saurabh Verma';
// const studentName2 = 'Ana De Armas';

// const greet1 = greetStudent(studentName1);//argument
// const greet2 = greetStudent(studentName2);

// console.log(greet1);
// console.log(greet2);

// const fullName = function(firstName, middleName, lastName){
//     return `Hello ${lastName}, ${firstName}. ${middleName}`;
// }

// const fullName = (firstName, middleName, lastName)=>{
//     return `Hello ${lastName}, ${firstName}. ${middleName}`;
// }

const fullName = (firstName, middleName, lastName) => `Hello ${lastName}, ${firstName}. ${middleName}`;

const titleName = fullName('Saurabh', 'D', 'Verma');
console.log(titleName);