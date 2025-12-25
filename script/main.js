const playerScoreEL = document.getElementById('player-score');
const computerScoreEL = document.getElementById('computer-score');
const tiesEL = document.getElementById('ties'); // We'll add ties tracking!
const resultEL = document.getElementById('result');
const choices = document.querySelectorAll('.choice');
const resetBtn = document.getElementById('reset');

let playerScore = 0;
let computerScore = 0;
let ties = 0;

// Function to get a random computer choice
function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

// Add click events to all choice buttons
choices.forEach(choice => {
    choice.addEventListener('click', playGame);
});

resetBtn.addEventListener('click', resetGame);

function playGame(e) {
    const playerChoice = e.target.id; // 'rock', 'paper', or 'scissors'
    const computerChoice = getComputerChoice(); // Fresh random choice!

    let result = '';

    if (playerChoice === computerChoice) {
        result = "It's a tie! 🤝";
        ties++;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win! 🎉';
        playerScore++;
    } else {
        result = 'Computer wins! 😔';
        computerScore++;
    }

    // Update the DOM
    resultEL.textContent = `You chose ${playerChoice} ✊✋✌️ | Computer chose ${computerChoice} → ${result}`;
    playerScoreEL.textContent = playerScore;
    computerScoreEL.textContent = computerScore;
    tiesEL.textContent = ties;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    ties = 0;
    playerScoreEL.textContent = 0;
    computerScoreEL.textContent = 0;
    tiesEL.textContent = 0;
    resultEL.textContent = 'Make your move!';
}