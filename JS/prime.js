function isPrime(n){
    if(n<2) return false
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0) return false
    }
    return true
}
let numbers =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let prime = numbers.filter(n=>!isPrime(n))


console.log(prime)

let p =[]

for(let val of numbers){
    if(isPrime(val)){
        p[p.length]=val
    }
}
console.log(p)
let sum =0 
for(let v  of p){
    sum+=v
}
console.log(sum)
