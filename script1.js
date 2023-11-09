let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

function makeMove(cell) {
    const index = Array.from(cell.parentNode.children).indexOf(cell);
    if (!gameOver && gameBoard[index] === '') {
        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer);

        if (checkWin(currentPlayer)) {
            document.getElementById('status').textContent = `${currentPlayer} wins!`;
            gameOver = true;
        } else if (gameBoard.every((cell) => cell !== '')) {
            document.getElementById('status').textContent = "It's a draw!";
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('status').textContent = `Current Player: ${currentPlayer}`;
        }
    }
}

function checkWin(player) {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    return winningCombos.some((combo) => {
        return combo.every((index) => gameBoard[index] === player);
    });
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameOver = false;
    document.querySelectorAll('.cell').forEach((cell) => {
        cell.textContent = '';
        cell.classList.remove('X', 'O');
    });
    document.getElementById('status').textContent = `Current Player: ${currentPlayer}`;
}

document.getElementById('status').textContent = `Current Player: ${currentPlayer}`;
