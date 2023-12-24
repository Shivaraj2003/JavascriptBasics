console.log("Hello world");

//Variables
let name='Shivaraj shetty';
console.log(name);
name='Shetty Shivaraj';
console.log(name);

//Constant
const usn=153;
console.log(usn);

//Datatypes

let firstname='shivaraj';
let rollNo = 153;
let isBad = false;
let age;

console.log(typeof firstname);
console.log(typeof rollNo);
console.log(typeof isBad);
console.log(typeof age);

//Objects
let person={};
console.log(typeof person);
person = {name:'Shetty Shivaraj',age:'18'};

console.log(person.age);
console.log(person['name']);

//Arrays
let cs3=[];
console.log(typeof cs3);
cs3=[1,2,'A'];
console.log(cs3);
console.log(cs3[2]);

//funtions
function greet()
{
    console.log('Good Morning');
}

greet();

function print(name){
    console.log(name);
}
print('hello');
print(cs3);
print(person);
