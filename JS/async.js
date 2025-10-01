// let p = Promise.resolve("hello")                  
// async function name() {
//     return p
// }

// async function Greet() {
//     return "hello"
// }

// Greet().then((msg)=>console.log(msg))


let prom = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("try to enter")
        resolve("key")
    },1000)
})

async function Promises(){
  try {
      console.log("entering")
let data = await prom
console.log(data)
console.log("entered")
  } catch (error) {
    console.log(error)
  }
}
Promises()





//fetchData
// async function  fetchData() {
//     let res = await fetch("https://www.programiz.com/javascript/online-compiler/")
//     let data = await res
//     console.log(data)
// }

// fetchData()