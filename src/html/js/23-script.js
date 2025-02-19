// DOM Selection
const flipButton = document.querySelector('.flip-button');
const card = document.querySelector('.card');

// Function Implementation
const flipCard = () => {
    card.classList.toggle('is-flipped');
};

// Event Binding
flipButton.addEventListener('click', flipCard);
