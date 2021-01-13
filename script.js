// Global variables
let score = 0;
const user = new Player(50, 200, 20, 20, "Red");
const pipeOne = new TopPipe(400, 0, 20, 60, "Green");
const pipeTwo = new BottomPipe(400, 200, 20, 200, "Green");


function loadWindow() {
  // Get the span element and store in variable
  var displayScore = document.getElementById("score");

  // Display the score to user
  displayScore.innerHTML = score;

  // Draw the user and both pipes
  user.draw();
  pipeOne.drawTopPipe();
  pipeTwo.drawBottomPipe();

  // Alert user to click okay when they are ready to play
  alert("Click okay to start playing");

  // Call method to start animation, and a key listener
  fly();
  moveTopPipe();
  moveBottomPipe();

  // Add a key press onto the window
  window.addEventListener("keypress", up);

}

function checkCrash() {

  // Get the canvas by id and store in variable
  var gameBoard = document.getElementById("board");

  // Get the height of the board
  var height = gameBoard.height;

  // Check if the bird has crashed at the bottom or top
  if(user.y == height - user.height) {
    // Display an alert and reload the window
    alert("You have crashed! Your Score: " + score);
    location.reload();
  }

  // Call method to check for pipe collisions
  if(bottomPipeCrash()) {
    alert("You have crashed! Your Score: " + score);
    location.reload();
  } else if(topPipeCrash()) {
    alert("You have crashed! Your Score: " + score);
    location.reload();
  }
}

function bottomPipeCrash() {

  // Get the right and bottom sides of the player
  var right = user.x + user.width;
  var bottom = user.y + user.height;

  // Get the left and top sides of the pipe
  var pipeLeft = pipeTwo.x;
  var pipeTop = pipeTwo.y;

  // Return if there is a crash
  return right > pipeLeft && bottom > pipeTop;

}

function topPipeCrash() {

  // Get the right and top sides of the player
  var right = user.x + user.width;
  var top = user.y;

  // Get the bottom and left side of the pipe
  var pipeLeft = pipeOne.x;
  var pipeBottom = pipeOne.y + pipeOne.height;

  // Return if there is a crash
  return right > pipeLeft && top < pipeBottom;

}
