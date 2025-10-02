function linear(arr,target){
for(let val of arr){
    if(val===target) return true
}
return false
}


function linearSearch(arr,target,i=0){
    if(i>arr.length) return -1
    if(arr[i]===target) return i

    return linearSearch(arr,target,i+1)
}

console.log(linear([1, 2, 3, 4, 5], 3)); // true
console.log(linearSearch([1, 2, 3, 4, 5], 6));