let promise = new Promise((resolve,reject)=>{
    let success=true
    if(success) resolve("passed")
        else reject("failed")
       setTimeout(()=>{
     console.log("got output")
    },1000)
})

promise.then((msg)=>console.log(msg))
.catch((err)=>console.log(err))



//types of promises

let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
resolve("one")
    },200)
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
resolve("two")
    },100)
})
let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
reject("nan")
    },50)
})


Promise.all([p1, p2, p3])
  .then((results) => console.log(results)) // nan
  .catch((err) => console.log(err));

Promise.race([p1, p2])
  .then((result) => console.log(result)) // Two
  .catch((err) => console.log(err));


Promise.any([p1, p2, p3])
  .then((result) => console.log(result))//Two
  .catch((err) => console.log(err));

Promise.allSettled([p1, p2, p3])
  .then((results) => console.log(results));
//[
//   { status: 'fulfilled', value: 'one' },
//   { status: 'fulfilled', value: 'two' },
//   { status: 'rejected', reason: 'nan' }
// ]