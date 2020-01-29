class Calculator {
    constructor(){
        this.loanAmount = null,
        this.years = null,
        this.interest = null,
        this.annualTax = null,
        this.annualInsurance = null,
        this.monthlyMortgagePayment = null,
        this.monthlyTaxPayment = null,
        this.monthlyInsurancePayment = null,
        this.monthlyTotal = null
    }
    setLoanAmount(number){
        this.loanAmount = parseInt(number);
    }
    setYears(number){
        this.years = parseInt(number);
    }
    setInterest(number){
        this.interest = parseInt(number);
    }
    setAnnualTax(number){
        this.annualTax = parseInt(number);
    }
    setAnnualInsurance(number){
        this.annualInsurance = parseInt(number);
    }
    calculateMortgage(obj){
        this.setLoanAmount(obj.loanAmount);
        this.setYears(obj.years);
        this.setInterest(obj.interestRate);
        this.setAnnualTax(obj.annualTax);
        this.setAnnualInsurance(obj.annualInsurance);
        this.monthlyMortgagePayment = (((this.interest/100) / 12)*this.loanAmount
        / (1-Math.pow((1 + ((this.interest / 100)/12)), 
        - this.years * 12))).toFixed(2);
        this.monthlyTaxPayment = (this.annualTax/12).toFixed(2);
        this.monthlyInsurancePayment = (this.annualInsurance/12).toFixed(2);
        this.monthlyTotal = (parseInt(this.monthlyMortgagePayment) + parseInt(this.monthlyTaxPayment) + parseInt(this.monthlyInsurancePayment)).toFixed(2);
    }
};

module.exports = Calculator;