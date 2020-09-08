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
const operators = document.querySelectorAll('.operator');

let numberSilo = {
    firstNumber: [],
    secondNumber: []
};

clickable.forEach(function(btn){
    btn.addEventListener('click', function(){
        numberSilo.firstNumber.push(btn.textContent);
        console.log(numberSilo.firstNumber.join(''));
    });
  });


//find a way to call the four functions from one function here
operators.forEach(function(element){
    element.addEventListener('click', function(){
        numberSilo.firstNumber = Number(numberSilo.firstNumber.join(''));
    })
})