//runnning total that holds previous value keyed
let runningTotal = 0;
//presents what's on the screen at a given time-a string
let buffer = '0';
//previous operator clicked
let previousOperator;

//screen
const screen = document.querySelector('.current-operand');


//handle button clicks
function buttonClick(value) {
    if (isNaN(value)) {
        //this is not a number
    } else {
        //this is a number
    }

}


//function to hand symbols
function handleSymbols() {}



//function to handle numbers
function handleNumbers() {}


//init function
function init() {
    let buttons = document.querySelectorAll('.btn');
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            console.log(e.target.textContent)
            buttonClick(e.target.textContent)
        })
    })

}

init()