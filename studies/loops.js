/**
 * LOOPS
 * 
 * 0. A loop repeatedly executes code in its body until the loop conditional statement becomes false
 * A loop is divided basically into 2 parts: 
 * Loop Statement: defines the time limit for the continuous loop, contigent on the conditional statement
 * Loop Body: holds the statement's code and it is executed with each loop cycle
 * 
 */

// 1. for loop //
/** 
 * A for loop is divided into 4 parts:
 * Starting Condition: tells where your loop is set to begin
 * Stopping Condition: tells your loop where to stop
 * Incrementor: tells your loop how much to move per iteration
 * Code Block: this is the loops code and it is executed with each loop cycle
 *  
 * Basic structure for a for loop:
 * for (starting condition; stopping condition; incrementor) {
 *        code block;
 *    }
 */

 // This is a for loop counting upwards 
for (var i = 1; i <= 10; i++) {
    console.log('i');  
}       // prints = '1, 2, 3, 4, 5, 6, 7, 8, 9, 10'

// This is a for loop counting backwards
for (var i = 10; i > 0; i--) {
    console.log(i);
}       // prints = '10, 9, 8, 7, 6, 5, 4, 3, 2, 1'


// you can cycle through an array with a for loop
var numbersForward = [];
for (var i = 11; i < 21; i++){
    numbersForward.push(i);
} 
console.log(numbersForward); // prints: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// you can even cycle backwards through an array with a for loop
var numbersBackward = [];
for (var i = 20; i > 10; i--){
    numbersBackward.push(i);
}
console.log(numbersBackward); // prints: [20, 19, 18, 17, 16, 15, 14, 13, 12, 11]


// 2. while loop //
/** 
 * while a certain condition is true, it will loop through the code block until the condition is false
 * Basic structure for while loop:
 * var count = 0; (starting condition)
 * while (condition true or false) {
 *      console.log(count);
 *      count++; (external counter)      
 *   }
 */

var count = 1;
while (count < 11) {
    console.log(count);
    count++;
}       // prints = '1, 2, 3, 4, 5, 6, 7, 8, 9, 10'

// 3. for in loop //
/**
 * for in loop will iterate a variable over the property of an object
 * for each property, javascript will execute the statement
 * There are 2 things needed for a for in loop to work:
 * 1: There needs to be a variable representing a key in the object
 * 2: There needs to be an object to be iterated over
 * Basic structure for a for in loop:
 * for (var key in object) {
 *  console.log(key);
 *  console.log(object[key]); 
 *   }
 */

var petNames = {        // created an object of my pets names
  dog1: 'Klaus',
  dog2: 'Indie',
  dog3: 'Jasper'
}

for (var key in petNames){  
  console.log(key);             // prints the key names: dog1, dog2, dog3
}
for (var key in petNames){
  console.log(petNames[key]);   // prints the keys values: 'Klaus', 'Indie', 'Jasper'
}