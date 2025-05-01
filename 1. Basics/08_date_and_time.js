let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(typeof myDate); // OBJECT

let myCreatedDate = new Date(2023,0,23,5,3)// month 0 se start hote
console.log(myCreatedDate.toLocaleString());

let myCreatedDate2 = new Date("2023-01-14")// different type
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("01-14-2023")// diff type
console.log(myCreatedDate3.toLocaleString());

//TIME

let myTimeStamp = Date.now()//milisecond from 1970

console.log(myTimeStamp);
console.log(myCreatedDate3.getTime());
console.log(Math.floor(Date.now()/1000));//in seconds

//More date

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

console.log(newDate.toLocaleString('default',{weekday: "long"}))// Thursday