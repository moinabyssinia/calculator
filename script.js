const add = function(a,b){
    return a+b;
}
const subtract = function(a,b){
    return a-b;
}
const multiply = function(a,b){
    return a*b;
}
const divide = function(a,b){
    return a/b;
}

const operate = function(operator, a, b){
    return operator(a,b);
}

//add listener for buttons
const clickable = document.querySelectorAll('.num');
//operators
const operAdd = document.querySelectorAll('.operator-add')[0];
const operSub = document.querySelectorAll('.operator-subtract')[0];
const operMultiply = document.querySelectorAll('.operator-multiply')[0];
const operDivide = document.querySelectorAll('.operator-divide')[0];
//check if second number is coming
let time4SecondNumber = false;
//equal sign
const operEqual = document.querySelector('.result');
//display on screen
let numDisplay = document.querySelector('.screen');
//clear button
const operClear = document.querySelector('#clear');


let numberSilo = {
    firstNumber: [],
    secondNumber: [],
    operator:[]
};

clickable.forEach(function(btn){
    btn.addEventListener('click', function(){
        if (time4SecondNumber){
            numberSilo.secondNumber.push(btn.textContent);
            numDisplay.textContent = numDisplay.textContent + 
                numberSilo.secondNumber[numberSilo.secondNumber.length -1];
            numberSilo.secondNumber = Number(numberSilo.secondNumber.join(''));
            //concatenate array to form a real number
            numberSilo.firstNumber = Number(numberSilo.firstNumber.join(''));
            //save operated numbers into the firstNumber -> then display it
            numberSilo.firstNumber = operate(numberSilo.operator, Number(numberSilo.firstNumber), 
                Number(numberSilo.secondNumber))
            //empty second number
            numberSilo.secondNumber = [];
        } else {
            numberSilo.firstNumber.push(btn.textContent);
            numDisplay.textContent = numberSilo.firstNumber.join('');
            // console.log(numberSilo.firstNumber.join(''));
        }

    });
  });


//event listener for operators
operAdd.addEventListener('click', function(){
    // numberSilo.firstNumber = Number(numberSilo.firstNumber.join(''));
    numDisplay.textContent = numDisplay.textContent + operAdd.textContent;
    numberSilo.operator = add;
    time4SecondNumber = true; 
})
operSub.addEventListener('click', function(){
    // numberSilo.firstNumber = Number(numberSilo.firstNumber.join(''));
    numDisplay.textContent = numDisplay.textContent + operSub.textContent;
    numberSilo.operator = subtract;
    time4SecondNumber = true;
})
operMultiply.addEventListener('click', function(){
    // numberSilo.firstNumber = Number(numberSilo.firstNumber.join(''));
    numDisplay.textContent = numDisplay.textContent + operMultiply.textContent;
    numberSilo.operator = multiply;
    time4SecondNumber = true;
})
operDivide.addEventListener('click', function(){
    // numberSilo.firstNumber = Number(numberSilo.firstNumber.join(''));
    numDisplay.textContent = numDisplay.textContent + operDivide.textContent;
    numberSilo.operator = divide;
    time4SecondNumber = true;
})

//event listener for equal sign
operEqual.addEventListener('click', function(){
    // numberSilo.secondNumber = Number(numberSilo.secondNumber.join(''));
    console.log(numberSilo.firstNumber);
    numDisplay.textContent = numberSilo.firstNumber;
})

//make clear button work
operClear.addEventListener('click', function(){
    numberSilo.firstNumber = [];
    numberSilo.secondNumber = [];
    numberSilo.operator = [];
    time4SecondNumber = false
    numDisplay.textContent = '0.0';
})

//working on part 6
//there is issue with multi digit numbers - fix the clickable event listener function
