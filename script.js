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


let numberSilo = {
    firstNumber: [],
    secondNumber: [],
    operator:[]
};

clickable.forEach(function(btn){
    btn.addEventListener('click', function(){
        if (time4SecondNumber){
            numberSilo.secondNumber.push(btn.textContent);
        } else {
            numberSilo.firstNumber.push(btn.textContent);
            console.log(numberSilo.firstNumber.join(''));
        }

    });
  });


//event listener for operators
operAdd.addEventListener('click', function(){
    numberSilo.firstNumber = Number(numberSilo.firstNumber.join(''));
    numberSilo.operator = 'add';
    time4SecondNumber = true; 
})
operSub.addEventListener('click', function(){
    numberSilo.firstNumber = Number(numberSilo.firstNumber.join(''));
    numberSilo.operator = 'subtract';
    time4SecondNumber = true;
})
operMultiply.addEventListener('click', function(){
    numberSilo.firstNumber = Number(numberSilo.firstNumber.join(''));
    numberSilo.operator = 'multiply';
    time4SecondNumber = true;
})
operDivide.addEventListener('click', function(){
    numberSilo.firstNumber = Number(numberSilo.firstNumber.join(''));
    numberSilo.operator = 'divide';
    time4SecondNumber = true;
})

//event listener for equal sign
operEqual.addEventListener('click', function(){
    numberSilo.secondNumber = Number(numberSilo.secondNumber.join(''));
})