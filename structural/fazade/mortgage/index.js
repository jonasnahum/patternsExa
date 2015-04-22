var mortgageFactory = require ("./mortgage"); 

var mortgage = mortgageFactory ("Jonas Nahum");

var result = mortgage.applyFor("$100,000");
     
console.log(result);

     