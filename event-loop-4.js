const fs = require("fs");

setImmediate(() => console.log("setImmediate")); //6
setTimeout(() => console.log("Timer expired"), 0); //5

Promise.resolve("Promise").then(console.log); //4

fs.readFile("./file.txt", "utf-8", () => {
  console.log("File Reading CB"); //7
});

process.nextTick(() => {
  process.nextTick(() => console.log("Inner nextTick Inside Other")); //3
  console.log("Process NextTick"); //2
});

console.log("last line of the file:"); //1
//commit remaining