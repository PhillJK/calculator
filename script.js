const nums = document.querySelectorAll(".number");

const screen = document.querySelector(".screen");
screen.innerText = "0";


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
        result = num1 + num2;
    } else if(operator == "-") {
        result = num1 - num2;
    } else if(operator == "*") {
        result = num1 * num2;
    } else if(operator == "/") {
        result = num1 / num2;
    } else {
        result = 0;
    }
    return result;
}
