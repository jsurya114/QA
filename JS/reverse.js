let arr = [1,2,3,4,5]
let p =[]
for(let i=arr.length-1;i>=0;i--){
    p.push(arr[i])
}
console.log(p)


//without extra array
let n=arr.length
for(let i=0;i<(n/2);i++){
    let temp = arr[i]
    arr[i]=arr[n-1-i]
    arr[n-1-i]=temp
}

console.log(arr)