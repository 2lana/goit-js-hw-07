function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

// Function to create boxes
function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  
  const boxesFragment = document.createDocumentFragment(); // Create a document fragment for efficient DOM manipulation
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10; // Initial size is 30px, increases by 10px for each subsequent box
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.classList.add('box'); // Optionally add class for styling purposes
    boxesFragment.appendChild(box); // Append the box to the fragment
  }
  
  boxesContainer.appendChild(boxesFragment); // Append the complete fragment to the DOM
}

// Function to destroy all boxes
function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // Clear the container
}

// Event listeners for the buttons
document.querySelector('[data-create]').addEventListener('click', () => {
  const input = document.querySelector('input[type="number"]');
  const amount = Number(input.value);
  
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''; // Clear input value
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

document.querySelector('[data-destroy]').addEventListener('click', () => {
  destroyBoxes();
});
