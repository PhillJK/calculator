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
    if(screen.innerText == "Impossible") {
        screen.innerText = "0";
    }
    screen.innerText = screen.innerText.slice(0, -1);
    watchTheScreen();
});

function watchTheScreen() {
    if(screen.innerText == "" || screen.innerText == "NaN"){
        return screen.innerText = "0"
    } else {
        return screen.innerText;
    }
}


for(let operator of operators) {
    operator.addEventListener("click", function(event) {
        number1 = Number(Math.floor(screen.innerText));
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
    if(result == Infinity || result == -Infinity || Number.isNaN(result)) {
        return screen.innerText = "Impossible";
    }
    return result;
}

equalButton.addEventListener("click", function() {
    if(Number.isNaN(number1)) {
        number1 = 0;
    }
    number2 = Number(Math.floor(screen.innerText));
    screen.innerText = calculate(number1,number2,opt);
    watchTheScreen();
});
