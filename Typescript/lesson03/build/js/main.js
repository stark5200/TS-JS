"use strict";
/* let stringArr = ['one', 'hey', 'ammar']

let guitars = ['strat', 'les paul', 5150]

let mixedData = ['EVH', 1984, true]

let test = []
let bands: string[] = []

// Tuple are sensitive to types and number of items
let myTuple: [string, number, boolean] = ['Dave', 1950, false]
let mixed = ['Dave', 1950, false]
mixed.push('hey babe')
//myTuple[3] = 'bloody'
mixed = myTuple // myTuple = mixed not possible


// objects
let myObj: object
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
  prop1: 'Dave',
  prop2: true

}
 
exampleObj.prop2 = false

type Guitarist = {
  name: string,
  active?: boolean,
  albums: (string | number)[]
}

let evh: Guitarist = {
  name: 'Eddie',
  active: false,
  albums: [1984, 5150, 'OU812']
}

let jimmy: Guitarist = {
  name: 'Jimmy',
  albums: [194, 'OU82', 5]
}

const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.active? guitarist.active : ""}`
}

console.log(greetGuitarist(jimmy))

interface Pianist  {
  name: string,
  active?: boolean,
  albums: (string | number)[]
}

// Enums
// added to the languange and runtime

enum Grade {
  U = 2,
  D,
  C,
  B,
  A,
}

console.log(Grade.C) */
// interface userId = stringOrNumber  wont work
// Literal type
let myName;
myName = 'Steve';
// functions
const add = (a, b) => {
    return a + b;
};
const logMessaege = (message) => {
    console.log(message);
};
const multiply = function (c, d) {
    return c * d;
};
// comvert to more or less specific type
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
let myBal = addOrConcat(4, 1, 'add');
// Be careful with assertions
// 10 as string  not allowed
10; // allowed force casting / double casting
// The Dom
//const img = document.querySelector('img') as HTMLImageElement
//const myImg = document.getElementById('#img')! as HTMLImageElement // non null assertion
//const nextImg = <HTMLImageElement>document.getElementById('#img')  // no work in tsx files for react
//img.src 
//myImg.src
// Classes
//
class Coder {
    constructor(// adding visibility modifiers removes the need from declaring the paremeters up top
    name, music, age, lang = 'English') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}
const Ammar = new Coder('Ammar', 'Hip-Hop', 25);
// Extends and Implements, Make Interface like class
//.
//.
//.
// Index Signatures and keyof Assertions   
// need to review
// Chapter 8 Generics
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(true));
console.log(isObj('john'));
console.log(isObj([123]));
console.log(isObj({ name: 'john' }));
console.log(isObj(null));
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
// Required and ReadOnly
const recordAssignment = (assign) => {
    //send to database or whatever
    return assign;
};
