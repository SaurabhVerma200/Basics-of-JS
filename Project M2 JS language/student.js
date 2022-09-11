var studentsArray = [];

var student = {
    name: 'Saurabh Verma',
    birthYear: 1994,
    course: 'IFT 598',
    grade: 96,
    active: false,
    age: function calculate(){
        if (this.active){
        return 2022 - this.birthYear;
        }
        else{
            return 'not present in records since student is inactive'
        }
    }
}

var student1 = {
    name: 'Kiara Advani',
    birthYear: 1992,
    course: 'IFT 598',
    grade: 99,
    active: true,
    age: function(){
        if (this.active){
        return 2022 - this.birthYear;
        }
    }
}

var student2 = {
    name: 'Samantha',
    birthYear: 1987,
    course: 'IFT 598',
    grade: 96,
    active: true,
    age: function(){
        if (this.active){
        return 2022 - this.birthYear;
        }
    }
        
}

studentsArray.push(student);
studentsArray.push(student1);
studentsArray.push(student2);
studentsArray.forEach((item) => console.log(item.age()));

console.log(studentsArray);

// console.log(student.name, 'age is', student.age());
// console.log(student1.name, 'age is', student1.age());
// console.log(student2.name, 'age is', student2.age());