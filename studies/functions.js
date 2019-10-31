/**
 * Functions
 * 
 * 0. A function is a block of code that is designed to perform a particular task.
 * A function is executed when it is called or invoked. Functions can save the programmer
 * time by not having to write the same code over and over again. Once a function has been
 * declared, it can be used over and over with different arguments passed to it. Functions 
 * are not executed immediately, they run only when called. 
 */

// 1. 2 Phases of Functions
function sum (a, b) {
    return a + b;
}

/*
 * 1st phase: You must define or declare your function. This consists of writing the keyword
 * function followed by the name of the function. After the name you enclose parameters in parentheses
 * seperated by commas. The function statement is followed inside curly brackets.
 * 2nd phase: For the function to do something it needs to be called or invoked. This is done by
 * writing the name of the function followed by arguments enclosd inside parantheses.
 */

console.log(sum(42, 33));       // prints 47

// 2. Difference between Parameters and Arguments
function difference(a, b){
    return a - b;
}

/*
 * Function parameters are the names listed in the function declaration. These are passed 
 * by reference.
 * Function arguments are the values being invoked into the function. These are passed by 
 * value.
 * Below, I am calling the function by its name 'difference', and I am
 * passing in arguments(values) for the function to evaluate             
 */

console.log(difference(33, 12));    // prints 21

// 3. Syntax for a Named Function
function name(param1, param2){
    return param1 + param2;
}
/*
 * Basic Syntax For Function Declaration:
 *              function name (parameter1, parameter2){
 *                   function statement;
 *               }
 * Basic Syntac for Calling a Function:
 *              name(argument1, argument2);   
 * Call or Invoke the function by writing the name of the function and filling
 * in the arguments
 */

name(1,3);      // returns 4

// 4. Assigning a Function to a Variable
var multiply2Nums = function (a, b) {return a * b};

/*
 * A function can also be defined using an expression.
 * A function expression can be stored in a variable.
 * After a function has been stored in a variable, the variable can be used as a function.
 */

var mathResults = multiply2Nums(140, 3);
console.log(mathResults);           // prints 420

// 5. Functions can optionally take inputs and optionally return a value.
function multiply(a, b){
    return a * b;
}
function wow(){
console.log('where\'d I go?')
}

/**
 * In JavaScript, function parameters default to undefined. However, it's often useful to set a different default value. 
 * This is where default parameters can help.If no value is provided for b when multiply is called, b's
 * value would be undefined when evaluating a * b and multiply would return NaN.
 * The same is true with a return value, you do not need to return a value. When you call that function
 * you will get undefined
 */
  
  console.log(multiply(5, 2));      // prints: 10
  console.log(multiply(5));         // prints: NaN
  console.log(wow);                 // prints: [Function: wow] 
  console.log(wow());               // prints: where'd I go?
                                    //         undefined


// 6. Scope
var globalVar = 'I am everywhere';
function attach(string){
    var localVar = ' but I am not';
    console.log(globalVar + localVar)
}

/*
 * Variables that are declared outside a function are called Global Scope and can be accessed anywhere.
 * Variables that are declared inside a function are local scope and can only be accessed within the function.
 * You should keep in mind where you declare your variables.
 */

attach();                   // prints 'I am everywhere but I am not'
console.log(globalVar);     // prints 'I am everywhere'
// console.log(localVar);      // prints Reference Error: localVar is not defined since it is not accessible outside the function sope

// 7. Closures

/*
 * Closures are a powerful tool in Javascript. Javascript allows the nesting of functions and grants the inner
 * function full access to all the variables and functions defined inside the outer function, and whatever variables
 * and functions the outer function has access to. The outer function does not have access to the variables and 
 * functions defined inside the inner function. 
 */

var nintendo = function (games){                    // outer function defines variable 'games'
    var names = function() {
        return games;                               // inner function has access to games variable of outer function
    }
    return names;                                   // return the inner function, exposing it to outer scopes
}
favoriteGame = nintendo('Mario Sunshine');          
console.log(favoriteGame());                         // prints 'Mario Sunshine'