class BottomPipe {
  // Construct the bottom pipe
  constructor(x, y, width, height, color) {
    // Initialize all variables for bottom pipe
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  // Function to draw bottom pipe
  drawBottomPipe() {

    // Draw the bottom pipe
    paint.fillStyle = this.color;
    paint.fillRect(this.x, this.y, this.width, this.height);

  }

  // Function to change the height of pipe
  changeHeight() {

    // Get a random height and store in variable
    this.height = Math.floor(Math.random() * 200);

    // Check if height is less then 30
    if(this.height < 30) {
      // Set the height to 30
      this.height = 30;
    }

    // Set the y value of the pipe
    this.y = board.height - this.height;

    // Store the y-value in variable
    y_value = this.y;

  }
}

function moveBottomPipe() {

  // Request animation frame on function
  var animation = requestAnimationFrame(moveBottomPipe);

  // Decrease the 'x' value of pipe
  pipeTwo.x -= speed;

  // Draw all components (bird, top and bottom pipe)
  user.draw();
  pipeOne.drawTopPipe();
  pipeTwo.drawBottomPipe();

  // Check if the x value is less then birds 'x' value
  if(pipeTwo.x < user.x - user.x) {
    pipeTwo.x += 390;
    score += 1;
    document.getElementById("score").innerHTML = score;
    pipeTwo.changeHeight();
    pipeOne.changeHeight();
  }

}
