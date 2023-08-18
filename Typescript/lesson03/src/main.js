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
var myName;
myName = 'Steve';
// functions
var add = function (a, b) {
    return a + b;
};
var logMessaege = function (message) {
    console.log(message);
};
var multiply = function (c, d) {
    return c * d;
};
// more weird type things with functions
