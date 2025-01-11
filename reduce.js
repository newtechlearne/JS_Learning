const numbers = [1, 2, 3, 4, 5];

// Sum of all elements
const sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0); // Initial value of accumulator is 0

console.log(sum); // Output: 15