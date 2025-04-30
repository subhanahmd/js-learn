const score = 400
console.log(score);// 400

const balance = new Number(100); // browser ke console pr dal ke check kro
console.log(balance);// [Number: 100]

console.log(balance.toString());// "100"
console.log(balance.toString().length);// 3

console.log(balance.toFixed(2));// 100.00 (decimal places)

const num1 = 123.12239

console.log(num1.toPrecision(4));//123.1
console.log(num1.toPrecision(3));//123
console.log(num1.toPrecision(2));//1.2e+2

const num2 = 1000000

console.log(num2.toLocaleString()); // 1,000,000

//=========================== Maths ===========================

console.log(Math);// browser pr dekh lein

console.log(Math.abs(-4)); //4
console.log(Math.round(53.3653)); //53
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.2)); //4
console.log(Math.min(4,3,6,8)); //3
console.log(Math.max(4,3,6,8)); //8

console.log(Math.random()); //always between 0 and 1
console.log(Math.floor((Math.random()*10) + 1));// value in between 1-10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * ( max - min + 1 ) + min))// between 10-20

// many other functions




