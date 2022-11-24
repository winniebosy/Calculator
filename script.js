//main container for calculator

//runs the whole application

//addtion
function addNums(value) {

}
//subtraction
function minusNums(value) {

}
//division
function divideNums(value) {

}
//multiplication
function multiplyNums(value) {

}




function init() {
    let calculator = document.querySelector('.calculator-app');
    calculator.addEventListener('click', (e) => {
        console.log(e.target.textContent)
    });
}

init();









// //addition
// let numInput = [1, 200, 5];

// //addition
// function addNumbers(a, b) {
//     return a + b;
// }
// const x = numInput.reduce(addNumbers)
//     //console.log(x)


// //subtraction
// function minusNumbers(a, b) {
//     return a - b;
// }
// const sub = numInput.reduce(minusNumbers)
//     // console.log(sub)

// //multiplication

// function multiplyNumbers(a, b) {
//     return a * b;
// }
// const times = numInput.reduce(multiplyNumbers)
//     // console.log(times)

// function divideNumbers(a, b) {
//     return (a / b).toFixed(5);
// }
// const divide = numInput.reduce(divideNumbers)
//     // console.log(divide)


// //functions to operate
// function operate(operator, num1, num2) {
//     switch (operator) {
//         case "+":
//             return addNumbers(num1, num2)
//         case "-":
//             return minusNumbers(num1, num2)
//         case "*":
//             return multiplyNumbers(num1, num2)
//         case "/":
//             return divideNumbers(num1, num2)
//     }

// }

// //number buttons
// let numberBtns = document.querySelectorAll('.btn-number')
// let operatorBtns = document.querySelectorAll('.btn-operator')
// let onBtn = document.querySelector('.btn-onn')
// let offBtn = document.querySelector('.btn-offf')
// let delBtn = document.querySelector('.btn-delete')
// let clearBtn = document.querySelector('.btn-ac')
// let storedValue = ' ';
// let currentOperand = document.querySelector('.current-operand')
// let previousOperand = document.querySelector('.previous-operand');
// let clickedOperator = ''
// let firstNumber = '';
// let result = '';

// currentOperand.textContent = 0;
// previousOperand.textContent;



// numberBtns.forEach((numBtn) => {
//     numBtn.addEventListener('click', (e) => {
//         storedValue += numBtn.value;
//         previousOperand.textContent += storedValue;
//         console.log(numBtn.value)
//     })
// })


// //resets the calculator
// clearBtn.addEventListener('click', (e) => {
//     location.reload();
// })

// //switches off the calcualator
// offBtn.addEventListener('click', (e) => {
//     numberBtns.forEach((numBtn) => {
//         numBtn.value = ' '
//         currentOperand.textContent = ' '
//     })
// })

// //switch on calculator
// onBtn.addEventListener('click', (e) => {
//     currentOperand.textContent = 0;
//     location.reload();
// })



// // https://stackoverflow.com/questions/63058457/calculator-project-stuck-javascript-reference