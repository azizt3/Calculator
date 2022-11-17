function add (a,b){
     addedNum = parseInt(a)+ parseInt(b)
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

function operate(){
    if (command === 'add'){
       result = add(a,b);
    } else if (command === 'subtract'){
       result = subtract(a,b);
    } else if (command === 'divide'){
        result =  divide(a,b);
    } else if (command === 'multiply') {
        result = multiply(a,b);
    }
    return result
}

const displayContent = document.querySelector('#screen');
var valuesA = []  // a = first number in operation
var valuesB = [] // b = second number in operation
var valuesC = []
var commandsArray=[]
var a = ''
var b = ''
var c = ''
var command = 'nothing'


const numberSelection = document.querySelectorAll(".number"); 

//iterate through each button under the number class

numberSelection.forEach((button) => {

    //for each button add a 'click' lister which shows the number clicked and stores it in a variable

    button.addEventListener('click', () =>{
        
        if (command === 'nothing'){
            valuesA.push(button.value)
            a = valuesA.reduce((previousValue, currentValue) => {return previousValue+currentValue});
            displayContent.textContent = `${a}`
        // need to figure out how to reset the variable when we are doing more than one operation in the calculator. 
        // Below statement will reset the variable, but when we continue adding another operator and number, it concatenates the previous variable    
        } else if (commandsArray.length >=2) {
            valuesC.push(button.value)
            c = valuesC.reduce((previousValue, currentValue) => {return previousValue+currentValue});
            b = c
            displayContent.textContent = `${b}`

        } else {
            valuesB.push(button.value);
            b = valuesB.reduce((previousValue, currentValue)=> {return previousValue+currentValue});
            displayContent.textContent=`${b}`
        }
        
    });
});

//exact same thing as above except assign the specific operation picked to command variable

const userCommand = document.querySelectorAll(".operation");

userCommand.forEach((operator) => {
    operator.addEventListener('click', () =>{

        if (commandsArray.length === 0) {
            commandsArray.push(operator.value)
            command = operator.value
        }
        else if (commandsArray.length > 0){
            commandsArray.push(operator.value)
            command = commandsArray[commandsArray.length - 2];
            a =  operate(command,a,b);
            displayContent.textContent=`${result}`;
        }
      
        console.log(command)
        console.log(commandsArray)
    });
});

// event listener evaluates the expression and then displays result on the screen
const operation = document.querySelector("#calculate");

operation.addEventListener('click', () => {
    var result = operate(command,a,b);
    displayContent.textContent=`${result}`
});

// event listener to clear the display and all variable assignments when pressed (reset)

const resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', () => {
    a = 0
    b = 0
    command = 'nothing'
    displayContent.textContent=`${0}`
});







