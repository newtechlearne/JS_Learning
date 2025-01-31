
  const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('input', function(event){
  const inputValue = event.target.value;
  h1.textContent = inputValue;
});
