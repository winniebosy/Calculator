//addition
let numInput = [1, 200, 5];

//addition
function addNumbers(a, b) {
    return a + b;
}
const x = numInput.reduce(addNumbers)
    //console.log(x)


//subtraction
function minusNumbers(a, b) {
    return a - b;
}
const sub = numInput.reduce(minusNumbers)
    // console.log(sub)

//multiplication

function multiplyNumbers(a, b) {
    return a * b;
}
const times = numInput.reduce(multiplyNumbers)
    // console.log(times)

function divideNumbers(a, b) {
    return (a / b).toFixed(5);
}
const divide = numInput.reduce(divideNumbers)
    // console.log(divide)

//function operate
function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return addNumbers(num1, num2)
        case "-":
            return minusNumbers(num1, num2)
        case "*":
            return multiplyNumbers(num1, num2)
        case "/":
            return divideNumbers(num1, num2)
    }

}