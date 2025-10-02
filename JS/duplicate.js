let arr = [1, 2, 2, 3, 4, 4, 5, 3];

let freq={}
let newArr=[]
for(let val of arr){
    freq[val]=(freq[val]||0)+1
}
for(let key in freq){
    if(freq[key]>1){ //if equals to 1 it will show unique number
        newArr[newArr.length]=Number(key)
    }
}
console.log(newArr)



