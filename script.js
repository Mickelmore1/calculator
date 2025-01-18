const add = (a, b) => Number(b) + Number(a);
const subtract = (a, b) => Number(b) - Number(a);
const multiply = (a, b) => Number(b) * Number(a);
const divide = (a, b) => Number(b) / Number(a);
const power = (a, b) => Number(b) ** Number(a);
const factorial = (value) => {
  product = 1;
  for (x = value; x > 0; x--) {
   product *= x;
  }
  return product;
};


let calculator = {
    numberA: 0,
    numberB: 0,
    operator: undefined,
    display: 0,
}

const getCalculatorDisplay = document.getElementById('calculator-display');
getCalculatorDisplay.value = calculator.display;

function updateDisplayNumber(){
    const buttonNumList = document.querySelectorAll('.num');   
    buttonNumList.forEach(numButton => {
        numButton.addEventListener('click', () => {
            let displayNumber = calculator.numberA
            if(displayNumber.length == 9) { return }; // Stops calculator display overflowing
            if(calculator.numberA == 0){ calculator.numberA = ''}; 
            calculator.numberA += numButton.textContent;
            getCalculatorDisplay.value = calculator.numberA; 
        })     
    });
}

function updateOperator(){
    const buttonOperatorList = document.querySelectorAll('.operator');
    buttonOperatorList.forEach(operatorButtonPress => {
        operatorButtonPress.addEventListener('click', () => {
            operate(calculator.operator, calculator.numberA, calculator.numberB);
            calculator.operator = operatorButtonPress.textContent;
            calculator.numberB = calculator.numberA;
            calculator.numberA = '';
        })
    })
}

function pressEqual(){
    const equalButton = document.getElementById('button-equal')
    equalButton.addEventListener('click', () => {
        operate(calculator.operator, calculator.numberA, calculator.numberB); 
        calculator.operator = undefined;
    })
}

function operate(operator, numberA, numberB) {
    if (operator == '+') { calculator.numberA = add(numberA, numberB) };
    if (operator == '-') { calculator.numberA = subtract(numberA, numberB) };
    if (operator == '*') { calculator.numberA =  multiply(numberA, numberB) };
    if (operator == '/') { calculator.numberA = divide(numberA, numberB) };
        let finalResult = calculator.numberA;
        let finalResultRounded = Math.round(finalResult * 1000)/1000;
    if (finalResultRounded.toString().length > 9) {
        return getCalculatorDisplay.value = "Too big!" }
    else {
        return getCalculatorDisplay.value = finalResultRounded;
    }
}

function insertDecimalPoint(){
    const decimalPoint = document.getElementById('button-decimal');
    decimalPoint.addEventListener('click',() => {
        const decimalCheck = calculator.numberA;
        if (decimalCheck.includes('.')){ return; } //Checking whether the user has entered a deciaml point to prevent NaN error when calculating sum.
        calculator.numberA += decimalPoint.textContent;
        getCalculatorDisplay.value = calculator.numberA;
    })
}

function pressSignToggle(){
    const signToggle = document.getElementById('button-plusminus')
    signToggle.addEventListener('click', () => {
        let toggleCheck = String(calculator.numberA);
        if (toggleCheck.includes('-')){
            calculator.numberA = toggleCheck.slice(1);
            getCalculatorDisplay.value = calculator.numberA;
        } else {
        calculator.numberA = '-' + calculator.numberA;
        getCalculatorDisplay.value = calculator.numberA;
        }

    })
}

function pressAC(){
    const acButton = document.getElementById('button-AC')
    acButton.addEventListener('click', () => {
        calculator.numberA = 0;
        calculator.numberB = 0;
        calculator.operator = undefined;
        getCalculatorDisplay.value = calculator.numberA;
    })
}



updateDisplayNumber();
updateOperator();
pressEqual();
insertDecimalPoint();
pressSignToggle()
pressAC();