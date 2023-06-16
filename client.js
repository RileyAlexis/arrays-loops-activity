/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */

const hobbies = ['Drawing', 'Video Games', 'Cooking', 'Skating', 'Skydiving'];

for (index of hobbies) {
    console.log(index);
}

console.log('Total Hobbies', hobbies.length);

// Example output
// 1. swimming
// 2. board games
// 3. painting
// Total hobbies: 3

/**
 * #2 Colors
 * ---------
 * 1. Create an array of colors as strings
 *    (include the color 'teal' at least once)
 * 2. Create a variable tealCount
 * 3. Write a loop that counts the number of times teal 
 *    is in the array
 * 4. Output the array and number of times teal was found
 */

const colors = ['teal','blue','aqua','cyan','bluegreen','marine','teal'];
let tealCount = colors.filter((indexValue) => indexValue === 'teal');

console.log(colors);
console.log('Teal was found', tealCount.length, 'times');

// Example output
// green, red, teal, orange, teal
// Teal was found 2 times


/**
 * #3 Even & Odd
 * -------------
 * 1. Create an array of numbers (at least 5 numbers)
 * 2. Create variables oddNumbers and evenNumbers (empty arrays)
 * 3. Write a loop that puts all the odd numbers in the oddNumbers 
 *    array and even numbers in the evenNumbers array.
 * 4. Output the original array, odd number array and even number array
 */

const numArr = [1,2,3,4,5,6,7,8,9,10,66,33,98];
const oddNumbers = numArr.filter((number) => number %2 !==0);
const evenNumbers = numArr.filter((number) => number %2 !==1);
console.log('Odds', oddNumbers);
console.log('Evens', evenNumbers);


// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2


/**
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */

const bools = [true,true,false,false,false,true,false,true];
const toggled = []; 




// Example output
// true, false, true, true
// Toggled false, true, false, false


/**
 * #5 (STRETCH) Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 */


// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8


/**
 * #6 (STRETCH) Greatest Position Distance
 * --------------------
 * 1. Create a largish array of numbers, including at least two different
 *    numbers that repeat (e.g. 0, 2, 2, 7, 4, 1, 7, 8)
 * 2. Write a loop that finds the greatest position distance between
 *    repeating numbers in your array. In the above example, the 2's have
 *    a distance of 1, while the 7's have a distance of 3, so the
 *    greatest position distance for that array is 3.
 * 3. Output the array and its greatest position distance
 */


// Example output
// 5, 1, 8, 2, 9, 1, 4, 5, 0
// Greatest Position Distance: 7
