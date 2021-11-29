// After knowing about string methods, practice those by solving problems given below.

let from = 'Syrio Forel';
let quote = 'There is only one thing we say to death: Not today';
let to = 'Arya Stark';

/*
1. Find the index of the first 'is' in the variable quote. And store it in a new variable named indexOfIs
*/
let indexOfIs = quote.indexOf('is');
/*
2. Find the character at the index indexOfIs (Problem 1) in quote.
*/
quote.charAt(indexOfIs);
/*
3. Log the message saying `The index of first is in quote is 7`
*/
console.log(`The index of first is in "${quote}" is ${quote.search("is")}.`);
/*
4. Log the message for first 6 characters of quote like this.
  The character at index 0 is 'T'
  The character at index 1 is 'h'
  The character at index 2 is 'e'
  The character at index 3 is 'r'
  The character at index 4 is 'e'
  The character at index 5 is ' '
*/
for (let i = 0; i <= 5; i++) {
  console.log(`The character at index ${i} is '${quote[i]}'`);
}
/*
5. Using the variable from , to and quote variable dispaly this message
  "Syrio Forel said There is only one thing we say to death: Not today to Arya Stark." (use concat method)
*/
from.concat(` said ${quote} to ${to}`);
/*
6. Does from, to and quote ends with "rk". Check all three.
*/
from.endsWith('rk')
to.endsWith('rk')
quote.endsWith('rk')
/*
7. Does quote includes the word "Only"
*/
quote.includes('Only');
/*
8. Does quote includes the word " we"
*/
quote.includes('We');
/*
9. Find the index of the the word `we` in quote
*/
quote.indexOf('We');
/*
10. Split the quote into individual word and store it in a variable name quoteSplitted
*/
let quoteSplitted = quote.split(" ")
/*
11. Change the word "today" in quoteSplitted to "tomorrow" and join all the words to form a sentance.
*/
quoteSplitted.splice(quoteSplitted.length - 1,1,"tomorrow")
quoteSplitted.join(' ');
/*
12. Find the index of second "o" in quote. Use indexOf
*/
quote.indexOf('o')
/*
13. Find the last index of letter "a" in quote.
*/
quote.lastIndexOf('a')
/*
14. Find the second last index of letter "a" in quote.
*/
quote.lastIndexOf('a', 2)
/*
15. Make the quote 70 character long. If it has less characters add rest as .......
Example: "Hello" (convert to 10 characters) => "Hello....."
Store the output in a new variable
*/
quote.padEnd(70,'.')
/*
16. Do same as (15) but the ... should come in start. Store the output in a new variable
*/
quote.padStart(70,'.')
/*
17. Log the repeat of "Hello World!" 10 times.
*/
"Hello World!".repeat(10);
/*
18. Replace today to tomorrow in quote.
*/
quote.replace('today','tomorrow');
/*
19. Replace Stark to Lannister in to
*/
to.replace('Stark','Lannister');
/*
20. Make the quote of length 30 and put ... at the end. (use slice)
*/
quote.slice(30,Infinity)
/*
21. Find out does quote, from, to starts with "A"
*/
quote[0] === "A"
from[0] === "A"
to[0] === "A"

