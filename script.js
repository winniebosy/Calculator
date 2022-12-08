//runnning total that holds previous value keyed
let runningTotal = 0;
//presents what's on the screen at a given time-a string
let buffer = '0';
//previous operator clicked
let previousOperator;

//screen display
const screen = document.querySelector('.current-operand');
// let buttons

//

//CONTINUE FROM HERE!!
//function to handle symbols
function handleSymbols(symbol) {
    if (symbol === 'AC') {
        buffer = '0';
        runningTotal = 0;
    } else if (symbol === 27 || symbol === 'Escape') {
        buffer = '0';
        runningTotal = 0;

    } else if


}

// switch (symbol) {
//     case 'AC':
//         if (e.key === 27 || e.key === 'Escape')
//             buffer = '0';
//         runningTotal = 0;
//         break;
//     case 'DEL':
//         if (buffer.length === 1) {
//             buffer = '0';
//         } else {
//             buffer = buffer.slice(0, buffer.length - 1);
//         }
//         break;
//     case '✕':
//     case '+':

//     case '-':
//     case '/':
//     case '%':
//     case '⋀':
//         handleMath(symbol);
//         break;

// }



//handling running totals
function handleMath(symbol) {
    console.log('handleMath', symbol)
    if (buffer === '0') {
        //do nothing
        return;
    }
    //turn buffer to number
    const intBuffer = parseInt(buffer);
    if (runningTotal === 0) {
        //keeps track of the previous operation
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer)
    }
    //keep track of previous operator for operating more than two numbers
    previousOperator = symbol;
    buffer = '0';
}

//handle math

function flushOperation(intBuffer) {
    if (previousOperator === '✕') {
        runningTotal *= intBuffer;
        //console.log(runningTotal)
    } else if (previousOperator === '+') {
        runningTotal += intBuffer
            //console.log(runningTotal)
    } else if (previousOperator === '-') {
        runningTotal -= intBuffer;
        //console.log(runningTotal)
    } else if (previousOperator === '/') {
        runningTotal /= intBuffer;
        //console.log(runningTotal)
    } else if (previousOperator === '%') {
        runningTotal = 0
            // console.log(runningTotal)
    } else if (previousOperator === '⋀') {
        runningTotal **= intBuffer;
        // console.log(runningTotal)
    } else {
        runningTotal = 0;
        // console.log(runningTotal)
    }

}
//keyboard handlers for numbers




//function to handle numbers
function handleNumbers(numberString) {
    //numbers but still in string from
    if (buffer === '0') {

        buffer = numberString;
    } else {
        buffer = buffer + numberString;
    }
}

//function handle keyboard keys
function keyPress(value) {
    if (isFinite(value)) {
        handleNumbers(value)
    } else {
        handleSymbols(value)
    }
    screen.textContent = buffer;
}



//handle button clicks
function buttonClick(value) {
    if (!isNaN(value)) {
        handleNumbers(value)
    } else {
        handleSymbols(value)
    }
    screen.textContent = buffer;
}

//init function
function init() {
    document.querySelectorAll('button').forEach((button) => {
        button.addEventListener('click', (e) => {
            let buttonText = e.target.textContent;
            //console.log(buttonText)
            buttonClick(buttonText)
        })

    });

    document.addEventListener('keydown', (e) => {
        keyPress(e.key)
        console.log(e.key)

    });

}


init()