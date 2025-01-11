// Code 1

(function(a){
    return (function(){
      console.log(a);
      a = 23;
    })()
  })(45);
  
  // Code 2
  
  // Each time bigFunc is called, an array of size 700 is being created,
  // Modify the code so that we don't create the same array again and again
  
  function bigFunc(element){
    let newArray = new Array(700).fill('♥');
    return newArray[element];
  }
  
  console.log(bigFunc(599)); // Array is created
  console.log(bigFunc(670)); // Array is created again
  
  // Code 3
  
  // The following code outputs 2 and 2 after waiting for one second
  // Modify the code to output 0 and 1 after one second.
  
  function randomFunc(){
    for(var i = 0; i < 2; i++){
      setTimeout(()=> console.log(i),1000);
    }
  }
  randomFunc();
 
  
  //Code 1 - Outputs 45.
  
  //Even though a is defined in the outer function, due to closure the inner functions have access to it.