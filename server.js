const express = require('express');
const Calculator = require('./lib/calculatorClass.js');

const mortgageCalculator = new Calculator;
const mortgageCalculatorApp = express();
const port = 8080;
// Sets up the Express app to handle data parsing
mortgageCalculatorApp.use(express.urlencoded({extended : true}));
mortgageCalculatorApp.use(express.json());

// Serve static content for the app from the "public" directory in the application directory.
mortgageCalculatorApp.use(express.static('public'));

mortgageCalculatorApp.listen(port,()=>{
    console.log('App listening on PORT ' + port);
});

//grabs data from user and calculates mortgage 
mortgageCalculatorApp.post('/', (request,response) => {
    console.log("inside POST");
    mortgageCalculator.calculateMortgage(request.body);
    response.json(mortgageCalculator);
    console.log(mortgageCalculator);
});