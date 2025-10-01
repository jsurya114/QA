function binarysearchrecursion(arr,target,l=0,r=arr.length){
    if(l>r) return -1
    let mid = Math.floor((l+r)/2)
    if(arr[mid]===target) return mid
    else if(arr[mid]>target){
        return binarysearchrecursion(arr,target,l,mid-1)
    }else{
        return binarysearchrecursion(arr,target,mid+1,r)
    }
}

  const arr = [2, 4, 6, 8, 10, 12, 14];
  console.log(binarysearchrecursion(arr,10))
  console.log(binarysearchrecursion(arr,22))


  function binarysearch(arr,target){
    let l=0
    let r=arr.length-1

    while(l<=r){
            let mid=Math.floor((l+r)/2)
        if(arr[mid]===target) return mid
        else if(arr[mid]>target){
            r=mid-1
        }else{
            l=mid+1
        }
    }
    return -1
  }

console.log(binarysearch(arr,10))