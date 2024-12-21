const board = document.getElementById("game-board");
const scoreDisplay = document.getElementById("score");

const boardSize = 20; // Ukuran grid (20x20)
const squareSize = board.offsetWidth / boardSize;
let snake = [{ x: 10, y: 10 }];
let food = { x: 5, y: 5 };
let direction = { x: 0, y: 0 };
let score = 0;
let gameInterval;

// Membuat papan permainan
function drawBoard() {
  board.innerHTML = "";
  // Gambar Snake
  snake.forEach(part => {
    const snakePart = document.createElement("div");
    snakePart.style.left = `${part.x * squareSize}px`;
    snakePart.style.top = `${part.y * squareSize}px`;
    snakePart.style.width = `${squareSize}px`;
    snakePart.style.height = `${squareSize}px`;
    snakePart.style.backgroundColor = "lime";
    snakePart.style.position = "absolute";
    board.appendChild(snakePart);
  });

  // Gambar Food
  const foodPart = document.createElement("div");
  foodPart.style.left = `${food.x * squareSize}px`;
  foodPart.style.top = `${food.y * squareSize}px`;
  foodPart.style.width = `${squareSize}px`;
  foodPart.style.height = `${squareSize}px`;
  foodPart.style.backgroundColor = "red";
  foodPart.style.position = "absolute";
  board.appendChild(foodPart);
}

// Gerakan Snake
function moveSnake() {
  const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
  snake.unshift(head);

  // Cek apakah snake makan makanan
  if (head.x === food.x && head.y === food.y) {
    score++;
    scoreDisplay.textContent = `Skor: ${score}`;
    placeFood();
  } else {
    snake.pop(); // Hapus ekor jika tidak makan
  }

  // Cek tabrakan dengan tembok atau tubuh sendiri
  if (
    head.x < 0 ||
    head.x >= boardSize ||
    head.y < 0 ||
    head.y >= boardSize ||
    snake.slice(1).some(part => part.x === head.x && part.y === head.y)
  ) {
    alert("Game Over! Skor Anda: " + score);
    clearInterval(gameInterval);
    resetGame();
  }
}

// Tempatkan makanan secara acak
function placeFood() {
  food = {
    x: Math.floor(Math.random() * boardSize),
    y: Math.floor(Math.random() * boardSize)
  };
}

// Reset Game
function resetGame() {
  snake = [{ x: 10, y: 10 }];
  direction = { x: 0, y: 0 };
  score = 0;
  scoreDisplay.textContent = `Skor: ${score}`;
  placeFood();
  drawBoard();
}

// Kontrol keyboard
document.addEventListener("keydown", event => {
  switch (event.key) {
    case "ArrowUp":
      if (direction.y === 0) direction = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (direction.y === 0) direction = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (direction.x === 0) direction = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (direction.x === 0) direction = { x: 1, y: 0 };
      break;
  }
});

// Jalankan permainan
function startGame() {
  resetGame();
  gameInterval = setInterval(() => {
    moveSnake();
    drawBoard();
  }, 200);
}

startGame();