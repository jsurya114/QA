function Outer(){
    let count =1
return function Inner(){
    console.log(count++)
}
}

const counter = Outer()
counter()
counter()