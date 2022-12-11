//runnning total that holds previous value keyed
let runningTotal = 0;
//presents what's on the screen at a given time-a string
let buffer = '0';
//previous operator clicked
let previousOperator;

//screen display
const screen = document.querySelector('.current-operand');


//function to handle symbols
function handleSymbols(symbol) {
    if (symbol === 'AC' || symbol === 'Delete' || symbol === 46) {
        buffer = '0';
        runningTotal = 0;
    } else if (symbol === 27 || symbol === 'Escape') {
        buffer = '0';
        runningTotal = 0;
    } else if (symbol === 'DEL' || symbol === 'Backspace' || symbol === 8) {
        if (buffer.length === 1) {
            buffer = '0';
        } else {
            buffer = buffer.slice(0, buffer.length - 1);
        }
    } else if (symbol === 'x' || symbol === '*' || symbol === 106) {
        handleMath(symbol);
    } else if (symbol === '+' || symbol === 107) {
        handleMath(symbol);
    } else if (symbol === '-' || symbol === 109) {
        handleMath(symbol)
    } else if (symbol === '/' || symbol === 111) {
        handleMath(symbol)
    } else if (symbol === '⋀') {
        handleMath(symbol)
    } else if (symbol === '=' || symbol === 187 || symbol === 'Enter') {
        if (previousOperator === null) {
            //When no operation is performed
            return;
        }
        flushOperation(parseInt(buffer))
        previousOperator = null;
        buffer = runningTotal;
        runningTotal = 0;

    } else {
        return;
    }
}

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

//handle math/calculations
function flushOperation(intBuffer) {
    if (previousOperator === 'x' || previousOperator === '*' || previousOperator === 106) {
        runningTotal *= intBuffer;
    } else if (previousOperator === '+' || previousOperator === 107) {
        runningTotal += intBuffer
    } else if (previousOperator === '-' || previousOperator === 109) {
        runningTotal -= intBuffer;
    } else if (previousOperator === '/' || previousOperator === 111) {
        runningTotal /= intBuffer;
    } else if (previousOperator === '%') {
        runningTotal = 0
    } else if (previousOperator === '⋀') {
        runningTotal **= intBuffer;
    } else {
        runningTotal = 0;
    }
    console.log(runningTotal)
}

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
    //checks if key pressed is a number
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
    //query for all calc buttons
    document.querySelectorAll('button').forEach((button) => {
        button.addEventListener('click', (e) => {
            let buttonText = e.target.textContent;
            //console.log(buttonText)
            buttonClick(buttonText)
        })

    });
    //listeners for all key events.
    document.addEventListener('keydown', (e) => {
        //keypress event called here
        keyPress(e.key)
        console.log(e.key)
    });
}


init()