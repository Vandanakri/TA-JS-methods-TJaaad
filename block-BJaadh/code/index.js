// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf(101)
// - Find the last index of `9` in numbers
numbers.lastIndexOf(9)
// - Convert value of strings array into a sentance like "This is a collection of words"
strings.join(' ')
// - Add two new words in the strings array "called" and "sentance"
strings.push("called","sentance")
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.join(' ')
// - Remove the first word in the array (strings)
strings.shift()
// - Find all the words that contain 'is' use string method 'includes'
strings.includes('is')
// - Find all the words that contain 'is' use string method 'indexOf'
strings.indexOf('is')
// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every((Number) => Number % 3 === 0);
// -  Sort Array from smallest to largest
numbers.sort((a,b) => a - b);
// - Remove the last word in strings
strings.pop()
// - Find largest number in numbers
let largest = numbers.sort((a,b) => a - b).pop();
// - Find longest string in strings
let largestString = strings.sort((a,b) => a.length - b.length).pop();
 
// - Find all the even numbers
function isEven(number){
  return number % 2 === 0;
}
let evenNumber = numbers.filter(isEven);
// - Find all the odd numbers
function isOdd(number){
  return number % 2 !== 0;
}
let oddNumber = numbers.filter(isOdd);
// - Place a new word at the start of the array use (unshift)
strings.unshift("Vandana");
// - Make a subset of numbers array [18,9,7,11]
numbers.slice(3,7);
// - Make a subset of strings array ['a','collection']
strings.slice(3,5);
// - Replace 12 & 18 with 1221 and 1881
numbers.splice(1,1,1221)
numbers.splice(3,1,1881)
// - Replace words in strings array with the length of the word
let lengths = strings.map((word) => word.length);
console.log(lengths);
// - Find the sum of the length of words using above question

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
let firstName = customers.filter((customer) => customer.firstname.startsWith("J"));
// - Create new array with only first name
let firstnameCustomer = customers.map((customer) => customer.firstname);
// - Create new array with all the full names (ex: "Joe Blogs")
let fullnameCustomer = customers.map((customer) =>
`${customers.firstname} ${customers.lastname}` );
// - Sort the array created above alphabetically
[...fullnameCustomer].sort();
// - Create a new array that contains only user who has at least one vowel in the firstname.


