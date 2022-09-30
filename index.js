//Solve this easy problem with JavaScript
// Author Programmer Mohaimin 
// date: 2022.30.09 --> Friday 09.10 pm



/**  
 * Write a JavaScript for loop 
 * that will iterate from 0 to 15. 
 * For each iteration,it will check if the current number is odd or even, and 
 * display a message to the screen.

    0 is even
    1 is odd
    2 is even

*/

// Solve with Array
const myArray = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

for (i = 0; i < myArray.length; i++){
    if (myArray[i] % 2) {
        console.log(myArray[i] + ' is odd Number')
    } else {
        console.log(myArray[i] + ' is even Number')
    }
}




// Solve with Object
const myObject = {
    'z':0,
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
}

for (num in myObject) {
    if (myObject[num] % 2) {
        console.log(myObject[num] + ' is odd Number')
    } else {
        console.log(myObject[num] + ' is even Number');
    }
}