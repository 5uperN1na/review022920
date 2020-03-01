//Combining two short hands

let isEven = value => value % 2 === 0;
let add = (a, b) => a + b;
let getName = value => value.name;

isEven(2); // true
isEven(3); // false

let obj = {
    name: 'Jane',
    age: 27
};

getName(obj); // 'Jane'
console.log(obj);


//The "this" Borrower

class Person {
    constructor() {
        this.age = 0;
    }

    growUp() {
        setInterval(() => {
            this.age++;
        }), 1000;
    }
}

let p = new Person();
p.growUp();

//Spread syntax

function add1(a, b, c) {
    console.log(a + b + c);
}
let enteredValues = [5, 2, 7];
add(...enteredValues);

// same as: add.apply(null, enteredValues);
// same as: add(5, 2, 7);

let low = [0, 1, 2]; 
let high = [7, 8, 9];
let n = [...low, 3, 4, 5, 6, ...high];
console.log(n); // [0,1,2,3,4,5,6,7,8,9]

//Spreading a string

let str = 'Code';
let chars = [...str];
console.log(chars); // [ 'C', 'o', 'd', 'e' ]

//Rest Parameters

function sayHello(name, city) {
    console.log(`Hello ${name}, welcome to ${city}!`);
}
function greet(city, ...otherNames) {
    // otherNames is an array
    for (let i = 0; i < otherNames.length; i++) {
        sayHello(otherNames[i], city);
    }
}

// 'Birmingham' will go into the city parameter
// 'Jane', 'James', 'John', 'Joaquin', and 'Jasmine' will go into the rest parameter as an array
greet('Birmingham', 'Jane', 'James', 'John', 'Joaquin', 'Jasmine');
