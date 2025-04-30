let score = "33aabc"

console.log(typeof score);
console.log(typeof (score));

//convert to number
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//score = 33  out = 33
//score == "3abcc"  out = NaN(not a number)
//score == "Null"  out = 0
//score = "true"  out = 1



//convert to bolean
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true, 0 => false
// "" => false
//"Subhan" => true


//convert to string 
let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);

//33 => "33"
 
