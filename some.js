const numbers=[1,3,4,5];
const hasEven=numbers.some(function(item,index){
    if(item%2==0){
        return item;
    }
})
console.log(hasEven);