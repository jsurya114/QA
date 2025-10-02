let sum = (n,m)=>n+m
console.log(sum(3,9))

let sum1 = (nums)=>nums.filter(n=>n%2!==0).reduce((acc,curr)=>acc+curr,0)

console.log(sum1([1,2,3,4,5]))


let num = (...n)=>n.reduce((acc,num)=>acc+num,0)
console.log(num(1,2,3))
