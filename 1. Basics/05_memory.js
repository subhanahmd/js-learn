// Two typs of memory Stack(primitive), Heap(non primitive)

let myName = "SubhanAhmad"
let anotherName = myName

anotherName = "Hassan"

console.log(myName);
console.log(anotherName);

let user1 = {
    email: "user@google.com",
    name: "user1"
}
let user2 = user1

user2.email = "Subhan@gmail.com";

console.log((user1));
console.log((user2));
