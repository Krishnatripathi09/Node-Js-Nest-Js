// when  we create a module  and import it using require("./Path") all the coed present in that module is wrapped
//inside a IIFE before execution
// If we directly run the script using node (module name).js then it is directly executed as a standAlone
//Script
(function () {})(); //an IIFE

//All the code of this mdoule will be wrapped in a IIFE like above then executed

//when our code start's execution it is first converted to AST(Abstarct syntax tree) then Ast is
// is given to ignition interpreter and as ignition interpreter start's code execution line by line
// and start's code into byte code and during this phase it also recognizes the code which
//is used a lot and then ignition interpreter gives that code to turbofan compiler
// so it can be compiled and optimized so that's why whenever it run's next time it runs
// very fast
