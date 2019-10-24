/** 
 * Data Types
 * 
 * 0. Data types are types of data that can be used and manipulated in a program.
 * Javascript variables can hold many data types: numbers, strings, objects, boolean,
 * array, function, undefined, null, NaN, infinity and -infinity.
 * As well as primitive/simple and complex.
 * Data types define particular characteristics of data used in software programs and
 * inform the compilers about predefined attributes required by specific variables or 
 * associtated data objects.
 */

// 1. Numbers
var myNumber = 42;

/* 
 * numbers represent numeric values.
 * they can be written with or without decimals.
 */

console.log(myNumber);      // prints 42

// 2. String
var dartTeam = 'Cereal Killers';

/*
 * A string is a series of characters. Strings are written with quotes.
 * You can use single or double quotes.
 * Each element in the string occupies a position in the string.
 * The first element is at index 0, the next at index 1, and so on.
 * The length of the string is the number of elements in it.
 */

console.log(dartTeam);          // prints 'Cereal Killers'
console.log(dartTeam.length);   // prints 14

// 3. Boolean
var isDartCaptain = true;

/*
 * Booleans can have 2 values: true or false
 */

console.log(isDartCaptain);     // prints 'true'

// 4. Array
var dartGames = ['301', 'Shanghai', 'Cricket', 'Baseball', 'Halve-It'];

/*
 * Arrays are a single variable that stores multiple elements.
 * Arrays are written with square brackets
 * Arrays items are seperated by commas
 * All indexes are zero-based, which means the first item is [0], second is [1]...
 */

console.log(dartGames);
// prints [ '301', 'Shanghai', 'Cricket', 'Baseball', 'Halve-It' ]

// 5. Object
var dartTeam = {
  player1: 'Robert',
  player2: 'RayRay',
  player3: 'Darryl',
  player4: 'Lara'
};

/*
 * Objects are non-primitive data types.
 * Each object may contain any combination of primitive data types as well
 * as reference data types.
 * Objects may be defined as an unordered collection of related data, of
 * primitive or reference types, in the form of 'key:value' pairs.
 * Objects are created with curly brackets with an optional list of properties.
 */

console.log(dartTeam);
/*
 * prints  { player1: 'Robert',
             player2: 'RayRay',
             player3: 'Darryl',
             player4: 'Lara' }
 */

// 6. Function
function sum(a, b){
    return a + b;
}

/* 
 * Functions represent a block of code designed to perform a particular task, 
 * once or multiple times.
 * A function is executed when it gets called or invoked.
 * Basic Syntax for Functions:
 *                  function name(parameter1, parameter2, so on...){
 *                          statements    
 *                      }
 * The 1st step is the function declaration simply by writing function
 * The 2nd step is the function name. This is used to call or invoke the function
 * The 3rd step is your parameters inside parentheses. These are arguments to be passed into the function when called
 * The 4th step is your statements in the body of the function.
 * In the body of the function you have your conditional, code block and return statement
 */

sum(40, 27);    // returns 67

// 7. undefined
var winner;

/*
 * A variable that has not been assigned a value is undefined
 */

console.log(winner);    // prints undefined

// 8. null
var carItems = {
    front: 'chargers',
    middle: 'snacks',
    trunk: 'spare tire'
};

/*
 * This type has only one value: null
 * You can empty an object by setting it to null
 * undefined and null are equal in value but different in type
 */

carItems - null;
console.log(carItems);  // prints null

// 9. NaN
var topDartScore = 180;
var teamChant = 'Tonnnnnn Eightyyyy';


/*
 * NaN is a property of the global object
 * The initial value of NaN is Not-A-Number.
 */

isNaN(topDartScore);    // returns false
isNaN(teamChant);       // return true

// 10. Infinity and -Infinity
var maxNumber = 1 + Infinity;

/*
 * Infinity is a numeric value that represents positive infinity
 * -Infinity is a numeric value that represents negative infinity
 * Any positive number multiplied by Infinity equals infinity, and
 * any number divided by infinity equals 0
 */

console.log(maxNumber);     // returns Infinity
console.log(Infinity + 1);  // returns Infinity
console.log(1 / 0);         // returns Infinity
console.log(1 / -0);        // returns -Infinity

// 11. Difference between Primitive/Simple and Complex Data Types

/*
 * Primitive data types are the simplest data types (numbers, booleans, strings, null, undefined)
 * They require a small amount of data that is needed to store its value in memore.
 */

/*
 * Complex data types can hold much larger amounts of data. They could include
 * numbers and strings with a wide range of values.
 * Complex data types include Arrays, Objects and Functions
 */

// 12. Difference between values being passed by Copy & Reference

/*
 * Primitive data types are copied by value
 * When we assign variables to other variables using the = operator, we 
 * copy the value to the new variable. They are copied by value
 */

var x = 10;
var y = 'abc';
var z = null;

var a = x;  // value being copied returns a = 10
var b = y;  // value being copied returns b = 'abc'

/*
 * Variables that are assigned a non-primitive value are given a reference
 * to that value. That reference points to the object's location in memory.
 * The variables do not contain the value.
 * When a reference type value is copied to another variable using the = operator,
 * the address of that value is what's actually copied over.
 * Objects are copied by reference instead of by value.
 */