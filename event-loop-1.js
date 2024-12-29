const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate"));

fs.readFile("./file.txt", "utf-8", () => {
  console.log("File Reading C8");
});

setTimeout(() => console.log("Timer expired"), 0);

function printA() {
  console.log("a =", a);
}

printA();
console.log("last line of the file:");


