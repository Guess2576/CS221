const choices = ["rock", "paper", "scissors"];                                                  // Loosely referenced the following link for aid in structuring the game.https://www.geeksforgeeks.org/rock-paper-and-scissor-game-using-javascript/
const playButton = document.getElementById("playButton");
const errorMessage = document.getElementById("errorMessage");

playButton.addEventListener("click", play);

function getUserChoice(userInput) {                                                             //1. User Input (20%):
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    } else {
        console.log("Invalid selection. Please choose only 'rock,' 'paper,' or 'scissors.'");   //BONUS (20%): Make sure that only "Rock, Paper, or Scissors" can be entered
        return null; // Return null for an invalid choice                                       //Borrowed the text validation technique from https://discuss.codecademy.com/t/rock-paper-scissors-project-how-to-ensure-wrong-input-will-stop-the-program/578328
    }
}

function play() {
    const playerChoice = getUserChoice(document.getElementById("playerChoice").value);

    if (playerChoice) {
        errorMessage.textContent = ""; // Clear any error message
        const computerChoice = choices[Math.floor(Math.random() * 3)];                          //2. Computer's Choice (20%):

        console.log(`Your Choice: ${playerChoice}`);                                            //3. Display Choices (10%):
        console.log(`Computer's Choice: ${computerChoice}`);

        const result = pickWinner(playerChoice, computerChoice);
        console.log(`Game Result: ${result}`);

        displayResult(result);
    } else {
        errorMessage.textContent = "Invalid choice. Please enter rock, paper, or scissors.";
    }
}

function pickWinner(playerChoice, computerChoice) {                                             //4. Determine the Winner (30%):
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {                                                                                         //5. Announce the Result (20%):
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function displayResult(result) {                                                                //5. Announce the Result (20%):
    console.log(result);
    const playAgain = confirm("Would you like to play again?");
    if (playAgain) {
        document.getElementById("playerChoice").value = "";
        errorMessage.textContent = ""; // Clear any error message
    } else {
        alert("Thank you for playing! See you next time!");
        playButton.removeEventListener("click", play);
    }
}