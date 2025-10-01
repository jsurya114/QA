const user = {
  name: "Alice",
  address: {
    city: "Paris",
    zip: "75000"
  }
};

console.log(user.address?.location)
console.log(user.address.city)

const users = [{ name: "Bob" }, { name: "Carol" }];

console.log(users[0].name)

let name = users.map(n=>n.name)
users.forEach(n=>console.log(n.name))
console.log(name)

console.log(users[2]?.name)
