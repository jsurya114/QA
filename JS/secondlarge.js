let arr =[1,2,3,4,4]

let secondlarge = arr.reduce((acc,curr)=>{
    if(curr>acc.max){
        acc.second = acc.max
        acc.max=curr
    }else if(curr>acc.second&&curr!==acc.max){
        acc.second=curr
    }
    return acc
},{max:-Infinity,second:-Infinity})

console.log(secondlarge.second)