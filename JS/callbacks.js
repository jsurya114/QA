//callback
function Say(){
    console.log('Hey my name is jayasurya')
}

function Greet(name){
   name()
}

Greet(Say)



//callback hell
setTimeout(()=>{
    console.log('log1')
    setTimeout(()=>{
        console.log("log2")
 setTimeout(()=>{
console.log('log3')
 },1000)
    },1000)
},1000)