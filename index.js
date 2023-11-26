

//////////// Fuzzbuzz Fuzzbuzz Fuzzbuzz FuzzbuzzFuzzbuzz Fuzzbuzz
// Part 1: Fizz Buzz
// To begin, solve the following classic “Fizz Buzz” problem. There are a few different ways to do this - experiment with what you think is the most efficient. Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.
// Accomplish the following:
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.
// Remember to commit your solution once it is working.


// for (let num = 1; num <= 100; num++) {
//     if (num % 3 === 0 && num % 5 === 0) {
//         console.log("Fizz Buzz");
//     } else if (num % 3 === 0) {
//         console.log("Fizz");
//     } else if (num % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(num);
//     }
// }

// Prime Time


// for (let n = 2; n <= 10; n++) {
//     let isPrime = true;

//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             isPrime = false; // not a prime number
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${n} is a prime number.`);
//     }
// }

// let sum = 0;

// for (let i = 0; i < 5; i++) {
//     if (i % 2 !== 0) {
//         sum += i; // Add odd numbers to the sum
//     }
// }

// console.log(sum);

//* Feeling Loopy

const csv =
  "Id,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26\n";

const csv2 = 'Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232';

let currentCell = 1;
let cell1 = '';
let cell2 = '';
let cell3 = '';
let cell4 = '';

// loop over the string
for (let i = 0; i < csv.length; i++) {
  // store each cell in a variable
  if (csv[i] === ',') {
    // if it's a comma, move to the next cell
    currentCell++;
  } else if (csv[i] === '\n') {
    // if it's a newline, move to the next row
    console.log(cell1, cell2, cell3, cell4);

    // reset cells and currentCell for the next row
    currentCell = 1;
    cell1 = '';
    cell2 = '';
    cell3 = '';
    cell4 = '';
  } else {
   
    if (currentCell === 1) {
      cell1 += csv[i];
    } else if (currentCell === 2) {
      cell2 += csv[i];
    } else if (currentCell === 3) {
      cell3 += csv[i];
    } else if (currentCell === 4) {
      cell4 += csv[i];
    }
  }
}
