import { Console } from "console";

console.log("-----------------------ternary operator----------------------")

// if, elase

let a=20

// if(a%2===0){
//     console.log("a is even")
// }
// else{
//     console.log("a is odd")
// }

a%2==0?console.log("a is even"):console.log("a is odd");
// condition? trueblock : falseblock - ternary operator

for(let i=0;i<100;i++){


    i%2==0?console.log(`${i}: is even`):console.log(`${i}: is odd`);
    if(i==10){
        break;
    }
}


console.log("-----------------------JS Scopes----------------------")

// block, fuction, global
//bloak scope - scope inside block
//fuction scope - scope inside fuction
//global scope - scope outside fuction


console.log("-----------------------Arrow Functions----------------------")

const add=(k,l) =>{
    console.log("From arrow function")
    return k+l
}
console.log(add(10,30)) //add(10,30)


console.log("-----------------------Arrays----------------------")

let cities=["bangalore","mumbai","chennai","delhi"]
console.log(cities)
console.log(cities.length)
for (let i=0;i<cities.length;i++){

    console.log(cities[i])
}

cities.push("hyderabad") // add element to end of the array
console.log(cities) // [ 'bangalore', 'mumbai', 'chennai', 'delhi', 'hyderabad' ]
cities.pop() // remove element from end of the array
console.log(cities)// [ 'bangalore', 'mumbai', 'chennai', 'delhi' ]
cities.unshift('hyd')// add element to start of the array
console.log(cities)// [ 'hyd', 'bangalore', 'mumbai', 'chennai', 'delhi' ]
cities.shift()// remove element from start of the array
console.log(cities)// [ 'bangalore', 'mumbai', 'chennai', 'delhi' ]
console.log(cities.indexOf('chennai'))// index of chennai
console.log(cities.includes('chennai'))// check if chennai is in the array



console.log("-----------------------Objects----------------------")

const Car={
    color:"red",
    model:'bmw',
    year:2022,
    // start=()=>console.log("started")
    // stop=()=>console.log("stopped")
    // drive=()=>console.log("driving")
    start:function stratcar(){
        console.log('Car started')
    },
    stop:function stopcar(){
        console.log('Car stopped')
    },
    drive:function drivecar(){
        console.log('Car driving')
    }
}

console.log(Car.year)
Car.start()
Car.stop()
Car.drive()

console.log(Object.keys(Car)) // all keys
console.log(Object.values(Car))// all values
console.log(Object.entries(Car)) // all keys and values


console.log("-----------------------Spread Operator----------------------")

let arr1=[1,2,3]
let arr2=[4,5,6]
let arr3=[...arr1,...arr2]
console.log(arr3)

console.log("-----------------------DOM----------------------")

