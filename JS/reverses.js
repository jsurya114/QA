function reverse(input){
    let word=""
    let result=""
    for(let i=0;i<input.length;i++){
        if(input[i]===" "||i===input.length){
            for(let j=word.length-1;j>=0;j--){
                result+=word[j]
            }
            result+=" "
            word=""
        }else{
            word+=input[i]
        }
    }
    for(let i=word.length-1;i>=0;i--){
        result+=word[i]
    }
    return result
}

console.log(reverse("hello world"))
