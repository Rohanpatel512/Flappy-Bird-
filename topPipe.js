class TopPipe {
  // Construct the top pipe
  constructor(x, y, width, height, color) {
    // Initialize the variables
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  // Function to draw the top pipe
  drawTopPipe() {
    // Draw the top pipe
    paint.fillStyle = this.color;
    paint.fillRect(this.x, this.y, this.width, this.height);
  }

  // Function to change height of pipe
  changeHeight() {

    // Decrease the value of y value by 100 and store in variable
    this.height = y_value - 70;

    // Set the y value of the pipe
    this.y = 0;

  }
}

function moveTopPipe() {

  // Request animation frame on function
  var animation = requestAnimationFrame(moveTopPipe);

  // Decrease the 'x' value of pipe
  pipeOne.x -= speed;

  // Draw all components (bird, top and bottom pipe)
  user.draw();
  pipeOne.drawTopPipe();
  pipeTwo.drawBottomPipe();

  // Check if the pipe 'x' value is less then players
  if(pipeOne.x < user.x - user.x) {
    // Reset the 'x' value
    pipeOne.x += 390;
  }

}
