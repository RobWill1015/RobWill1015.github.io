 /**
 * OPERATORS
 * 
 * 0. operators are symbols or functions that indicate an operation
 * an operator is capable of manipulating a certain value or operand.
 * operators are used to perform specific mathematical and logical computations.
 * operators are used to compare values.  
 * 
 */

// 1. Assignment Operators
/**
 * Assignment operators assign value(s) to variable(s) in many different ways
 */

// Assignment Operator  =
var inventory = 100;    
// assigns the value 100 to the variable 'inventory'

// Addition Assignment Operator  +=
 inventory += 50;    
// inventory = 150 

// Subtraction Assignment Operator  -=
 inventory -= 90;  
// inventory = 60

// Multiplication Assignment Operator  *=
 inventory *= 3;      
// inventory = 180

// Division Assignment Operator  /=
 inventory /= 5;   
// inventory = 36

// Remainder Assignment Operator %=
 inventory %=  11;
 // inventory = 3
 
// Exponentiation Assignment Operator **=
 inventory **= 4;
 // inventory = 81
 
 // 2. Arithmetic Operators
 /**
  * Arithmetic operators are used to perform arithmetic on numbers
  */
 
 // Addition Operator +
 // Performs addition on values and can concatenate strings
 var x = 10 + 15;
 // x = 25
 var classRoom = 'Operation' + ' ' + 'Spark';
 // classRoom = 'Operation Spark'
 
 
 // Subtraction Operator -
 // performs subtraction on values
 var y = 40 - 18;
 // y = 22
 
 // Multiplication Operator *
 // Performs multiplication on values
 var z = 140 * 3;
 // z = 420
 
 // Division Operator /
 // Performs division on values
 var a = 51 / 3;
 // a = 17
 
 // Modulus Division Remainder %
 // Modulus operator gives remainder of an integer division
 var b = 5 % 4;
 // b = 1
 
 // Increment Operator  ++
 // Increment operator increases an integer value by one
 var c = 15;
 ++c;    // c = 16
 
 // Decrement Operator  --
 // Decrement operator decreses an integer value by one
 var d = 20;
 --d;    // d = 19
 
 // 3. Comparison Operators
 /**
  * Comparison operators compares its operands and returns 
  * a logical value based on whether the comparison is true. 
  * the operands can be numerical, string, logical or object values
  */
 
 // Have variables to compare
 var books = 100;
 var dvds = 300;
 
 // Equal To Operator == returns true if operands are equal
 console.log(books == 50);       // prints false
 console.log(5 == '5');          // prints true
 
 // Strickly Equal To === return true if operands are equal of type and value
 console.log(books === dvds);    // prints false
 console.log(books === 100);     // prints true
 
 // Not Equal To Operator != return true is the operands are not equal
 console.log(books != dvds);     // prints true
 console.log(books != 100);      // prints false
 
 // Strickly Not Equal To !== returns true if the operands are of the same type but not equal or are of different type
 console.log(dvds !== books);    // prints true
 console.log(100 !== 100);       // prints false
 
 // Greater Than > returns true if the left operand is greater than the right
 console.log(dvds > books);      // prints true
 
 // Lesser Than < returns true is the left operand is less than the right
 console.log(dvds < books);      // prints false
 
 // Greater Than or Equal To >= returns true if the left operand is greater than or equal to the right
 console.log(books >= 75);      // prints true
 
 // Lesser Than or Equal To <= return true is the left operand is lesser than or equal to the right
 console.log(books <= 200);      // prints true
 
 // 4. Logical Operators
 /**
  * Logical operators are used to determine the logic between variables and values
  */
 
 // Logical And operator && returns true if both instances are true
 console.log(33 < 50 && 44 > 20);    //prints true
 
 // Logical Or operator || returns true if either instances are true
 console.log(33 < 20 || 44 > 11);    // prints true
 
 // Logical Not operator ! reverses the boolean result of the operand condition
 console.log(!(books === 100));      // prints false
 
 // 5. Unary Operators
 /**
  * A unary operator is an operation with only one operand
  */
 
 // Increment & Decrement are also Unary Operator
  var c = 15;
 ++c;    // c = 16
 var d = 20;
 --d;    // d = 19
 
 // Unary Negation - reverses the sign of a number
 let j = 1;
 j = -j;
 console.log(j);        // prints -1
 
// typeof returns a string indicating the type of unevaluated operand.
var car = 'honda';
var bottles = 33;
var hobbies = ['darts', 'pool', 'video games'];

typeof car;     // returns 'string'
typeof bottles; // returns 'number'
typeof hobbies; // return 'object'

// void operator evaluates the given expression and returns undefined
void (2 == "2");    // returns undefined

// 6. Ternary Operators
/**
 * The conditional ternary operator is the only javascript operator that 
 * takes 3 operands. This operator is frequently used as a shortcut for 
 * the if statement.
 */
 
 // Syntax:
 // condition ? exprIfTrue : exprIfFalse
 
 var age = 37;
 var vote = (age < 18) ? 'Too Young':"Old Enough";
 // return 'Old Enough'