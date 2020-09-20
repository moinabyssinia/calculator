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
const dotButton = document.querySelector('.dot');
//operators
const operAdd = document.querySelector('.add');
const operSub = document.querySelector('.subtract');
const operMultiply = document.querySelector('.multiply');
const operDivide = document.querySelector('.divide');


//check if second number is coming
let time4SecondNumber = false;
//equal sign
const operEqual = document.querySelector('.result');
//display on screen
let numDisplay = document.querySelector('.screen');
//clear button
const operClear = document.querySelector('#clear');

//operated pair = firstNumber + secondNumber
let numberSilo = {
    operatedPair:0,
    firstNumber: [],
    secondNumber: [],
    operator:[]
};

clickable.forEach(function(btn){
    btn.addEventListener('click', function(){
        if (time4SecondNumber){
            //change firstNumber array to number
            numberSilo.secondNumber.push(btn.textContent);
            numDisplay.textContent = numDisplay.textContent + 
                numberSilo.secondNumber[numberSilo.secondNumber.length -1];
        } else {
            numberSilo.firstNumber.push(btn.textContent);
            numDisplay.textContent = numberSilo.firstNumber.join('');
            // console.log(numberSilo.firstNumber.join(''));
        }

    });
  });


//event listener for operators
operAdd.addEventListener('click', function(){
    if (!time4SecondNumber){
        //assign the first number to operatedPair
        numberSilo.operatedPair = Number(numberSilo.firstNumber.join(''));
        numDisplay.textContent = numDisplay.textContent + operAdd.textContent;
        numberSilo.operator = add;
        time4SecondNumber = true; 
    } else{
        numberSilo.secondNumber = Number(numberSilo.secondNumber.join(''));
        //show operator
        numDisplay.textContent = numDisplay.textContent + operAdd.textContent;        
        //save operated numbers into the firstNumber -> then display it
        numberSilo.operatedPair = operate(numberSilo.operator, numberSilo.operatedPair, 
            Number(numberSilo.secondNumber))
        console.log('operatedPair = ', numberSilo.operatedPair);
        //assign operator after getting operatedPair
        numberSilo.operator = add;
        //empty second number
        numberSilo.secondNumber = [];
        numberSilo.firstNumber = [];
    }
    
})
operSub.addEventListener('click', function(){
    if (!time4SecondNumber){
        //assign the first number to operatedPair
        numberSilo.operatedPair = Number(numberSilo.firstNumber.join(''));
        numDisplay.textContent = numDisplay.textContent + operSub.textContent;
        numberSilo.operator = subtract;
        time4SecondNumber = true;
    } else{
        numberSilo.secondNumber = Number(numberSilo.secondNumber.join(''));
        //show operator
        numDisplay.textContent = numDisplay.textContent + operSub.textContent;        
        //save operated numbers into the firstNumber -> then display it
        numberSilo.operatedPair = operate(numberSilo.operator, numberSilo.operatedPair, 
            Number(numberSilo.secondNumber))
        console.log('operatedPair = ', numberSilo.operatedPair);
        //assign operator after getting operatedPair
        numberSilo.operator = subtract;
        //empty second number
        numberSilo.secondNumber = [];
        numberSilo.firstNumber = [];
    }
    
})
operMultiply.addEventListener('click', function(){
    if (!time4SecondNumber){
        //assign the first number to operatedPair
        numberSilo.operatedPair = Number(numberSilo.firstNumber.join(''));
        numDisplay.textContent = numDisplay.textContent + operMultiply.textContent;
        numberSilo.operator = multiply;
        time4SecondNumber = true;
    } else{
        numberSilo.secondNumber = Number(numberSilo.secondNumber.join(''));
        //show operator
        numDisplay.textContent = numDisplay.textContent + operMultiply.textContent;        
        //save operated numbers into the firstNumber -> then display it
        numberSilo.operatedPair = operate(numberSilo.operator, numberSilo.operatedPair, 
            Number(numberSilo.secondNumber))
        console.log('operatedPair = ', numberSilo.operatedPair);
        //assign operator after getting operatedPair
        numberSilo.operator = multiply;
        //empty second number
        numberSilo.secondNumber = [];
        numberSilo.firstNumber = [];
    }
    
})
operDivide.addEventListener('click', function(){
    if (!time4SecondNumber){
        //assign the first number to operatedPair
        numberSilo.operatedPair = Number(numberSilo.firstNumber.join(''));
        numDisplay.textContent = numDisplay.textContent + operDivide.textContent;
        numberSilo.operator = divide;
        time4SecondNumber = true;
    } else{
        numberSilo.secondNumber = Number(numberSilo.secondNumber.join(''));
        //show operator
        numDisplay.textContent = numDisplay.textContent + operDivide.textContent;        
        //save operated numbers into the firstNumber -> then display it
        numberSilo.operatedPair = operate(numberSilo.operator, numberSilo.operatedPair, 
            Number(numberSilo.secondNumber))
        console.log('operatedPair = ', numberSilo.operatedPair);
        //assign operator after getting operatedPair
        numberSilo.operator = divide;
        //empty second number
        numberSilo.secondNumber = [];
        numberSilo.firstNumber = [];
    }
    
})

//event listener for equal sign
operEqual.addEventListener('click', function(){
    numberSilo.secondNumber = Number(numberSilo.secondNumber.join(''));
    numberSilo.operatedPair = operate(numberSilo.operator, numberSilo.operatedPair, 
            Number(numberSilo.secondNumber))
    console.log('final result = ',numberSilo.operatedPair);
    numDisplay.textContent = numberSilo.operatedPair;
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
