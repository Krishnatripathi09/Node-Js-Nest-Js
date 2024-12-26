const fs = require("fs");
const https = require("https");

console.log("Hi World");

var a = 10088;
var b = 120000;

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("fetched data successfully");
});

setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000);

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("File data : ", data);
});

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}
var c = multiplyFn(a, b);

console.log("Multipliacation result is:", c);
