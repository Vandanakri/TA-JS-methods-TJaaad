Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
 
 - Parameter: No Parameter
   - Return: A string in UpperCase letters.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.toUpperCase(); //"ARYA STARK"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.toUpperCase(); // "A QUICK BROWN FOX JUMPED OVER A LAZY DOG"
     let houseName = 'Starks';
     houseName.toUpperCase(); // "STARKS"
     ```
   - `toUpperCase` accepts a string convered to the UpperCase.


3. `toLowerCase`

- Parameter: No Parameter
   - Return: A string in LowerCase letters.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.toLowerCase(); //"arya stark"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.toLowerCase(); // 'a quick brown fox jumped over a lazy dog'
     let houseName = 'Starks';
     houseName.toLowerCase(); // 'starks'
     ```
   - `toLowerCase` accepts a string convered to the LowerCase.

4. `trim`

- Parameter: No Parameter
   - Return: A string without left and right space.
   - Example:
     ```js
     let name = '   Arya Stark   ';
     name.trim(); //'Arya Stark'
     let sentance = '        A quick brown fox jumped over a lazy dog          ';
     sentance.trim(); // 'A quick brown fox jumped over a lazy dog '
     let houseName = 'Starks        ';
     houseName.trim(); // 'starks'
     ```
   - `trim` remove extra space.


5. `trimEnd`
- Parameter: No Parameter
   - Return: A string in which there is no right space.
   - Example:
     ```js
     let name = '   Arya Stark   ';
     name.trimEnd(); //'   Arya Stark'
     let sentance = '        A quick brown fox jumped over a lazy dog          ';
     sentance.trimEnd(); // '        A quick brown fox jumped over a lazy dog'
     let houseName = 'Starks        ';
     houseName.trimEnd(); // 'starks'
     ```
   - `trimEnd` remove right side space.

6. `trimStart`

- Parameter: No Parameter
   - Return: A string in which there is no left space.
   - Example:
     ```js
     let name = '   Arya Stark   ';
     name.trimStart(); //'Arya Stark   '
     let sentance = '        A quick brown fox jumped over a lazy dog          ';
     sentance.trimStart(); // 'A quick brown fox jumped over a lazy dog      '
     let houseName = 'Starks        ';
     houseName.trimStart(); // 'starks    '
     ```
   - `trimStart` remove left side space.

7. `concat`

- Parameter: A string which is to be concatenated.
   - Return: A concatenated string.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.concat(" ",name); //'Arya Stark Arya Stark'
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.concat(" is ", name); // 'A quick brown fox jumped over a lazy dog is Arya Stark'
     let houseName = 'Starks';
     houseName.concat(" ",sentance); // 'Starks A quick brown fox jumped over a lazy dog'
     ```
   - `concat` concatenated.


8. `endsWith`

- Parameter: A string which is to be searched in end of given string.
   - Return: true or false
   - Example:
     ```js
     let name = 'Arya Stark';
     name.endsWith("Arya Stark") //true
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.endsWith("Quick brown fox jumped over a lazy dog"); // false
     let houseName = 'Starks';
     houseName.endsWith("Arya"); // false
     ```
   - `endsWith` true or false.

9. `includes`

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

10. `indexOf`


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

11. `lastIndexOf`

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

12. `padEnd`

- Parameter: number; which tells total character of string and String; which is used as padding at end.

  - Return: An string with padding at end
  - Example:
    ```js

    let name = 'Arya Stark';
     name.padEnd("19",".") // 'Arya Stark.........'
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.padEnd("50","."); // 'A quick brown fox jumped over a lazy dog..........'
     let houseName = 'Starks';
     houseName.padEnd("20", "vana"); // 'Starksvanavanavanava'
     
   ```
   - `padEnd` Used to add padding at the end of any string

13. `padStart`

- Parameter: number; which tells total character of string and String; which is used as padding at start.

  - Return: An string with padding at start
  - Example:
    ```js

    let name = 'Arya Stark';
      name.padStart("20","0") // '0000000000Arya Stark'
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.padStart("60","8"); // '88888888888888888888A quick brown fox jumped over a lazy dog'
     let houseName = 'Starks';
     houseName.padStart("20", "vana"); // 'vanavanavanavaStarks'
     
   ```
   - `padStart` Used to add padding at the start of any string


14. `repeat`

- Parameter: number; how many times the string should repeat.

- Return: An repeated string

- Example:
```js
   let name = 'Arya Stark';
        name.repeat(4) // 'Arya StarkArya StarkArya StarkArya Stark'
        let sentance = 'A quick brown fox jumped over a lazy dog';
        sentance.repeat(4); // 'A quick brown fox jumped over a lazy dogA quick brown fox jumped over a lazy dogA quick brown fox jumped over a lazy dogA quick brown fox jumped over a lazy dog'
        let houseName = 'Starks';
        houseName.repeat(4); //'StarksStarksStarksStarks'
```
   - `repeat` Used to return an repeated string.


15. `replace`

  - Parameter: Two strings; what to replace, by which to replace with.
   - Return: An modified string
   - Example:
     ```js
     let name = 'Arya Stark';
     name.replace("Stark","Sah"); //'Arya Sah'
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.replace("fox","box"); // 'A quick brown box jumped over a lazy dog'
     let houseName = 'Starks';
     houseName.replace("ks","mn"); // 'Starmn'
     ```
   - `replace` Used to replace a part of string by anither string.

16. `slice`

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

17. `split`

- Parameter: Strings; at place of which we hace to split.

   - Return: An array

   - Example:
     ```js
     let name = 'Arya Stark';
     name.split("a"); //['Ary', ' St', 'rk']
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.split("brown"); // ['A quick ', ' fox jumped over a lazy dog']
     let houseName = 'Starks';
     houseName.split("r"); //['Sta', 'ks']
     ```
   - `split` Used to split the string into the array elements.

18. `substring`

- Parameter: Numbers; initial and final index of substring.

   - Return: String

   - Example:

     ```js
     let name = 'Arya Stark';
     name.substring(2,0); // 'Ar'

     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.substring(15,5); // 'ck brown f'
     let houseName = 'Starks';
     houseName.substring(4,0); // 'Star'
     ```
   - `substring` Used to takeout a part of the given string using inital and final index.

   
