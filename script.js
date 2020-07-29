const nums = document.querySelectorAll(".number");

const screen = document.querySelector(".screen");
screen.innerText = "0";

const operators = document.querySelectorAll(".operator");

const equalButton = document.querySelector(".equal");

const clearButton = document.querySelector(".clear")

const backspaceButton = document.querySelector(".backspace")

let number1;
let number2;
let opt;

clearButton.addEventListener("click", function() {
    number1 = "";
    number2 = "";
    opt = "";
    screen.innerText = "0"
});

backspaceButton.addEventListener("click", function() {
    if(screen.innerText != "") {
        screen.innerText = screen.innerText.slice(0,-1);
    } else {
        screen.innerText = "0"; 
    }
});


for(let operator of operators) {
    operator.addEventListener("click", function(event) {
        number1 = screen.innerText;
        screen.innerText = "0";
        opt = event.target.innerText;
    });
}

for(let num of nums) {
    num.addEventListener("click", function(event) {
        if (screen.innerText == "0") {
            screen.innerText = event.target.innerText;
        } else {
            screen.innerText += event.target.innerText;
        }
    });
}

function calculate(num1,num2,operator) {
    let result;
    if(operator == "+") {
        result = parseInt(num1) + parseInt(num2);
    } else if(operator == "-") {
        result = parseInt(num1) - parseInt(num2);
    } else if(operator == "*") {
        result = parseInt(num1) * parseInt(num2);
    } else if(operator == "/") {
        result = parseInt(num1) / parseInt(num2);
    } else {
        result = 0;
    }
    return result;
}

equalButton.addEventListener("click", function() {
    number2 = screen.innerText;
    screen.innerText = calculate(number1,number2,opt);
});
