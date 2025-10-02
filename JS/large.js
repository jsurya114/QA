function Large(arr){
    let max=-Infinity
    let p =[]
    for(let val of arr){
        if(val>max){
            max=val
        }
    }
for(let val of arr){
    if(max!==val){
        p.push(val)
    }
}
return p
}
console.log(Large([1,2,3,4,4]))


//secondlargest

function Secondlargest(array){
    let max =-Infinity
    let second =-Infinity
    let p =[]
    for(let val of array){
        if(val>max){
            second=max
            max=val
        }else if(val>second&&val!==max){
            second=max
        }
    }
    return second

}
console.log(Secondlargest([1,2,3,4,4]))