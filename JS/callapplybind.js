let obj = {
    name:"nobody",
    greet:function(location,age){
    console.log(`${this.name} from ${location} and age is ${age}`)
    }
}

let person = {
    name:"Jayasurya"
}
let person1 ={
    name:"Suryadas"
}

obj.greet.call(person,"kottayam",23)

obj.greet.apply(person1,["Alapuzha",23])

let p = obj.greet.bind(person,"neelamperoor",23)
p()