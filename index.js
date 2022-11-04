// create text variable
let text = '';

//grab form elements from index file
let input = document.getElementById('user-input');
console.log(input);
let button = document.getElementById('translate');
let output = document.getElementById('pigLatinOutput');
let form = document.getElementById('latinForm');

// stop form from submitting
form.addEventListener('submit', (e) => {
  e.preventDefault();
})

//store input.value into text
input.addEventListener('keyup', (e) => {
  text = e.target.value;
  console.log(text);
});

// Event for running pigLatin fx and putting it on page
button.addEventListener('click', (e) => {
    let word = pigLatin(text);
    output.innerText = word;
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