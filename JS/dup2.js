//using higher order function

//remove duplicates
let arr = [1, 2, 2, 3, 4, 4, 5, 3];
console.log("array",arr)

let dup = arr.reduce((acc,curr)=>{
    if(acc.indexOf(curr)===-1){
        acc[acc.length]=curr
    }
    return acc
},[])
console.log("remove duplicates",dup)

//unique numbers
let dups = arr.reduce((acc,curr)=>{
    acc[curr]=(acc[curr]||0)+1
    return acc
},{})
let key = Object.keys(dups).reduce((acc,curr)=>{
    if(dups[curr]===1){
        acc[acc.length]=Number(curr)
    }
    return acc
},[])
console.log("unique",key)