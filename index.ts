#! /usr/bin/env node
import inquirer from "inquirer";

const currency: any  = {

    USD: 1 , //Base currency
    PKR: 280,
    INR: 74.57,
    GBP: 0.76,
    AUD: 1.54,
    AWG: 1.80

};

let userAnswer = await inquirer.prompt(
    [
        {
            name: "from",
            message: "Enter from currency",
            type: "list",
            choices: ["USD" , "PKR" , "INR" , "GBP" , "AUD" , "AWG"]

        },

        {

             name: "to",
             message: "Enter to currency",
             type: "list",
            choices: ["USD" , "PKR" , "INR" , "GBP" , "AUD" , "AWG"]
        },
        
        {
            name: "amount",
            message: "Enter your amount",
            type:  "number"
        }
         
    ]
);

// let fromAmountCurrency = userAnswer.from
// let toAmountCurrency = userAnswer.to

let fromAmount = currency[userAnswer.from] //exchanre rate
let toAmount = currency[userAnswer.to]  // exchange rate
let amount = userAnswer.amount;
// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);
let base_amount = amount / fromAmount  // USD base currency
let converted_amount = base_amount * toAmount

console.log(converted_amount);
