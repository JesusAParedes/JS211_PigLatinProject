'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const pigLatin = (word) => {
  
  // Your code here
  let newWord = word.trim().toLowerCase()
  
  let arr = newWord.split('') // create an array of the word
  // console.log('My array is', arr)

  // conditional where it checks if vowel is index 0 first
  if(arr[0] === 'a' || arr[0] === 'e' || arr[0] === 'i' || arr[0] === 'o' || arr[0] === 'u'){
    arr.push('yay') // addes "yay" at the end of words that start with vowels
  // console.log('***after adding yay',arr)
  arr.join() 
  return arr.join('')
  } 
  // second is a while loop where the word that starts with a consonant goes through until it gets to a vowel
  else {
    let i = 0;
    while (i+=1) {
      // console.log(arr[i])
  let removedElement = arr.shift() // if the letter at index 0 is a consonant, remove it and store the element in a variable
  console.log(removedElement)
  arr.push(removedElement) // put the removedElement at the end of the array
  // console.log('***after putting at the end',arr)
      if(arr[0] === 'a' || arr[0] === 'e' || arr[0] === 'i' || arr[0] === 'o' || arr[0] === 'u'){
        break; // if the first index is a vowel, get out of loop
      }
}
  arr.push('ay') // add "ay" to the end after the array leaves the while loop
  // console.log('***after adding ay',arr)
  arr.join()
  return arr.join('')
}
}



// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
