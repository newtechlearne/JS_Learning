const numbers = [1, 2, 3, 4, 5, 6];

// Filter out even numbers
const evenNumbers = numbers.filter(function(item,index) {
    if( item % 2 === 0){
return item;
    } // Condition: Keep numbers divisible by 2
});

console.log(evenNumbers);
