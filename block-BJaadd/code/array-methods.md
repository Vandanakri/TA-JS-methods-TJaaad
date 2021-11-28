Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`


3. `flat`

- Parameter: accept only number and defalut to 1.
   - Return: A single array of element
   - Example:
     ```js
     let numbers = [1, 2,[3, 4,[5, 6,[7, 8]]]];
     numbers.flat(4); // [1, 2, 3, 4, 5, 6, 7, 8]
     
     ```
     flat accepts numberand take it as depth, and returns an flat array, i.e. no nested arrays.

  - No it does not mutate the original array

4. `push`

Parameter: Any Value that is to be pushed in array, multiple values can also be taken.

Return: An Array.

Example:

let numbers = [1, 2, 3, 4, 5, 6];
numbers.push(7); // [1, 2, 3, 4, 5, 6, 7];
numbers.push(8, 9); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

push accepts any value and add it to the end of the array.

Yes, it mutates the original array.

5. `indexOf`

 - Parameter: An string whose index is to be find.
   - Return: index(number)
   - Example:

     ```js
     let name = 'Arya Stark';
     name.indexOf("Stark") // 5
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.indexOf("fox"); // 14
     let houseName = 'Starks';
     houseName.indexOf("k"); // 4
     ```
   - `indexOf` index(number).
   - No it does not mutate the original array

6. `lastIndexOf`

- Parameter: An string whose index is to be find.
   - Return: index(number)
   - Example:

     ```js
     let name = 'Arya Stark';
     name.lastIndexOf("Stark") // 5
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.lastIndexOf("fox"); // 14
     let houseName = 'Starks';
     houseName.lastIndexOf("k"); // 4

     ```
   - `lastIndexOf` index(number).
   - No it does not mutate the original array

7. `includes`

- Parameter: A string which is to be searched of given string.
   - Return: true or false
   - Example:

     ```js
     let name = 'Arya Stark';
     name.includes("Stark") //true
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.includes(realbox); // false
     let houseName = 'Starks';
     houseName.includes("k"); // true
     ```
   - `includes` true or false.
   - No it does not mutate the original array

8. `reverse`

- Parameter:  Does not accept parameters.
   - Return: A reversed array.
   - Example:
     ```js
     let name = ["Black", "Blue", "White"];
     name.reverse(); //   ['White', 'Blue', 'Black']
     let numbers = [1,2,3,4,5,6,7,8]
     numbers.reverse(); [8, 7, 6, 5, 4, 3, 2, 1] 
     ```
   - `reverse` is used to reverse the array.
   -  Yes, it mutates the original array.

9. `every`

  - Parameter:  Acccepts Callback function..
   - Return: true or false.
   - Example:
     ```js
     let numbers = [1, 2, 3, 4, 5, 6, 7];
     numbers.every(function(number){return number>0;});
     console.log(return); // true

     let names = ["Ram", "Shyam", "Karan", "Bablu", "Banti", "Ram"];
     names.every(function(name){return name.lenght>2;});
     console.log(return); // true
     ```
   - `every`  takes a function and returns true if conition satisfies for every element.
   - No it does not mutate the original array


10. `shift`

  - Parameter:  Does not accept any parameter.
   - Return: Array.
   - Example:
     ```js
     let numbers = [1, 2, 3, 4, 5, 6, 7];
     number.shift(); // 1
     let names = ["Ram", "Shyam", "Karan", "Bablu", "Banti", "Ram"];
     names.shift(); // "Ram"
     ```
   - `every`  is used to delete first element from array.
   - Yes, It mutates the array.


11. `splice`

- Parameter:  Does not accept any parameter.
   - Return: Array.
   - Example:
     ```js
     let numbers = [1, 2, 3, 4, 5, 6, 7];
     numbers.splice(1,2) //  [2, 3]
     let names = ["Ram", "Shyam", "Karan", "Bablu", "Banti", "Ram"];
     names.splice(1,1, "Vandana"); // "Shyam"
     ```
   - `splice` is used to take out an small first length array.
   - Yes, It mutates the array.

12. `find`

- Parameter:  Acccepts callback function.
- Return: Element of array which firstly satisfies the condition.
   - Example:
     ```js
     let numbers = [1, 2, 3, 4, 5, 6, 7];
     let findReturn = numbers.find(function (number) {
       return number > 5;
     });
     console.log(findReturn); // "6"
     let names = ["Ram", "Shyam", "Karan", "Bablu", "Banti", "Ram"];
     let findReturn1 = names.find(function (name) {
       return name.lenght > 3;
     });
     console.log(findReturn1); // "Shyam"
     ```
   - `find` takes a function and returns the first element which satisfies for every element.
   - No, It does not mutates the array.

13. `unshift`

- Parameter: The elements to add to the front of the arr.
- Return: The new length property of the object upon which the method was called.
   - Example:
     ```js
     let numbers = [1, 2, 3, 4, 5, 6, 7];
     numbers.unshift(7); //  8
     let names = ["Ram", "Shyam", "Karan", "Bablu", "Banti", "Ram"];
     names.unshift("sah"); // 7
     ```
   - `unshift` method adds one or more elements to the beginning of an array and returns the new length of the array.
   - Yes, It mutates the array.

14. `findIndex`

  - Parameter: A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.
  - Return: The index of the first element in the array that passes the test. Otherwise, -1.
   - Example:
     ```js
     let numbers = [1, 2, 3, 4, 5, 6, 7];
     let names = ["Ram", "Shyam", "Karan", "Bablu", "Banti", "Ram"];
     let findIndexReturn = numbers.find(function (number) {
       return number > 5;
     });
     console.log(findIndexReturn); // 5
     let findIndexReturn1 = names.find(function (name) {
       return name.lenght > 3;
     });
     console.log(findIndexReturn1); // 1
     ```
   - `findIndex` returns the index of the first element in the array that satisfies the provided testing  function. Otherwise, it returns -1, indicating that no element passed the test.
   - No, It does not mutates the array.

15. `filter`

- Parameter: Function is a predicate, to test each element of the array. Return a value that coerces to true to keep the element, or to false otherwise.
- Return: A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
```js
let numbers = [1, 2, 3, 4, 5, 6, 7];
let names = ["Ram", "Shyam", "Karan", "Bablu", "Banti", "Ram"];

