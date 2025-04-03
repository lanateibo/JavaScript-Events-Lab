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
