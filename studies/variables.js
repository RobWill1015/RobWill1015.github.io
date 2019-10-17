/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


// 4. Hoisting
console.log(job);   // prints undefined
var job = 'coder';

/* 
 * Hoisting is Javascripts behavior of moving all declarations to the top of the current scope.
 * Variables and constants declared with let or const are not hoisted.
 * Javascript only hoist declarations, not initiliazations. 
 * To avoid bugs, always declare all variables at the begining of every scope. 
 */

// 5. let
let firstName = 'Robert';

/*
 * The let statement declare a block scope local variable.
 * let can be reassigned 
 * let is hoisted to the top of their scope but not available until the interpreter reaches the line the variable is declared
 * the let keyword is used in the block it is defined in and the variable can be reassigned only in the block it is used in
 * 
 */

console.log(firstName); // prints 'Robert' 

// 6. const
const birthCity = 'Monroe';

/*
 * const statements are block-scoped
 * the value of a const cannot change through reassignment, and it cannot be redeclared
 * variables declared with const must be initialized and can never be declared
 */

console.log(birthCity); // prints 'Monroe'

// 7. var
var petName = 'Indie';

/*
 * var statement declares a variable, optionally initializing it to a value
 * var can be declared in any scope but it is function locked
 * var is not block scoped
 */

console.log(petName); // prints 'Indie'





