// Run script after HTML is loaded
document.addEventListener("DOMContentLoaded", () => {
  // UI Elements
  const startGameBtn = document.getElementById("start-game-btn");
  const gameContainer = document.getElementById("game-container");
  const statusMessage = document.getElementById("status-message");
  const restartBtn = document.getElementById("restart-btn");
  const cells = document.querySelectorAll(".cell");

  // Game state variables
  let currentPlayer = "X";
  let boardState = ["", "", "", "", "", "", "", "", ""];
  let gameActive = true;

  // Winning combinations pattern array
  const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  // Reveal game when button is pressed
  startGameBtn.addEventListener("click", () => {
    gameContainer.classList.remove("hidden");
    startGameBtn.classList.add("hidden"); // Hide starter button
  });

  // Handle clicking on a cell
  function handleCellClick(e) {
    const clickedCell = e.target;
    const clickedIndex = parseInt(clickedCell.getAttribute("data-index"));

    // Ignore click if cell is already taken or game is over
    if (boardState[clickedIndex] !== "" || !gameActive) {
      return;
    }

    // Update cell and game state
    boardState[clickedIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    checkResult();
  }

  // Check if someone won or if it's a draw
  function checkResult() {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];
      if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
        roundWon = true;
        break;
      }
    }

    if (roundWon) {
      statusMessage.textContent = `🎉 Player ${currentPlayer} Wins!`;
      gameActive = false;
      return;
    }

    // Check for a tie (no empty strings left)
    if (!boardState.includes("")) {
      statusMessage.textContent = "It's a Draw! 🤝";
      gameActive = false;
      return;
    }

    // Switch turns
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusMessage.textContent = `Player ${currentPlayer}'s Turn`;
  }

  // Restart game back to original state
  function restartGame() {
    currentPlayer = "X";
    boardState = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    statusMessage.textContent = "Player X's Turn";
    cells.forEach(cell => (cell.textContent = ""));
  }

  // Event Listeners for cells and restart button
  cells.forEach(cell => cell.addEventListener("click", handleCellClick));
  restartBtn.addEventListener("click", restartGame);
});
