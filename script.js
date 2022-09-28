//addition
let numInput = [1, 200];

function addNumbers(total, num) {
    return total + num;
}
const x = numInput.reduce(addNumbers)
console.log(x)


//subtraction
function minusNumbers(total, num) {
    return total - num;
}
const sub = numInput.reduce(minusNumbers)
console.log(sub)

//multiplication

function multiplyNumbers(total, num) {
    return total * num;
}
const times = numInput.reduce(multiplyNumbers)
console.log(times)

function divideNumbers(total, num) {
    return (total / num).toFixed(5);
}
const divide = numInput.reduce(divideNumbers)
console.log(divide)