function Construtor(name,age){
    this.name=name,
    this.age=age
    this.greet=function(location){
        console.log(`${this.name} and ${this.age} and ${location}`)
    }
}

let user1=new Construtor("jayasurya",23,)
let user2 = new Construtor("nobody",22)

user1.greet("kottayam")
user2.greet("unknown")