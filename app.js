function add (a,b){
     addedNum = a+b
     return addedNum
}

function subtract(a,b){
    minusedNum = a-b;
    return minusedNum
}

function multiply (a,b){
    multipliedNum = (a*b);
    return multipliedNum
}

function divide (a,b){
    dividedNum = (a/b);
    return dividedNum
}

function operate(command, a, b){
    if (command === '+'){
       result = add(a,b);
    } else if (command === '-'){
       result = subtract(a,b);
    } else if (command === '/'){
        result =  divide(a,b);
    } else if (command === '*') {
        result = multiply(a,b);
    }
    return result
}



