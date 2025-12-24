// To print any thing in the console we use console.log

console.log("Finally i Started learning Javascript")
console.log("-----------------------Data Types----------------------")
// HAVE 4 KIND OF DATA TYPES
// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Float

let strnumber = "10"
let age = 20
let isStudent = true
let cost=300.50

let intnumber=parseInt(strnumber)

console.log("converted integer value",intnumber)
console.log(strnumber)
console.log(age)
console.log(isStudent)
console.log(cost)

console.log(typeof(intnumber))
console.log(typeof strnumber)
console.log(typeof age)
console.log(typeof isStudent)
console.log(typeof cost)

console.log("-----------------------Arthmatic Operators----------------------")

let x=5
let y=10

let add=x+y
let sub=x-y
let mul=x*y
let div=x/y
let module=x%y

// +,-,*,/,%
console.log("addition",add)
console.log("substraction",sub)
console.log("multiplication",mul)
console.log("division",div)
console.log("module",module)

console.log("-----------------------Comparison Operators----------------------")
// >,<,<=,>=,==,===,!=,!==

console.log("x>y",x>y)
console.log("x<y",x<y)
console.log("x<=y",x<=y)
console.log("x>=y",x>=y)
console.log("x==y",x==y)    // check only value
console.log("x===y",x===y)  // check value and datatype
console.log("x!=y",x!=y)
console.log("x!==y",x!==y)

console.log("-----------------------Logical Operators----------------------")
// &&,||,!

console.log("x>y && x==y",x>y && x==y)
console.log("x>y || x==y",x>y || x==y)
console.log("!(x>y)",!(x>y))

console.log("-----------------------Assignment Operators----------------------")
// =,+=,-=,*=,/=
let a=10
a+=5
console.log(a)

console.log("-----------------------Bitwise Operators----------------------")
// &,|,^,~,<<,>>,>>>

console.log("1&2",1&2) // AND
console.log("1|2",1|2) // OR
console.log("1^2",1^2)// XOR
console.log("~1",~1)// NOT
console.log("1<<2",1<<2)   // left shift
console.log("1>>2",1>>2)   // right shift
console.log("1>>>2",1>>>2) // unsigned right shift



console.log("-----------------------Control Statements----------------------")
let b=20
if (a==b){
    console.log("a is equal to b")
}
else if(a==20){
    console.log("a is equal to 20")
}
else if(a==10){
    console.log("a is equal to 10")
}
else{
    console.log("a is not equal to b or 20 or 10")
}


console.log("-----------------------Loops----------------------")
// 1. for
// 2. while
// 3. do-while

// for (let i=1;i<=100;i++){
//     console.log(i)
// }
let i=1
// while(i<=100){
//     console.log(i)
//     i++
// }

do {
    console.log(i)
    i++
} while (i<0);


function greeuser(greet){
    console.log(greet)
}

import readline from "readline"

for (let i=0;i<3;i++){
    let greet= "Hi User"
    greeuser(greet)
}


