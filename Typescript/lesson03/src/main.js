var stringArr = ['one', 'hey', 'ammar'];
var guitars = ['strat', 'les paul', 5150];
var mixedData = ['EVH', 1984, true];
var test = [];
var bands = [];
// Tuple are sensitive to types and number of items
var myTuple = ['Dave', 1950, false];
var mixed = ['Dave', 1950, false];
mixed.push('hey babe');
//myTuple[3] = 'bloody'
mixed = myTuple; // myTuple = mixed not possible 
// objects
var myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
var exampleObj = {
    prop1: 'Dave',
    prop2: true
};
exampleObj.prop2 = false;
var evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
var jimmy = {
    name: 'Jimmy',
    albums: [194, 'OU82', 5]
};
var greetGuitarist = function (guitarist) {
    return "Hello ".concat(guitarist.active ? guitarist.active : "");
};
console.log(greetGuitarist(jimmy));
// Enums 
// added to the languange and runtime
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 2] = "U";
    Grade[Grade["D"] = 3] = "D";
    Grade[Grade["C"] = 4] = "C";
    Grade[Grade["B"] = 5] = "B";
    Grade[Grade["A"] = 6] = "A";
})(Grade || (Grade = {}));
console.log(Grade.C);
