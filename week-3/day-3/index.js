const myTextField = document.getElementById("textField");

function updateInputField(data) {
    myTextField.value += data;
}

function evaluateExpression(data){
    const expression = myTextField.value;
    // check expresion for '+', '-', '/', '*'
    if ( expression.includes('+')) {
        const myExpressionArray = expression.split('+');
        myTextField.value = parseInt(myExpressionArray[0]) + parseInt(myExpressionArray[1]);
    } else if ( expression.includes('-')) {
        const myExpressionArray = expression.split('-');
        myTextField.value = parseInt(myExpressionArray[0]) - parseInt(myExpressionArray[1]);
    }
    
}
function clearDisplay () {
    myTextField.value = '';
}

// let num1 = null;
//         let num2 = null;
//         let opera = '';

//         const updateInputField = function(str){
//             document.getElementById("textField").value = str;
//         }

// if its a string store to opera
// if its a number && num1 === null store it to a variable num1, num2
//else store to num2





//onClick for button clicks


// select our variable 1 (numbers) place holder for test as non-number
//onClick define variable 1
//onChange will update innerHTML to the variable 1



// define variable 2 (operator)
// onClick define variable 2





// define variable 3 (number)
// onClick define variable
//onChange will update innerHTML to variable 3

//function to put variable together
// take var1 (var2) (var3)

// reset function 