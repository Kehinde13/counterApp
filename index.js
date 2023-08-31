const increment = document.querySelector("#increment");
const decrement = document.querySelector("#decrement");
const reset = document.querySelector("#reset");
const setCounter = document.querySelector("#setCounter");
const value = document.getElementById("setValue");
let output = document.querySelector("#output");

let count = 0;


increment.addEventListener('click', () => {
    output.textContent = (count += 1);
})

decrement.addEventListener('click', () => {
    output.textContent = (count -= 1);
})

reset.addEventListener('click', () => {
    output.textContent = (count = 0);
})

setCounter.addEventListener('click', () => {
   output.textContent = (count = value.value);
})

