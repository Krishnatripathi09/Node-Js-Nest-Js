function calculateSum(a, b) {
  console.log(a + b);
}

module.exports = {
  calculateSum,
};
// module.exports.x = x;
// module.exports.calculateS = calculateS;

//TO export something using ES6 module we write export in front of module as we are exporting as named module
//we can also do export deafult (modulename) to export the module as default export
//To use ES6 modules we need to create a package.json file in that we have to give the type of our module
//as module {type:module/commonJs} as earlier we were using Common-JS
