const hoverButton = document.getElementById('hoverButton');
const mouseMessage = document.getElementById('mouseMessage');

hoverButton.addEventListener('mouseover', () => {
    mouseMessage.textContent = "Mouse is over the button!";
});

hoverButton.addEventListener('mouseleave', () => {
    mouseMessage.textContent = "Mouse has left the button.";
});

