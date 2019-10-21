/**
 * String Manipulation
 * 
 * 0. There are built in methods that are very useful to manipulating strings 
 * such as finding the length or a string, joining and splitting strings, substituting
 * one character in a string for another.
 * 
 */

// 1. Using the + operator
var text1 = 'Operation';
var text2 = 'Spark';
var text3 = text1 + ' ' + text2;

// You can use the + operator to concat multiple strings together

console.log(text3);     // prints 'Operation Spark'

// 2. concat() method
var text4 = text1.concat(' ', text2);

// You can also use a built in method concat() to combine strings

console.log(text4);     // prints 'Operation Spark'

// 3. length property
text3.length;

// using the length property, we can return the number of characters in a string.

console.log(text3.length);  // prints 15

// 4. Converting to Upper or Lower Case
var greeting = 'hello, how are you doing?';
var response = "I AM GREAT!";

// These 2 built in methods .toUpperCase() & .toLowerCase() are helpful ways to format text

console.log(greeting.toUpperCase());    // prints 'HELLO, HOW ARE YOU DOING?'
console.log(response.toLowerCase());    // prints 'i am great!'

// 5. Splitting Strings method
var titanicJack = 'King of the World';

/*
 * A very useful method for splitting a string by a character and creating
 * a new array out of the sections is .split
 * This allows us to access sections of the string by index
 * There are multiple ways to use this method.
 * text.split(',')   split on commas
 * text.split(' ')   split on spaces
 * text.split('')    split in characters 
 */

console.log(titanicJack.split(' '));
// prints [ 'King', 'of', 'the', 'World' ]

console.log(titanicJack.split(''));
/* prints [ 'K',
            'i',
            'n',
            'g',
            ' ',
            'o',
            'f',
            ' ',
            't',
            'h',
            'e',
            ' ',
            'W',
            'o',
            'r',
            'l',
            'd' ]
 */

// 6. Find and Replace string values
var pulpFiction = 'That is one tasty burger';

/*
 * We can search a string for a value and replace it with a new value using the replace method
 * The first parameter will be the value to be found and the second parameter will be the
 * value to be replaced.
 */

var pulpFictionNew = pulpFiction.replace('burger', 'nugget');
console.log(pulpFictionNew);   // prints 'That is one tasty nugget'

// 7. Accessing charascters in a string
var dailyQuestion = 'Whats for dinner?';

/*
 * You can access characters and indices with various ways.
 * I will demonstrate on this dailyQuestion string
 * Using bracket notation will access any character in a string
 * charAt() method will return the character using the index number as a parameter
 * indexOf() method will return the index number of the first instance of a character
 * lastIndexOf() method will return the last instance of a character
 * indexOf() & lastIndexOf() can also be used to search for multiple characters in a string
 * slice() method returns the characters between 2 index numbers. The first parameter will be the 
 * starting index number and the second parameter will be the index number where it should end
 */

console.log(dailyQuestion[6]);              // prints 'f'
console.log(dailyQuestion.charAt(4));       // prints 's'
console.log(dailyQuestion.indexOf('?'));    // prints '16'
console.log(dailyQuestion.lastIndexOf('n')) // prints '13'
console.log(dailyQuestion.indexOf('for'));  // prints '6'
console.log(dailyQuestion.slice(8, 15));    // prints 'r dinne'