const accountId = 144553;
let accountEmail = "subhan@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur"; // Not good
let accountState;
// accountId = 2; cannot change

accountEmail = "hello@gmail.com";
accountPassword = "21212121";
accountCity = "Lahore";

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var because of issue in Block Scope and functional scope
*/