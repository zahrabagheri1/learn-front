//? Difference between Regular functions and Arrow functions


//todo: normal function syntax
// function add(num1, num2) {
//   console.log( num1 + num2)
// }

//todo: arrow function syntax
// const add = (num1, num2 )=>{
//   console.log( num1 + num2)
// }

// let add = (num1, num2) =>  console.log( num1 + num2);

// add(3,3)


//todo: normal functin has arguments object
// function print() {
//   console.log(arguments)
//   console.log(arguments[0])
//   console.log(arguments[2])
// }
// print("Zahra", 22, true)


//todo: arrow function  does n't exist in it

const print = () => console.log(arguments[1])

print("zahra", 500 , false)

