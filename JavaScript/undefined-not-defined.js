//? undefined and not defined and null in javascript

//todo: undefined
//* variable has been declared but not given a value 
// null == undefined

///! 1. when we declare a variable without assigning any value to it
let name;
// console.log(name);
//Output: undefined

///! 2. when value is not assigned in array or object

let arrayOfNum = [25, 12, 45, ,55]
// console.log(arrayOfNum);
//Output: [ 25, 12, 45, <1 empty item>, 55 ]

// console.log(arrayOfNum[3]);
//Output: undefined 

let objectOfNum = {
    fname: "zahra",
    lname: "bagheri",
    age: 20,
    city: null,
};
// console.log(objectOfNum)

///! 3. when function dont have a return statement but are called for assigning a value to variable
let multiplication = (a,b)=>{
    let c = a*b;
    // return c;
}

let multiply = multiplication(5,4);
// console.log(multiply)
//Output: undefined



//todo: not defined
//* variable does not exist.
//* when a variable is not declared with declaration keyword like var , let or const.

///! 1. use var keyword (because of variable hoisting)
// console.log(flower);
var flower = 25;
//Output: undefined

///! 2. don't use var keyword 
// console.log(Butterfly);
Butterfly = 25;
//Output: ReferenceError: Butterfly is not defined

///! 3. variable is declare but it don't have any value
var aster
console.log(aster)
aster = 10;
//Output: undefined


//todo: Null
///* {Null} is reserved keyword in js. when the value is not exist or an empty value.
//* we can assign a null value to a variable.

let game = null;
// console.log(game)
//Output: null


//todo: NAN

let azalea = 12 + null;
console.log(azalea);
//Output: 12

let clematis  = 14 * null;
console.log(clematis);
//Output: 0

let bloom = 60 + undefined;
console.log(bloom);
//Output: NAN

let susan = 51 * undefined;
console.log(susan)
//Output: NAN