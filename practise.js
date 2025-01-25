//quesion-1
const people = [
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 21 },
    { name: 'Neha', age: 23 }
];

const arr = people.filter(function (item) {
    return item.age > 18;
});

console.log(arr)
//question-2
const numbers=[1,2,3,4,6];

const sumOfSquaresOfEvenNumbers=numbers.filter(function(num){
    return num%2===0;
}).map(function(num){
    return num*num;
}).reduce(function(acc,num){
    return acc+num;
},0)
console.log(sumOfSquaresOfEvenNumbers);
function addFiveBefore(fn){
    return function(x){
        return fn(x+5);
    };

}
function multiplyByTwo(x){
    return x*2;

}
// Create a new function that adds 5 before applying multiplyByTwo
const addFiveAndMultiply = addFiveBefore(multiplyByTwo);

// Example usage
console.log(addFiveAndMultiply(3)); // Output: (3 + 5) * 2 = 16
function modify(arr, callback) {
    arr.push(100); 
    callback();
  }
  
  var arrr = [1, 2, 4];
  
  modify(arrr, function() {
    console.log(arrr); // This will print the modified array [1, 2, 4, 100]
  });
//question
function reverseWords(sentence) {
    return sentence
      .split(' ')          // Split the sentence into words
      .map(word => word.split('').reverse().join(''))  // Reverse each word
      .join(' ');           // Join the words back into a sentence
  }
  
  const sentence = "Hello World";
  const reversedSentence = reverseWords(sentence);
  console.log(reversedSentence);  // Output: "olleH dlroW"
  