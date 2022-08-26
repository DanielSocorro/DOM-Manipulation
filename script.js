const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calc1');
const input2 = document.querySelector('#calc2');
const btn = document.querySelector('#btncalc');
const pResult = document.querySelector('#result');

form.addEventListener('submit', addInputs);

function addInputs(event) {
    event.preventDefault();
   const addInputs = Number(input1.value) + Number(input2.value);
   pResult.innerText = (`Result: ${addInputs}`);

}