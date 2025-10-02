//shalow copy
let obj1 = {
  name: "Jayasurya",
  address: { city: "Alappuzha" }
}

let obj2 = {...obj1}
console.log(obj2)
console.log(obj1)
obj2.name="Suryadas"
obj2.address.city="Kottayam"
console.log(obj1)


//deep copy

let obj3 = JSON.parse(JSON.stringify(obj1))
console.log(obj3)

obj3.name = "nobody"
obj3.address.city = "Neelamperoor"
console.log(obj3)