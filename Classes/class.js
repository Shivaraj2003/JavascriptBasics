
class Student{
    constructor(name,USN,cgpa){
        this.name = name;
        this.USN = USN;
        this.cgpa = cgpa;
    }

    getDetails(){
        return (`The name of the student is ${this.name}`);
    }
}

let s1 = new Student('Shivaraj','20CS153',9.2);
console.log(s1.name+' '+s1.USN+' '+s1.cgpa);
console.log(s1.getDetails());


// Inheritance example
class Person {
    constructor(name) {
        this.name = name;
    }
    // method to return the string
    toString() {
        return (`Name of person: ${this.name}`);
    }
}
class student extends Person {
    constructor(name, id) {
        // super keyword for calling the above 
        super(name);
        this.id = id;
    }
    toString() {
        return (`${super.toString()},
        Student ID: ${this.id}`);
    }
}
let student1 = new student('Shivaraj', 21);
console.log(student1.toString());

//Encapsulation
class VtuStud {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    add_USN(usn) {
        this.usn = usn;
    }
    getDetails() {
        console.log(`Name is ${this.name},
        USN is: ${this.usn}`);
    }
}
 
let person1 = new VtuStud('Shivaraj', 21);
person1.add_USN('20cs153');
person1.getDetails();

//polymorphism
// for a athelete run means start running
// for a developer run means start executing

//abstraction: hiding essential details from implementation