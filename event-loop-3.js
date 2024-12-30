const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate"));

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf-8", () => {
  setTimeout(() => console.log("2nd Timer"), 0);
  process.nextTick(() => console.log("Process NextTick-2"));
  setImmediate(() => console.log("setImmediate Inside File"));
  console.log("File Reading C8");
});

setTimeout(() => console.log("Timer expired"), 0);

process.nextTick(() => {
  console.log("Process NextTick-1");
});

function printA() {
  console.log("a =", a);
}

printA();
console.log("last line of the file:");

//commit remaining
