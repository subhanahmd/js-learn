//when you dont compare same data type

console.log("2" > 1); //true
console.log("02" > 1); //true

console.log(null > 0); //false
console.log(null == 0); //false (equality does not convert null to 0)
console.log(null >= 0); //true (comparison convert null to a number)

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined > 0); //false


//strict check "===" checks the datatype as well 
// does not convert

console.log("2" === 2 ); //false
