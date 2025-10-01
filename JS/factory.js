function Factory(name,age){
    return {
        name:name,
        age:age,
        greet:function(){
            console.log(`${name} and ${age}`)
        }
    }
}

const user1 = new Factory("jayasurya",23)
const user2 = new Factory("nobody",22)

user1.greet()
user2.greet()
