// APP ACADEMY WEEK1: OFFICE HOURS LIGHTNENING ROUND REVIEW

//  MONDAY: Problem Solving Learning Objectives

//  1. Craft a clear, concise coding question to a more experienced developer
        // It's specific. It's clear and concise. It shows that you've put work into it.

//  2. Research unknown JavaScript code syntax using MDN
        // TIP: Set up bookmarks for frequently searched syntax

//  3. Identify and fix a bug in code based on an error message
        // Common errors: SyntaxError - syntax of code is invalid, TypeError - value is not of a proper type, ReferenceError - variable doesn't exist

//  4. Manage your time and stress at AppAcademy
        // !IMPORTANT



//  MONDAY: Expression Lesson Learning Objectives

//  1. Given a working REPL interface, write and execute a statement that will print “hello world” using console.log
console.log("hello world")

//  2. Identify that strings are a list of characters defined by using double or single quotes
"hi!"
'hi!'

//  3. Given an arithmetic expression using +, -, *, /, %, compute its value
42;
-5;
3.14159;
7.0;

console.log(2 + 3); // => 5
console.log(42 - 42); // => 0
console.log(-4 * 1.5); // => -6
console.log(25 / 8); // => 3.125

console.log(10 % 3); // => 1
console.log(14 % 5); // => 4
console.log(20 % 17); // => 3
console.log(18 % 6); // => 0
console.log(7 % 9); // => 7

//  4. Given an expression, predict if its value is NaN
let num;
console.log(num + 3); // NaN

console.log(undefined + 3); // NaN
console.log("fish" * 2); // NaN

//  5. Construct the truth tables for &&, ||, !
console.log(!true); // => false
console.log(!false); // => true
console.log(!!false); // => false

console.log(false && false); // => false
console.log(false && true); // => false
console.log(true && false); // => false
console.log(true && true); // => true

console.log(false || false); // => false
console.log(false || true); // => true
console.log(true || false); // => true
console.log(true || true); // => true

console.log(true || true && false);    // => true
console.log(false && !(false || true)); // => false

//  6. Given an expression consisting of >, >=, ===, <, <=, compute it’s value
console.log(10 > 5); // => true
console.log(10 < 5); // => false
console.log(1 < 7); // => true
console.log(7 <= 7); // => true
console.log(5 === 6); // => false
console.log(5 !== 6); // => true
console.log("a" !== "A"); // => true
console.log(false === false); // => true

console.log("a" < "b"); // => true
console.log("apple" < "abacus"); // => false
console.log("app" < "apple"); // => true
console.log("zoo" > "mississippi"); // => true

//  7. Apply De Morgan’s law to a boolean expression
!(A || B) === !A && !B
!(A && B) === !A || !B

//  8. Given an expression that utilizes operator precedence, compute its value
// modulo has precedence over addition
console.log(4 + 12 % 5); // => 6
console.log((4 + 12) % 5); // => 1

//  9. Given an expression, use the grouping operator to change it’s evaluation
console.log(5 * 3 + 2); // => 17
console.log(2 + 3 * 5); // => 17
console.log((2 + 3) * 5); // => 25

//  10. Given expressions using == and ===, compute their values
console.log(5 === "5"); // false
console.log(5 == "5"); // true
console.log(0 === false); // false
console.log(0 == false); //true

//  11. Given a code snippet using postfix ++, postfix --, +=, -=, /=, *=, predict the value of labeled lines
let bootcamp = "App Academy";
console.log(bootcamp); // 'App Academy'

let birthYear = 2012;
console.log(birthYear); // 2012

//  12. Create and assign a variable using let to a string, integer, and a boolean. Read its value and print to the console.
let word = "hi";
let num = 2;
let status = false;

console.log(word); //=> "hi"
console.log(num); //=> 2
console.log(status); //=> false

// _____________________________________



//  TUESDAY: Strings Learning Objectives

//  1. Describe the properties of a string
        // Always wrapped by "" or '' with any characters inside.

//  2. Create a string
"hello"

//  3. Find the length of a string
"hello".length

//  4. Find the character at a certain index in a string
"hello"[4] // => 'o'

//  5. Concatenate two strings together
"hello " + "world"

//  6. Find the first instance of a character in a string
"hello".indexOf("h") //=> 0
"hello".indexOf("w") //=> -1

//  7. Create a new string from a sub-section of another string
let oldWord = "hello"
oldWord.slice(3) //=> "lo"
oldWord.slice(1,4) //=> "ell"


//  TUESDAY: Intro to Functions Lesson Learning Objectives

//  1. Define a function using function declaration
        // A function definition consists of the function keyword, followed by three things:

        // The name of the function.
        // A list of parameters to the function, enclosed in parentheses, ().
        // The code to be run when this function is run, enclosed in curly brackets, { }.

//  2. Define a function that calculates the average of two numbers, call it, pass in arguments, and print its return value
function average(number1, number2) {
    return (number1 + number2) / 2;
  }

//  3. Identify the difference between parameters vs arguments
        // // PARAMETERS: Parameters are comma separated variables specified as part of a function's declaration. You always want to write functions to accept as wide a range of data as possible. Utilizing the incoming parameters to a function is key to keeping functions flexible and re-usable.
        // ARGUMENT: Arguments are values passed to the function when it is invoked.When we specify what data to use for a function call, we refer to that process as passing arguments to the function.
        

//  TUESDAY: Control Flow and Array Lesson Learning Objectives

//  1. Define a function that accepts a sentence string and two words as args. The function should return a boolean indicating if the sentence includes either word.
        // EXERCISES:[STRING INCLUDED]  

