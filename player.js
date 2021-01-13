// Global variables
let animate;
let board = document.getElementById("board");
let paint = board.getContext('2d');
let y_value;
let speed = 1;

class Player {

  // Constructs the player
  constructor(x, y, width, height, color) {
    // Set up the global variables
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = width;
    this.color = color;

  }

  // Draw out the player
  draw() {
    // Clear the paint board
    paint.clearRect(0, 0, 400, 400);

    // Draw out the rectangle
    paint.fillStyle = this.color;
    paint.fillRect(this.x, this.y, this.width, this.height);

  }
}

function fly() {

  // Keep recalling the method
  animate = requestAnimationFrame(fly);

  // Increase the value of y by one
  user.y = user.y + 1;

  // Draw the bird
  user.draw();
  checkCrash();

}

function up(e) {

  // Check if space bar is pressed
  if(e.keyCode == 32) {

    // Draw the bird
    user.draw();

    // Fly upwards
    user.y -= 20;

    // Call function to make the bird fly downwards
    fly();

    // Stop moving the bird down
    window.cancelAnimationFrame(animate);
  }
}
