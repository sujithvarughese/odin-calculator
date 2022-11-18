
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide =(x, y) => x / y;


    // get numbers, clear, and +/- elements
const numbers = document.querySelector("[class~='numbers-grid']");
const operators = document.querySelector("[class~='operations-grid']");

function getX() {
    let xEntered = false;
    while (!xEntered) {
        numbers.forEach(element => {
            element.addEventListener("click", () => {
                operation.updateOperation(element.id);
                xEntered = true;
            })
        })
    }
    let opEntered = false;
    if (xEntered) {
        while (!opEntered) {
            operators.forEach(element => {
                element.addEventListener("click", () => {
                    operation.updateOperation(element.id);
                    opEntered = true;
                    removeEventListener("click", getX);
                    opEntered = true;
                })
            })
        }
    }
    let yEntered = false;
    if (opEntered) {
        while (!yEntered) {
            numbers.forEach(element => {
                element.addEventListener("click", () => {
                    operation.updateOperation(element.id);
                    yEntered = true;
                })
            })
        }
    }
    removeEventListener("click", numbers.forEach());
    removeEventListener("click", operators.forEach());

    let eqEntered = false;
    while (!eqEntered) {
        const equals = document.getElementById('equals');
        equals.addEventListener("click" , operation.calculate());

    }
}

function getOperator() {
    operators.forEach(element => {
        element.addEventListener("click", () => {
            operation.updateOperation(element.id);
            removeEventListener("click", getOperator);
        })
    })
}

const operation = {
    currentCalc : '',

        // appends current pressed number into string
    updateOperation: function(numberPress) {
        this.currentCalc = this.currentCalc.concat(numberPress);
    }
    calculate: function () {

    }
}

function recordButtonPress(buttonID) {

}

    // take two numbers and call one of above functions
function operate(x, y) {

}

function main() {
    getX();
}