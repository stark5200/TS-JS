console.log("Hiiiiiiiiiiiiiii")
//strings
const myVariable = "Mathematics";


// string methods
console.log(myVariable.length)
console.log(myVariable.charAt(6))
console.log(myVariable.indexOf('a'))
console.log(myVariable.lastIndexOf('a'))
console.log(myVariable.slice(2, 7))
console.log(myVariable.toUpperCase())
console.log(myVariable.includes("athe"))
console.log(myVariable.split(""))

//Numbers
const myNumber = 42;
const myFloat = 42.514511;
const myString = "42.151656bhhb";
//.toFixed .parseFloat     Number.parseInt       NaN Not a Number

const parsed = Number(parseFloat(myString).toFixed(2));  
console.log(typeof(parsed))
console.log(parsed + 15);
console.log(myFloat.toFixed(2));

// Math pow min max trunc round floor ceil random
console.log(Math.PI)
console.log(Math.trunc(Math.PI))
console.log(Math.round(Math.PI, 3))

// If conditions
let check ="Please";
if (check) {
  console.log(check);
} else if (check === "Please") {
  console.log("please check for me.")
} else {
  console.log("Sorry we got nothing")
}

//switch
let myCase = "4" 
switch (myCase) {
  case "1":
    console.log("One");
    break;
  case "2":
    console.log("Twoooo");
    break;
  case "3":
    console.log("Three");
    break;
  default:
    console.log("Nothing");
    break;
}