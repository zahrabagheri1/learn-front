const number1 = [2, 4, 3, 5]

// console.log(number1.map((num)=> num+2))

console.log(number1.map((num)=> num * num))
console.log(number1)

//todo: map make a new array

let number2 = number1.map(x => x*x).sort(
    (a,b)=>{
        console.log(a)
        console.log(b)
        console.log(a-b)
    }
)

