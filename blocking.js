const crypto = require("node:crypto");

console.log("Hi World");

var a = 10893678;
var b = 45678789;

crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("first key is Generated");

//crypto.pbkdf2 //password based key derivative function
// Async Function
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("second Key is generated");
});

setTimeout(() => {
  console.log("Call-Me after 3 seconds");
}, 3000);

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ", c);
