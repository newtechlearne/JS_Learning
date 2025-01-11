//for strings
const words=['banana','apple','cherry'];
words.sort();
console.log(words);

const numbers = [3, 1, 4, 2, 5];

// Ascending order
numbers.sort(function(item1,item2) {
    return item1- item2;
});

console.log(numbers); // Output: [1, 2, 3, 4, 5]

