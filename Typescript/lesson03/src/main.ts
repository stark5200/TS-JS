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

// Lesson 04 Type aliases and functions
type stringOrNumber = string | number
type stringOrNumberArray = (string | number)[]

interface Pianist  {
  name?: string,
  active?: boolean,
  albums: stringOrNumberArray
}

type userId = stringOrNumber  
// interface userId = stringOrNumber  wont work

// Literal type
let myName: 'Ammar' | 'Steve' | 'Amy'
myName = 'Steve'

// functions
const add = (a: number, b:number) => {
  return a +b
}

const logMessaege = (message: any): void => {
  console.log(message)
}

type mathFunction = (a:number, b: number) => number

const multiply: mathFunction = function(c, d) {
  return c * d
} 

// more weird type things with functions

// Type Assertions / Casting

type One = string
type Two = string | number
type Three = 'hello'

// comvert to more or less specific type
let a: One = 'hello'
let b = a as Two // less specific
let c = a as Three // more specific

let d = <One>'world'
let e = <string>'world'

const addOrConcat = (a:number, b:number, c:'add' | 'concat'): number | string => {
  if (c === 'add') return a + b
  return '' + a + b
} 

let myVal: string = addOrConcat(2, 2, 'concat') as string
let myBal: number = addOrConcat(4, 1, 'add') as number
// Be careful with assertions

// 10 as string  not allowed
(10 as unknown) as string  // allowed force casting / double casting

// The Dom
//const img = document.querySelector('img') as HTMLImageElement
//const myImg = document.getElementById('#img')! as HTMLImageElement // non null assertion
//const nextImg = <HTMLImageElement>document.getElementById('#img')  // no work in tsx files for react

//img.src 
//myImg.src

// Classes
//
class Coder {
  /* name: string
  music:  string
  age: number
  lang: string */
  secondLang!: string // no need to initialize in constructor

  constructor(  // adding visibility modifiers removes the need from declaring the paremeters up top
    public readonly name: string,
    public music:string,
    private age: number,
    protected lang:string = 'English'
  ) {
    this.name = name
    this.music = music
    this.age = age
    this.lang = lang
  }


  // getters and setters  
}

const Ammar = new Coder('Ammar', 'Hip-Hop', 25) 

// Extends and Implements, Make Interface like class
//.
//.
//.
// Index Signatures and keyof Assertions   
// need to review


// Chapter 8 Generics

const echo = <T>(arg: T): T => arg

const isObj = <T>(arg: T): boolean => {
  return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

console.log(isObj(true))
console.log(isObj('john'))
console.log(isObj([123]))
console.log(isObj({name: 'john'}))
console.log(isObj(null))

// chapter 9 Utility types

// Partial

interface Assignment {
  studentId: string, 
  title: string, 
  grade: number, 
  verified?: boolean,
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
  return { ...assign, ...propsToUpdate}
}

const assign1: Assignment = {
  studentId: "compsci123", 
  title: "Final Project",
  grade: 0,
}

console.log(updateAssignment(assign1, { grade: 95}))
const assignGraded: Assignment = updateAssignment(assign1, {grade: 95})

// Required and ReadOnly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  //send to database or whatever
  return assign
}

const assignVerified: readonly<Assignment> = {
  ...assignGraded, verified: true
}

recordAssignment({...assignGraded, verified: true})

// Record

const hexColorMap: Record<string, string> = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",
}

type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B", 
  Kelly: "U"
}

interface Grades {
  assign1: number, 
  assign2: number, 
}

const gradeData: Record<Students, Grades> = {
  Sara: {assign1: 85, assign2: 93},
  Kelly: {assign1: 76, assign2: 15},

}

// Pick and Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
  studentId: "k132", 
  grade: 85,
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
  studentId: "k132", 
  title: "Final Project",
}

// Exclude and Extract

type adjustedGrade = Exclude<LetterGrades, "U">

type highGrades = Extract<LetterGrades, "A" | "B">

// Nonnullable

type AllPossibleGrades = 'Dave' |'john'| null | undefined
type NamesOnly = NonNullable<AllPossibleGrades>

// ReturnType

type NewAssign = { title: string, points: number }

const createNewAssign = (title: string, points: number): NewAssign => {
  return {title, points}
}

// Vite