//  2. Identify a pair of mutually exclusive conditions.
        // Mutually exclusive - if one condition is true the other condition must be false,  use an if/else statement. "Coin flip!"
function numberSeparator(number) {
    if (number > 100) {
        bigNumber();
    } else {
        smallNumber();
    }
    }

//  3. Given a for loop, translate it into a while loop, and vice-versa.
        // EXERCISES: [While Loop Translation],[For Loop Translation]
//  4. Write a function that iterates through a provided string argument.
let testString = "testing";

for (let index = 0; index < testString.length; index += 1) {
  let letter = testString[index];
  console.log(letter);
}

//  5. Given a description of pig latin, write a function that takes in a string argument and utilizes String's slice() method to translate the string into pig latin.
        // EXERCISE: [Pig Latin]

//  6. Write a function that takes in an array of words and a string as arguments and returns a boolean indicating whether the string is located inside of the array. The function must use Array's indexOf() method.
        // EXERCISE: [Array Index Of]

//  7. Define that an array literal is an ordered list of values defined by using bracket and individual values are read by indexing.
["this", "is", "array", "literal"]
//--0--, --1-, ---2-- , ----3---- 

// _____________________________________



//  WEDNESDAY: Intermediate Functions Lesson Learning Objectives

//  1. Identify that strings are immutable and arrays are mutable
        //          ----^-----------^-----     --^----------^----

//  2. Define a function using both function declaration and function expression syntax
let calculateAverage = function(a, b) {
  return (a + b) / 2;
};

console.log(calculateAverage(10, 20)); // 15

//  3. Utilize Array.push, .pop, .shift, .unshift to mutate an array
        // EXERCISES: [Add to Array - Research],[Remove from Array - Research]

//  4. List the arguments that can be used with Array.slice
        // array.slice(startIndex, endIndex)

//  5. Write a function that sums up elements of an array, given an array of numbers as an argument
        // EXERCISE: [Sum Array Recall]

//  6. Define a function that takes in an array of numbers and returns a new array containing only the primes
        // EXERCISE: [Choose Primes](Thursday)

//  7. Define a function that takes in a 2D array of numbers and returns the total sum of all elements in the array

//  8. Define a function that takes in an array of elements and returns a 2d array where the subarrays represent unique pairs of elements
        // EXERCISE: [Pairs Maker]

//  9. Define a function that takes in an array of numbers as an argument and returns the smallest value in the array; if the array is empty return null
        // EXERCISE: [Min Value]

// _____________________________________



//  THURSDAY: Two-Dimensional Arrays (2D Arrays)

//  1. index into the inner elements of a 2D array
let twoDimensional = [["a", "b", "c"], ["d", "e"], ["f", "g", "h"]];

console.log(twoDimensional[1]); // [ 'd', 'e' ]
console.log(twoDimensional[1][0]); // 'd'

let subArr = twoDimensional[1];
console.log(subArr[0]); // 'd'

//  2. use nested loops to iterate through a 2D array
let array = [["a", "b", "c"], ["d", "e"], ["f", "g", "h"]];

for (let i = 0; i < array.length; i++) {
  let subArray = array[i];
  console.log(subArray);

  for (let j = 0; j < subArray.length; j++) {
    console.log(subArray[j]);
  }
}


//  THURSDAY: Helper Functions 

//  1. Use your best judgement to determine when to decompose your problem into helper functions
function isPrime(n) {
        for (let i = 2; i  < n; i += 1) {
          if (n % i === 0) {
            return false;
          }
        }
        return true;
      }
      
      function laligatSum(n) {
        let sum = 0;
      
        for (let i = 2; i <= n; i += 1) {
          if (isPrime(i)) { // if i is a prime,
            sum += i;       // then add it to sum.
          }
        }
      
        return sum;
      }

//  2. Helper functions are useful at managing complexity of a program by hiding some implementation details to make code more readable
        // !IMPORTANT


//  THURSDAY: Array Splice

//  1. list all possible arguments that can be used with the Array.splice method
        // array.splice(start, deleteCount, item1, item2)


//  THURSDAY: String.split and Array.join

//  1. use the string.split method to turn a string into an array
let sentence = "follow the yellow brick road";
console.log(sentence.split(" ")); // [ 'follow', 'the', 'yellow', 'brick', 'road' ]
console.log(sentence.split("the")); // [ 'follow ', ' yellow brick road' ]
console.log(sentence.split("o")); // [ 'f', 'll', 'w the yell', 'w brick r', 'ad' ]


//  2. use the array.join method to turn an array into a string
let words = ["run", "around", "the", "block"];
let sentence = words.join(" ");
console.log(sentence); // 'run around the block'
console.log(words); // [ 'run', 'around', 'the', 'block' ]

console.log(words.join("_")); // 'run_around_the_block'
console.log(words.join("HI")); // 'runHIaroundHItheHIblock'

// _____________________________________



//  FRIDAY: Running JS Locally Lesson Learning Objectives

//  1. Match the commands ls, cd, pwd to their descriptions
        // ls - lists all the files and subdirectories in the current directory
        // cd [path] - changes the current directory to the directory specified by the path argument. (i.e. cd /cats would enter a directory named "cats").
        // pwd - short for "Print Working Directory". The pwd command lists the path to your current location in your file system starting from the root.

//  2. Given a folder structure diagram, a list of 'cd (path)' commands and target files, match the paths to the target files.
        // See [File Tree] image in Terminal Basics
//  3. Use VSCode to create a folder. Within the folder create a .js file containing console.log('hello new world'); and save it.
        // !IMPORTANT

//  4. Use node to execute a JavaScript file in the terminal
       // cd into folder then:
       // $node filename.js

// _____________________________________










