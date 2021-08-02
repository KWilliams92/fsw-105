const readline = require('readline-sync');

let firstNum = readline.questionInt("Please enter your first number: ");
let secNum = readline.questionInt("Please enter your second number: ");
let calcOp = readline.question("Please enter the operation to perform (add/sub/mul/div): ")

// addition
function addTwoNumbers(firstNum, secNum){
    return firstNum + secNum;
}
// subtraction
function subTwoNumbers(firstNum, secNum){
    return firstNum - secNum;
}
// multiplication
function mulTwoNumbers(firstNum, secNum){
    return firstNum * secNum;
}
// division
function divTwoNumbers(firstNum, secNum){
    return firstNum / secNum;
}

function myCalculator(firstNum, secNum, calcOp){
    if(calcOp == "add"){
        console.log("The result is: " + addTwoNumbers(firstNum, secNum));
    }
    else if(calcOp == "sub"){
        console.log("The result is: " + subTwoNumbers(firstNum, secNum));
    }
    else if(calcOp == "mul"){
        console.log("The result is: " + mulTwoNumbers(firstNum, secNum));
    }
    else if(calcOp == "div"){
        console.log("The result is: " + divTwoNumbers(firstNum, secNum));
    }
    else{
        console.log("Error!")
    }
}

myCalculator(firstNum, secNum, calcOp)