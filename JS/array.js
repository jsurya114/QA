
//add at the end
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]
let array =[1,2,3,4]
array[array.length]=5
let a =[6,7,8]
for(let i of a){                   
    array[array.length]=i
}
console.log(array)


//remove at the end
// [
//   1, 2, 3, 4,
//   5, 6, 7
// ]
// [ 1, 2, 3, 4, 5 ]
array.length=array.length-1
console.log(array)
let n=2
array.length=array.length-n
console.log(array) 


//add at the begining

for(let i=array.length;i>=0;i--){
    array[i]=array[i-1]
}
array[0]=0
console.log(array)

//remove from the end

for(let i=0;i<array.length-1;i++){
    array[i]=array[i+1]
}
array.length=array.length-1
console.log(array)


for(let  i=array.length-1;i>=3;i--){
    array[i-1]=array[i]
}
array[3]=4
console.log(array)