let evenNumber = numbers.filter((number) => {
  return (number % 2 === 0;);
});
console.log(evenNumbers); // [2,4,6]

let oddNumber = numbers.filter((number) => {
return (number % 2 !== 0;);
});
console.log(oddNumbers); // [1,3,5,7]

 let longNames = names.filter((name) => {
return (name.length > 4;);
});
console.log(longNames); // ["Shyam", "Karan", "Bablu", "Banti"]
```
`filter` is used to filter an array according to our conditions.

No, It does not mutate the array.


17. `forEach`

  -  Parameter: A callback function.
  - Return: By default it returns undefined. but we can use forEach to store values in an array and then     use it.
   Example:
      ```js
      let numbers = [1, 2, 3, 4, 5, 6, 7];
      number.forEach(function (number) {
        console.log(numbers);
      });
      // 1
      // 2
      // 3
      // 4
      // 5
      // 6
      // 7
      ```
   `forEach` is used to create a new array with modified data using any other array.
     No, It does not mutate the array.


18. `map`
  - Parameter: A callback function.
   - Return: Array.
   - Example:
   ```js
   let numbers = [1, 2, 3, 4, 5];

   function double(number) {
   return number * 2;
   }
   
   function square(number) {
     return number ** 2;
   }
   
   function negative(number) {
     return (number = -number);
   }
   
   let doubleNumbers = numbers.map(double);
   console.log(doubleNumbers); // [2, 4, 6, 8, 10]
   
   let squareNumbers = numbers.map(square); // [1, 4, 9, 16, 25]
   console.log(squareNumbers);
   
   let negativeNumbers = numbers.map(negative);
   console.log(negativeNumbers); // [-1, -2, -3, -4, -5];
   
      ```

19. `pop`

- Parameter: Does not accept any parameter.
- Return: Array
- Example:
```js
let numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.pop(); //  [1,2, 3, 4, 5, 6]
let names = ["Ram", "Shyam", "Karan", "Bablu", "Banti", "Ram"];
names.pop(); // ["Ram", "Shyam", "Karan", "Bablu", "Banti"]
- `pop` is used to delete last element from array.
- Yes, It mutates the array.```

20. `reduce`

- Parameter: Does not accept any parameter.
- Return: Array
- Example:
  
  ```js
  let numbers = [1, 2, 3, 4, 5, 6, 7];
  numbers.reduce((acc, number) => {
    return (acc += number;);
  }, 0); // 28
  let names = ["Ram", "Shyam", "Karan", "Bablu", "Banti", "Ram"];
  names.reduce((acc, name) => {
    return (acc += name;);
  }, 0); //  "RamShyamKaranBabluBantiRam"
  ```

- `reduce` is used to reduce an array to a small array, number, string or object.

- No, It does not mutate the array.

21. `slice`

- Parameter: Strings; what to replace, by which to replace with.
   - Return: An modified string
   - Example:
     ```js
     let name = 'Arya Stark';
     name.slice(0,6); //'Arya S'
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.slice(10); // 'own fox jumped over a lazy dog'
     let houseName = 'Starks';
     houseName.slice(3,6); // 'rks'
     ```
   - `slice` Used to replace a part of string by anither string.

22. `some`

- Parameter: Acccepts Callback function.

- Return: true or false.

- Example:

  ```js
  let numbers = [1, 2, 3, 4, 5, 6, 7];
  let names = ["Ram", "Shyam", "Karan", "Bablu", "Banti", "Ram"];
  numbers.some(function(number){return number>5;});
  console.log(return); // true
  names.some(function(name){return name.lenght>4;});
  console.log(return); // true
  numbers.some(function(number){return number>7;});
  console.log(return); // false
  ```

- `some` takes a function and returns true if conition satisfies for any of the element.

- No, It does not mutates the array.




