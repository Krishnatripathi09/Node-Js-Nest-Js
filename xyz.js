// when  we create a module  and import it using require("./Path") all the coed present in that module is wrapped
//inside a IIFE before execution
// If we directly run the script using node (module name).js then it is directly executed as a standAlone
//Script
(function () {})(); //an IIFE

//All the code of this mdoule will be wrapped in a IIFE like above then executed
