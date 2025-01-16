const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const power = (a, b) => a ** b;
const factorial = (value) => {
  product = 1;
  for (x = value; x > 0; x--) {
   product *= x;
  }
  return product;
};

let number1;
let number2 = 0;
let operator;
let sum = 0;

let calculation = [];





function operate() {
    console.log("number 1 before operation is: " + number1);
    console.log("number 2 before operation is: " + number2);
    if (operator == '+'){
        number2 = add(number2, number1)
    }
    if (operator == '-'){
        number2 = subtract(number2, number1)
    }
    if (operator == '*'){
        number2 = multiply(number2, number1)
    }
    if (operator == '/'){
        number2 = divide(number2, number1)
    }
    console.log(number2)
    sum = number2
    return Number(sum)
}


   

const buttonNumList = document.querySelectorAll('.num');   
const buttonOperatorList = document.querySelectorAll('.operator'); 


document.getElementById('button-equal').addEventListener('click', () => { 
    document.getElementById('calculator-display').textContent = operate(); 
}); 

buttonNumList.forEach(button => {
    document.getElementById(button.id).addEventListener('click', () => { 
        number1 = Number(document.getElementById(button.id).textContent);
        updateDisplay(button.id);
    });
});


//Operators Update
buttonOperatorList.forEach(button => {
    document.getElementById(button.id).addEventListener('click', () => { 
        operator = document.getElementById(button.id).textContent;
       
    }); 
    operate();
});


//AC Button
document.getElementById('button-AC').addEventListener('click', () => {
    document.getElementById('calculator-display').textContent = 0;
    number1 = 0;
    number2 = 0;
})



function updateDisplay(buttonPressed){

    console.log(buttonPressed)
    document.getElementById('calculator-display').textContent = document.getElementById(buttonPressed).textContent; 
    };

/*     document.getElementById('button-AC').addEventListener('click', test);
    document.getElementById('button-plusminus').addEventListener('click', test);
    document.getElementById('button-percentage').addEventListener('click', test);
    document.getElementById('button-divide').addEventListener('click', test);
    document.getElementById('button-7').addEventListener('click', test);
    document.getElementById('button-8').addEventListener('click', test);
    document.getElementById('button-9').addEventListener('click', test);
    document.getElementById('button-multiply').addEventListener('click', test);
    document.getElementById('button-4').addEventListener('click', test);
    document.getElementById('button-5').addEventListener('click', test);
    document.getElementById('button-6').addEventListener('click', test);
    document.getElementById('button-minus').addEventListener('click', test);
    document.getElementById('button-1').addEventListener('click', test);
    document.getElementById('button-2').addEventListener('click', test);
    document.getElementById('button-3').addEventListener('click', test);
    document.getElementById('button-plus').addEventListener('click', test);
    document.getElementById('button-0').addEventListener('click', test);
    document.getElementById('button-decimal').addEventListener('click', test);
    document.getElementById('button-equal').addEventListener('click', test);
 */
