function number(a){
    return function(b){
        return a+b
    }
}

console.log(number(10)(20))

function Person(name){
    return function(age){
        console.log(`hi this is ${name} and age is ${age}`)
    }
}
Person("Jayasurya")(23)