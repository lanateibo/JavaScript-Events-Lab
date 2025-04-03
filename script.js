const hoverButton = document.getElementById('hoverButton');
const mouseMessage = document.getElementById('mouseMessage');

hoverButton.addEventListener('mouseover', () => {
    mouseMessage.textContent = "Mouse is over the button!";
});

hoverButton.addEventListener('mouseleave', () => {
    mouseMessage.textContent = "Mouse has left the button.";
});



const keyboardInput = document.getElementById('keyboardInput');
const keyboardMessage = document.getElementById('keyboardMessage');

keyboardInput.addEventListener('keydown', (event) => {
    keyboardMessage.textContent = `Last key pressed: ${event.key}`;
});



const myForm = document.getElementById('myForm');
const formMessage = document.getElementById('formMessage');

myForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    formMessage.textContent = "Form has been submitted successfully!";
});


const focusInput = document.getElementById('focusInput');
const focusMessage = document.getElementById('focusMessage');

focusInput.addEventListener('focus', () => {
    focusMessage.textContent = "Input is focused!";
});

focusInput.addEventListener('blur', () => {
    focusMessage.textContent = "Input has lost focus.";
});
