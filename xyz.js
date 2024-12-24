function calculateS(a, b) {
  console.log(a + b);
}
var x = 19;
module.exports = {
  calculateS: calculateS,
  x: x,
};

//To export multiple things in nodeJs we have to wrap it in a Object as key value pair as above
// by default node js uses commonJS modules so TO export any thing we have to use module.export =
// function which we want to export
