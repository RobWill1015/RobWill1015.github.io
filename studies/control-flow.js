/**
 * Control Flow
 * 
 * 0. Control flow is the order that the intructions or statements or functions
 * are executed. In Javascript, we read the code starting from the first line till
 * the last line unless there is some instruction or statement that changes the 
 * control flow, such as conditionals and loops.
 */

// 1. if statement
var myAge = 37;
var fianceAge = 42;

// The if statement us used to specify whether a condition is true

if (myAge < fianceAge) {
    console.log("She's old!");
}                               // prints 'She's old!'


// 2. Else statement
var age = 15;

/*
 * The if...else statement is the next form of control statement that allows Javascript
 * to execute statements in a more controlled way.
 * In this example, the expression is evaluated and if it results to true, the given 
 * statement in the 'if' bloack is executed. If the expression is false, the given
 * statement in the 'else' block is is executed.
 */

if (age > 18) {                     // this is false so it will execute the else statement
    console.log('You can vote!');
} else {
    console.log('You cannot vote yet.')     // prints 'You cannot vote yet.'
}


// 3. Else-If Statement
var time = 21;

// use the else if statement to specify a new condition if the first condition is false

if (time < 11) {                        // false
    console.log("Good Morning!");
} else if (time < 16) {                 // false
    console.log('Good Afternoon!');
} else if (time < 20) {                 // false
    console.log("Good Evening!");
} else {                                // true prints 'Good Night!'
    console.log("Good Night!")
}

// 4. Switch Statement
var games = "mario";

/*
 * Use the switch statement to select one of many code blocks to be executed.
 * The switch statment is evaluated. The value of the expression is compared with 
 * values of each case. If there is a match, the associated block of code is execute.
 * If no cases match, the default code block will execute.
 */

switch (games) {
    case 'sonic':
        console.log('sega');
        break;
    case 'halo':
        console.log('microsoft');
        break;
    case 'pong':
        console.log('atari');
        break;
    case 'mario':
        console.log('nintendo');
        break;
    default:
        console.log('game not recognized');
        break;
}
// prints 'nintendo'