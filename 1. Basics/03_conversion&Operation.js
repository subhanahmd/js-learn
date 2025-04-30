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

// ****************** Operations ********************* //

let value = 3
let negvalue = -value
console.log(negvalue);

console.log(2**3); // power

let str1 = "hello"
let str2 = " Subhan"
let str3 = str1 + str2
console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122 (Converts whole to string)
console.log(1 + 2 + "2"); // 32

// if string firts whole will be converted to string

console.log(+true); //=> 1
console.log(+""); //=> 0
 
let num1, num2, num3

num1 = num2 = num3 = 2+2 //donot do this
