const numbers=[2,4,5,6];
const allEven=numbers.every(function(item,index){
if(item%2==0){
    return item;
}
});
console.log(allEven);
