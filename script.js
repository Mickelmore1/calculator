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


 

function updateDisplay(){
    const buttonNumList = document.querySelectorAll('.num');   
    buttonNumList.forEach(numButton => {
        numButton.addEventListener('click', () => {

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
            calculator.numberA = 0;
        })
    })
}

function pressEqual(){
    const equalButton = document.getElementById('button-equal')
    equalButton.addEventListener('click', () => {
        console.log(calculator);
        operate(calculator.operator, calculator.numberA, calculator.numberB); 
        calculator.operator = undefined;
    })
}

function operate(operator, numberA, numberB) {
    console.log(operator);
    console.log(numberA);
    console.log(numberB);
    if (operator == '+') { calculator.numberA = add(numberA, numberB) };
    if (operator == '-') { calculator.numberA = subtract(numberA, numberB) };
    if (operator == '*') { calculator.numberA =  multiply(numberA, numberB) };
    if (operator == '/') { calculator.numberA = divide(numberA, numberB) };
    return getCalculatorDisplay.value = calculator.numberA;
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



updateDisplay();
updateOperator();
pressEqual();
pressAC();