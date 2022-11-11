function operate(command, a, b){
    if (command = '+'){
        return add();
    } else if (command = '-'){
        return subtract();
    } else if (command = 'division'){
        return divide();
    } else(command = '*')
        return multiply();
    
}

function add(a,b){
    return (a+b);
}

function subtract(a,b){
    return(a-b);
}

function multiply (a,b){
    return (a*b);
}

function divide (a,b){
    return (a/b);
}

operate();

console.log(operate('-', 2,8));

